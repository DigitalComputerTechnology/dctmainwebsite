import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firestore } from '../../firebaseConfig';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AddBlogForm.scss';
import Header from '../Header';
import Footer from '../Footer';

const AddBlog = () => {
    const quillRef = useRef(null);
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    if (!isAuthenticated) {
        return (
            <>
                <Header />
                <div className="container" style={{ paddingTop: '100px', height: '70vh' }}>
                    <div className="alert alert-warning mt-5">
                        You need to be logged in to add a blog. <Link to="/login">Login here</Link>.
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first file
        if (file) {
            setImage(file); // Update the state with the selected file
        } else {
            alert('Please select an image file.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) {
            alert('Please upload an image.');
            return;
        }

        const storage = getStorage();
        const storageRef = ref(storage, `images/blogs/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                alert('Error uploading image. Please try again.');
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                await addDoc(collection(firestore, 'blogs'), {
                    title: title.trim(),
                    description: description.trim(),
                    category: category.trim(),
                    imageSrc: downloadURL,
                    createdAt: serverTimestamp(),
                });

                setTitle('');
                setDescription('');
                setCategory('');
                setImage(null);
                setUploadProgress(0);
                alert('Blog added successfully');
                navigate('/blogs');
            }
        );
    };

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const insertVideo = () => {
        const videoUrl = prompt('Enter YouTube Video URL');
        if (videoUrl) {
            const videoId = extractVideoID(videoUrl);
            if (videoId) {
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                const videoEmbed = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                const quill = quillRef.current.getEditor();
                const range = quill.getSelection();

                // Ensure range is valid
                if (range) {
                    quill.insertEmbed(range.index, 'video', videoEmbed);
                    quill.setSelection(range.index + 1); // Move the cursor after the inserted video
                } else {
                    alert('Unable to get selection range.');
                }
            } else {
                alert('Invalid YouTube URL');
            }
        }
    };


    const extractVideoID = (url) => {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const modules = {
        toolbar: {
            container: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link', 'image', 'video'], // Add 'video' button
                ['clean'],
            ],

        },
    };

    return (
        <>
            <Header />
            <div className="container" style={{ paddingTop: '10px' }}>
                <div className="d-flex justify-content-end mb-3">
                    <button onClick={handleLogout} className="btn btn-danger">
                        Logout
                    </button>
                </div>
                <h2 style={{ color: 'green' }}>Add New Blog</h2>
                <form onSubmit={handleSubmit} className='m-5 px-5'>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <ReactQuill
                            ref={quillRef}
                            id="description"
                            value={description}
                            onChange={handleDescriptionChange}
                            modules={modules}
                            style={{ height: '400px', paddingBottom: '55px' }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            id="category"
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Upload Image:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            className="form-control mb-4"
                            onChange={handleImageChange}
                        />
                    </div>
                    {uploadProgress > 0 && (
                        <div className="form-group">
                            <label>Upload Progress:</label>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${uploadProgress}%` }}
                                    aria-valuenow={uploadProgress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {Math.round(uploadProgress)}%
                                </div>
                            </div>
                        </div>
                    )}
                    <button type="submit" className="btn form-control" style={{ backgroundColor: '#7ced03' }}>
                        Add Blog
                    </button>
                </form>
                {/* Preview Section */}
                <hr />
                <div className="preview mt-5">
                    <h2>Blog Preview</h2>
                    <h3>{title}</h3>
                    <p>Category: {category}</p>
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    {image && (
                        <div>
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddBlog;

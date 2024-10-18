import React, { Component } from "react";
import "../css/Services.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { collection, getDocs, query, addDoc } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

function Blog() {
  const [blogs, setBlogs] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [sortBy, setSortBy] = React.useState("title");
  const [sortOrder, setSortOrder] = React.useState("asc");
  const [filterBy, setFilterBy] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [blogsPerPage, setBlogsPerPage] = React.useState(6);

  const fetchBlogs = async () => {
    const blogsRef = collection(firestore, "blogs");
    const q = query(blogsRef);
    const querySnapshot = await getDocs(q);

    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const categories = ["all", ...new Set(blogs.map((blog) => blog.category))];

    setBlogs(blogs);
    setCategories(categories);
  };

//   const handleSort = (sortBy) => {
//     let sortOrder = sortOrder === "asc" ? "desc" : "asc";
//     setSortBy(sortBy);
//     setSortOrder(sortOrder);
//   };
  const handleSort = (sortBy) => {
    setSortBy(sortBy);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleFilter = (filterBy) => {
    setFilterBy(filterBy);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortBlogs = () => {
    let filteredBlogs = [...blogs];

    if (filterBy !== "all") {
      filteredBlogs = filteredBlogs.filter((blog) => blog.category === filterBy);
    }

    filteredBlogs.sort((a, b) => {
      if (sortBy === "title") {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "popularity") {
        return sortOrder === "asc" ? a.popularity - b.popularity : b.popularity - a.popularity;
      }
      return 0;
    });

    return filteredBlogs;
  };

  const truncateText = (text, letterLimit) => {
    if (text.length > letterLimit) {
      return text.slice(0, letterLimit) + "...";
    }
    return text;
  };

  const addNewBlog = async (newBlog) => {
    try {
      await addDoc(collection(firestore, "blogs"), newBlog);
      fetchBlogs();
    } catch (error) {
      console.error("Error adding new blog:", error);
    }
  };

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs = sortBlogs();

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredBlogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <section className="blog-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_contact_header_img.webp)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "300px" }}>
        <Header />
        <div className="container my-5">
          <div className="row text-center">
            <h1 className="text-uppercase text-white fw-bolder mt-5 fs-1"><u>BLOG</u></h1>
          </div>
        </div>
      </section>
      <section className="blog-second-section my-4">
        <div class="container">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
              <Link to="/addnewblog" className="btn btn-outline-success mb-3 mb-md-0 px-5">
                Add New Blog
              </Link>
              <div className="d-flex flex-column flex-md-row">
                < div className="dropdown mr-2 mb-3 mb-md-0">
                  <button
                    className="btn btn-outline-success dropdown-toggle px-5"
                    type="button"
                    id="sortDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by{" "}
                    <i className={`bi ${sortOrder === "asc" ? "bi-sort-up" : "bi-sort-down"}`}></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="sortDropdown">
                    <button className="dropdown-item" onClick={() => handleSort("date")}>
                      Date
                    </button>
                    <button className="dropdown-item" onClick={() => handleSort("popularity")}>
                      Popularity
                    </button>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-outline-success dropdown-toggle px-5 ms-1"
                    type="button"
                    id="filterDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Filter by
                  </button>
                  <div className="dropdown-menu" aria-labelledby="filterDropdown">
                    {categories.map((category) => (
                      <button className="dropdown-item" key={category} onClick={() => handleFilter(category)}>
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-row row align-items-center">
            {currentBlogs.map((blog) => (
              <div class="col-md-4">
                <Link className="text-decoration-none fs-2" to={`/blog/${blog.id}`}>
                  <video width={"100%"} autoPlay loop muted>
                    <source src="/images/blog_images/digital_computer_technology_kotputli_digital_marketing_blog1.mp4" type="video/mp4"></source>
                  </video>
                </Link>
                <div className="p-2">
                  <Link className="text-decoration-none fs-2" to={`/blog/${blog.id}`}>
                    <h2 className="fs-3">{truncateText(blog.title, 40)}</h2>
                  </Link>
                  <h5>{blog.category}</h5>
                  <p>{truncateText(blog.description, 60)}</p>
                  <Link className="text-decoration-none border rounded-pill px-5 py-2" to={`/blog/${blog.id}`}>View</Link>
                </div>
              </div>
            ))}
          </div>
          <nav aria-label="Blog Pagination">
            <ul className="pagination pagination-dark justify-content-center text-white">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                  &laquo;
                </button>
              </li>
              {pageNumbers.map((number) => (
                <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
                  <button onClick={() => handlePageChange(number)} className="page-link">
                    {number}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === pageNumbers.length ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
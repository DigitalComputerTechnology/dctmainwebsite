import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Header from './components/Header';
import Footer from './components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // State to hold error messages
    const { login } = useAuth();
    const navigate = useNavigate();
    const authFirebase = getAuth();

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError(null); // Reset error state before login attempt
    //     try {
    //       await signInWithEmailAndPassword(authFirebase, email, password);
    //       login(); // Call the login function from context
    //       console.log("Login Success!");
    //       navigate('/addnewblog'); // Use navigate instead of history.push
    //     } catch (error) {
    //       console.error('Error signing in: ', error);
    //       setError('Invalid credentials'); // Set error message for UI feedback
    //     }
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true); // Start loading
        try {
            await login(email, password);
            navigate('/addnewblog');
        } catch (error) {
            setError('Invalid credentials');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <Header />
            <div className="container" style={{ height: '90vh' }}>
                <div className="row justify-content-center pt-5">
                    <div className="col-md-6 mt-5">
                        <div className="card mt-5">
                            <div className="card-body text-left my-3">
                                <h2 className="card-title text-center">Login</h2>
                                {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required // Ensure email is filled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required // Ensure password is filled
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block mt-3"
                                        disabled={loading}
                                    >
                                        {loading ? 'Logging in...' : 'Login'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
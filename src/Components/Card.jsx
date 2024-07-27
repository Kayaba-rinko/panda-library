
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ searchQuery }) => {
    const [bookData, setBookData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookData = async () => {
            setLoading(true);
            const query = searchQuery || 'harry potter';
            const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setBookData(data.docs.slice(0, 15));
                setError(null);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching book data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookData();
    }, [searchQuery]);

    return (
        <div className='custom-margin-top'>
            <div className="my-3 mb-3">
                {loading ? (
                    <div className="text-center">
                        <div className='loading-container'>
                            <img
                                className='loading-image shadow-lg'
                                src="https://media1.tenor.com/m/DpgEL1ITpE4AAAAd/nanashi-mumei-loading.gif"
                                alt="Loading..."
                            />
                            <p className='loading-text'>Loading...</p>
                        </div>
                    </div>
                ) : error ? (
                    <div className="alert alert-danger">{error}</div>
                ) : (
                    <div className="row mx-3">
                        <h1>Books</h1>
                        <div className="card-container mt-3">
                            {bookData.map((book) => (
                                <div key={book.key} className="card-item shadow-lg pt-2 rounded hover">
                                    <div className="card" style={{ width: '200px', height: '300px' }}>
                                        <Link to={`/books/${book.id}`}>
                                            <img
                                                className="rounded"
                                                src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150'}
                                                alt={book.title}
                                                style={{ width: '200px', height: '300px' }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <h5>{book.title}</h5>
                                        <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;


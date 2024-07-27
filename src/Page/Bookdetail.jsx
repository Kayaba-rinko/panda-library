import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Bookdetail = () => {
    const { key } = useParams(); // Extract the book ID from the URL
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            setLoading(true);
            const url = `https://openlibrary.org/${key}.json`; 
            
            console.log(url)// Correct endpoint for works

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setBook(data);
                setError(null);
            } catch (error) {
                setError('Error fetching book details. Please try again later.');
                console.error('Error fetching book details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [key]);

    return (
        <div className="container mt-4">
            {loading ? (
                <div className="text-center">
                    <img
                        src="https://media1.tenor.com/m/DpgEL1ITpE4AAAAd/nanashi-mumei-loading.gif"
                        alt="Loading..."
                        style={{ width: '150px', height: '150px' }}
                    />
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="alert alert-danger">{error}</div>
            ) : (
                book && (
                    <div>
                        <h1>{book.title}</h1>
                        <h2>Author: {book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}</h2>
                        <p><strong>Published:</strong> {book.publish_date || 'Unknown'}</p>
                        <img
                            src={book.covers && book.covers[0] ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : 'https://via.placeholder.com/300'}
                            alt={book.title}
                            style={{ width: '300px', height: 'auto' }} // Maintain aspect ratio
                        />
                        <p><strong>Description:</strong> {book.description ? book.description.value : 'No description available'}</p>
                        {/* Add more details as needed */}
                    </div>
                )
            )}
        </div>
    );
};

export default Bookdetail;

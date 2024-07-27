// card.js
import React, { useState, useEffect } from 'react';

const Card = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await fetch('https://openlibrary.org/search.json?q=harry+potter');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Assuming the relevant book data is in the 'docs' array
                const slicedData = data.docs.slice(0, 15); // Get only the first 15 books
                setBookData(slicedData);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        fetchBookData();
    }, []);

    return (
        <div className='mx-3 my-3'>
            <h1>Book</h1>
            <div className="containe ">
                {bookData.map((book) => (
                    <div key={book.key} className="card" style={{ width: '200px', height: '300px' }}>
                        <img
                            src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150'}
                            alt={book.title}
                            style={{ width: '200px', height: '300px' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;

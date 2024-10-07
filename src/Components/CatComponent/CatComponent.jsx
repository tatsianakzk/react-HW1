import React, { useState, useEffect } from 'react';

function CatImage() {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCatImage = async () => {
            try {
                const response = await fetch('https://cataas.com/cat?json=true');
                const data = await response.json();
                const imageUrl = `https://cataas.com/cat/${data._id}?width=500&height=600`;
                setImageUrl(imageUrl);
            } catch (error) {
                console.error('Error fetching the cat image:', error);
                setError('Error loading image');
            }
        };

        fetchCatImage();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {imageUrl ? (
                <img src={imageUrl} alt="Cute Cat" className="cat-image" />
            ) : (
                <p>Loading cat image...</p>
            )}
        </div>
    );
}

export default CatImage;
import React, { useState } from 'react';
import './Id.css';

function Id() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [infoText, setInfoText] = useState('');

    const handleImageUpload = event => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleTextChange = event => {
        setInfoText(event.target.value);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Scan Your Id</h1>
            <div className="Id">
                <div className="imageContainer">
                    <label className="imageUpload">
                        {selectedImage ?
                            <img src={selectedImage} alt="Selected" /> :
                            'Click here to upload your id'
                        }
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                    </label>
                </div>
                <textarea value={infoText} onChange={handleTextChange} />
            </div>
        </div>
    );

};

export default Id;

import React from 'react';
import picture from './../../data/image.png'

console.log(picture);

const MemPicture = () => (
    <div>
        <h3> fotos/imagenes del Posteo</h3>
        <img src={picture}></img>
    </div>
);

export default MemPicture;
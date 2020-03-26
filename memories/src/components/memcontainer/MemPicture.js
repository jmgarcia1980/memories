import React from 'react';
import './styles.css';


const MemPicture = () => (
    
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            <li data-target="#carouselExampleControls" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="static/images/01.jpg" className="d-block w-100" alt="img1"/>
            </div>
            <div className="carousel-item">
                <img src="static/images/02.jpg" className="d-block w-100" alt="img2"/>
            </div>
            <div className="carousel-item">
                <img src="static/images/03.jpg." className="d-block w-100" alt="img3"/>
            </div>
            <div className="carousel-item">
                <img src="static/images/04.jpg." className="d-block w-100" alt="img4"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

);

export default MemPicture;
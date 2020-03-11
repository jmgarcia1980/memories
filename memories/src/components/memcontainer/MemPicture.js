import React from 'react';
import './styles.css';


const MemPicture = () => (
    <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="ratio: 7:2; min-height: 300; max-height: 350; animation: push">
        <ul className="uk-slideshow-items">
            <li>
                <img ClassName="imgMemPicture" src="static/images/01.jpg" width="300px" height="300px" alt=""/>
            </li>
            <li>
                <img ClassName="imgMemPicture" src="static/images/02.jpg" alt="" width="300px" height="300px"/>
            </li>
            <li>
                <img ClassName="imgMemPicture" src="static/images/03.jpg" alt="" width="300px" height="300px"/>
            </li>
            <li>
                <img ClassName="imgMemPicture" src="static/images/01A.jpg" alt="" uk-cover="true"/>
            </li>

        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
    </div>

);

export default MemPicture;
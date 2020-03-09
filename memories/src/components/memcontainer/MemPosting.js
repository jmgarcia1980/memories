import React from 'react';
import MemTitle from './MemTitle';
import MemPicture from './MemPicture';
import MemData from './MemData';
import './styles.css';

const MemPosting = () => (
    <div  className= "memPostingCont">
        <spam className="memPostingTitle"> Posteo principal.....</spam>
        <MemTitle />
        <MemPicture />
        <MemData />
    </div>
);

export default MemPosting;
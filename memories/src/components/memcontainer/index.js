import React from 'react';
import MemPosting from './MemPosting';
import './styles.css';

const MemContainer = ()=>(
    <div className="memContainerCont">
        <MemPosting />
        <MemPosting />
        <MemPosting />
    </div>
);

export default MemContainer;
import React from 'react';
import ReactLoading from 'react-loading';
import './loading.css';


const Card = ({ type, color }) => (
    <ReactLoading delay='0' className='loading-animation' type={type} color={color} height='200' width='200' />
);
export default Card;
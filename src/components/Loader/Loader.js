import React from 'react'
import './Loader.css';
import loader from '../../assets/loader.svg';

export default function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt='loader-svg'/>
    </div>
  );
}

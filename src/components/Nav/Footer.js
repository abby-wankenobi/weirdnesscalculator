import React from 'react';
import classes from './Footer.css';
import Instagram from '../../assets/instagram.svg';
import Github from '../../assets/github.svg';


const footer = (props) => (
  <div className="footer">
    <span className="name">Abigail Swarth</span>

    <br/>

    <a target="_blank" href="https://www.instagram.com/abbywan.kenobi/" className="footer-link">
      <span><img className="icon" src={Instagram} />Instagram</span>
    </a>

    <br/>

    <a target="_blank" href="https://github.com/abby-wankenobi" className="footer-link">
      <span><img className="icon" src={Github} />Github</span>
    </a>

    <br/>

    <span className="copy">&copy;2019</span>
  </div>
);

export default footer;

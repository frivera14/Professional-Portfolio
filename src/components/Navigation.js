import React, { useState } from 'react';

function Navigation(props) {

    const {
        contactSelected,
        setContactSelected
    } = props;
    
    return(
        <nav>
        <ul>
          <li>
            <a href="#About" onClick={() => setContactSelected(false)}>About Me</a>
          </li>
          <li className={contactSelected && 'navActive'}>
            <a href="#Project" onClick={() => setContactSelected(true)}>Projects</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
        </ul>
      </nav>
    )
}

export default Navigation
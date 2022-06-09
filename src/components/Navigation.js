import React, { useState } from 'react';

function Navigation({ currentPage, changeIt}) {
    return(
        <nav>
        <ul>
          <li>
            <a href="#About" onClick={() => changeIt('About Me')}>About Me</a>
          </li>
          <li className={currentPage && 'navActive'}>
            <a href="#Project" onClick={() => changeIt('Projects')}>Projects</a>
          </li>
          <li className={currentPage && 'navActive'}>
            <a href="#Contact" onClick={() => changeIt('Contact Me')}>Contact Me</a>
          </li>
          <li className={currentPage && 'naveAcive'}>
            <a href="#Resume" onClick={() => changeIt('Resume')}>Resume</a>
          </li>
        </ul>
      </nav>
    )
}

export default Navigation
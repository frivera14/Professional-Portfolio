import React from "react";

function Resume() {
    return (
        <>
            <div className="container mt-3 fs-5">
               <a className="list-items" href={require('../assets/Francisco_Rivera22.docx')} download> <p>Find my resume here <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg></p></a>
                <ul className="list-items">
                    <h4>Front-end Skills:</h4>
                    <li>React</li>
                    <li>Handlebars</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML5</li>
                </ul>
                <ul className="list-items">
                    <h4>Back-end Skills:</h4>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>Express</li>
                    <li>Nodemailer</li>
                </ul>
            </div>
            <div className="d-flex container justify-content-center flex-wrap">
                <img alt={''} className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/logo512.png`)}></img>
                <img alt={''} className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/Bootstrap_logo.svg.png`)}></img>
                <img alt={''} className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/JavaScript-logo.png`)}></img>
                <img alt={''} className="pt-5 h-25 w-25 p-4 m-4" src={require(`../assets/resume/1280px-Node.js_logo.svg.png`)}></img>
                <img alt={''} className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/pngwing.com.png`)}></img>
                <img alt={''} className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/mongopng.png`)}></img>
            </div>

        </>



    )
}

export default Resume
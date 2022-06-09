import React from "react";

function Resume() {
    return(
        <>
        {/* <div className="fs-5">
          <a className="text-dark" href={require('../assets/Francisco_Rivera22.docx')} download><p>Download Resume</p></a>
        </div> */}
        <div className="d-flex container justify-content-center flex-wrap">
            <img className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/logo512.png`)}></img>
            <img className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/Bootstrap_logo.svg.png`)}></img>
            <img className="pt-5 h-25 w-25 p-4 m-4" src={require(`../assets/resume/1280px-Node.js_logo.svg.png`)}></img>
            <img className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/JavaScript-logo.png`)}></img>
            <img className="h-25 w-25 p-4 m-4" src={require(`../assets/resume/pngwing.com.png`)}></img>
            <img className="pt-5 h-25 w-25 p-4 m-4" src={require(`../assets/resume/handlebarslogo.png`)}></img>
        </div>
        
        </>
        


    )
}

export default Resume
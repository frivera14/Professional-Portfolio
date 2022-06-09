import React from "react";

function About() {
    return (
        <>
            <div className="starter">
                <div className="starter-text">
                    <p className="text-muted">Web Developer</p>
                    <h2>Francisco Rivera</h2>
                </div>
            </div>
            <div id="about-me" className="container about-me">
                <div className="me">
                    <img src={require(`../assets/aboutmepic.jpg`)} alt="pic of Francisco" />
                    <p class="text-muted p-2">
                        I am a Fullstack Web Developer, based in Arizona and current student at the University of Arizona: Web
                        Development Bootcamp. Through self-instruction and guided training I have gained significant skill and I strive
                        to help improve, and create more
                        efficient, user-friendly, and interactive web applications.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
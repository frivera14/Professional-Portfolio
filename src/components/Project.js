import React, { useState } from "react";

function Projects() {

    const [projects] = useState(
        [
            { name: 'Track Your Cash', picPath: '0.png', github: 'https://github.com/frivera14/Track-Your-Cash', description: 'This application was developed for users to be able to have a budget tracking application that can work offline if there is connectivity problems. Once users are back online, data that was entered is uploaded to the server. The application is also downloadable to mobile phones and desktops.', url: 'https://obscure-atoll-25805.herokuapp.com', techs: "MongoDB, Express, PWA, Javascript" },
            { name: 'Coding Hub', picPath: '1.png', github: 'https://github.com/frivera14/Coding-Hub-Project', description: 'This project was built to create a blog for tech fans and workers to discuss and share ideas. Built under the MVC Paradigm using Handlebars, users can log into their own accounts, post and comment on others posts about their favorite coding topics.', url: 'http://blooming-beach-64381.herokuapp.com', techs: "Handlebars.js, Express, SQL, Javascript, Bootstrap" },
            { name: 'Triptation', picPath: '2.png', github: 'https://github.com/frivera14/Travel-Planner', description: 'Travel planning app that allows users to find popular attractions and weather data for the city and dates of their choosing, as well as save an intinerary.', url: 'https://frivera14.github.io/Travel-Planner', techs: "HTML, Bulma, Javascript, CSS, Third-Party API" },
            { name: 'Workday Scheduler', picPath: '3.png', github: 'https://github.com/frivera14/workdaysched', description: 'Daily planner app for 9 to 5 employees to keep track of tasks. As the day goes by, time slots change color reflecting current, future and previous tasks.', url: 'https://frivera14.github.io/workdaysched', techs: "Moment.js, jQuery, Bootstrap, HTML" },
            { name: 'Javascript Quiz Game', picPath: '4.png', github: 'https://github.com/frivera14/quizgame', description: 'Basic Javascript knowledge Quiz Game! Answer multiple choice questions, where if there is an incorrect answer time will be deducted from the counter. Your remaining time will be the final score.', url: 'https://frivera14.github.io/quizgame', techs: "HTML, CSS, Javascript" },
            { name: 'Random Password Generator', picPath: '5.png', github: 'https://github.com/frivera14/password-generator', description: 'Random Password Generator where prompts ask for a series of questions to include lower case, upper case, numbers and special characters.', url: 'https://frivera14.github.io/password-generator', techs: "HTML, CSS, Javascript" }
        ]
    )

    const [display, setDisplay] = useState(0);

    const cycleProjects = (prev = false) => {
        const nextProject = prev ? display - 1 : display + 1;
        const lastProject = projects.length - 1;
        if (nextProject < 0) return setDisplay(lastProject)
        if (nextProject > lastProject) return setDisplay(0);
        setDisplay(nextProject)
    }



    return (
        <>
        <div className="container mt-3 mb-3 w-50">
            <div className="card border border-warining">
                <img src={require(`../assets/projects/${projects[display].picPath}`)}/>
                <div className="card-body">
                    <p className="text-muted">{projects[display].techs}</p>
                    <a className="card-title text-danger" href={projects[display].url} target={"_blank"}>
                        <h5>{projects[display].name}</h5>
                    </a>
                    <a className="text-dark" target={"_blank"} href={projects[display].github}>

                    <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        className="bi bi-github" viewBox="0 0 16 16">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                            </a>
                    <p className="text-muted">{projects[display].description}</p>
                </div>
                    <div className="mb-2 me-1 ms-1 d-flex justify-content-between">
                    <button id="btn" className="btn text-light" onClick={() => cycleProjects(true)}>Previous</button>
                    <button id="btn" className="btn text-light" onClick={() => cycleProjects()}>Next</button>
                    </div>
            </div>
        </div>


        </>
    )
}

export default Projects


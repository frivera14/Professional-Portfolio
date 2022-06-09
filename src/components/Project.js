import React, { useState } from "react";

function Projects() {

    const [projects] = useState(
        [
            {name: 'Track Your Cash', description: 'This application was developed for users to be able to have a budget tracking application that can work offline if there is connectivity problems. Once users are back online, data that was entered is uploaded to the server. The application is also downloadable to mobile phones and desktops.', url: '', techs: ['MongoDB', 'Express', 'PWA', 'Javascript']},
            {name: 'Coding Hub', description: 'This project was built to create a blog for tech fans and workers to discuss and share ideas. Built under the MVC Paradigm using Handlebars, users can log into their own accounts, post and comment on others posts about their favorite coding topics.', url: '', techs: ['Handlebars.js', 'Express', 'SQL', 'Javascript', 'Bootstrap']},
            {name: 'Triptation', description: 'Travel planning app that allows users to find popular attractions and weather data for the city and dates of their choosing, as well as save an intinerary.', url: '', techs: ['HTML', 'Bulma', 'Javascript', 'CSS', 'Third-Party API']},
            {name: 'Workday Scheduler', description: 'Daily planner app for 9 to 5 employees to keep track of tasks.', url: '', techs: ['Moment.js', 'jQuery', 'Bootstrap', 'HTML']},
            {name: 'Javascript Quiz Game', description: 'Basic Javascript knowledge Quiz Game! Answer multiple choice questions, where if there is an incorrect answer time will be deducted from the counter. Your remaining time will be the final score.', url: '', techs: ['HTML', 'CSS', 'Javascript']},
            {name: 'Random Password Generator', description: 'Random Password Generator where prompts ask for a series of questions to include lower case, upper case, numbers and special characters.', url: '', techs: ['HTML', 'CSS', 'Javascript']}
        ]

    )

    return(
        
        <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
            {projects.map((project, i) => (
                <div className="col">
                    <div className="card border border-warning">
                        <img src={require(`../assets/projects/${i}.png`)} className="card-img-top" ></img>
                        <div className="card-body">
                            <a className="card=title text-danger" target={"_blank"}>
                                <h5>{project.name}</h5>
                            </a>
                            <p className="text-muted">{project.description}</p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    
    )
}

export default Projects
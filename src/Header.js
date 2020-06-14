import React from "react";

export const Header = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
        </nav>
    )
}

export const Home = () => {
    return (
        <div>
            Hello Welcome to My Portfolio
        </div>
    )
}

export const About = () => {
    return (
        <div>
            React Application developer, well versed in HTML, CSS, JavaScript and TypeScript
        </div>
    )
}

export const Contacts = () => {
    return (
        <div>
            <div>Contacts</div>
            <div>Github</div>
            <div>LinkedIn</div>
            <div>Stack overflow</div>
        </div>
    )
}

export const Projects = () => {
    return (
        <div>
            <div>This are my personal projects as I cann't reveal the projects I worked for my clients</div>
            <div>Project 1</div>
            <div>Project 2</div>
            <div>Project 3</div>
            <div>Project 4</div>
        </div>
    )
}
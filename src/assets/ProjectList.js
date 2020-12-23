import timestamp from "../images/timestamp.png"
import newsBot from "../images/newsBot.png"
import pokeChallenge from "../images/pokeChallenge.png"

const projectsList = [
    {
        id: 1,
        title: "Timestamp",
        stackUsed: "PostgreSQL, Express.js, React, Node.js, React Bootstrap", 
        description: "This working time tracking application is built as PERN stack web application with CR(U)D operations. The update operation and authentication is still on development",
        image: timestamp,
        url: "https://github.com/Abrellr/finale"
    },
    {
        id: 2,
        title: "Pokemon",
        stackUsed: "React, React Drag & Drop, Pokemon API, NodeJS, Express, MaterialUI",
        description: "A react application with pokemon challenge theme, using a simple backend managed with Node and Express.",
        image: pokeChallenge,
        url: "https://pokemonwbs.netlify.app"
    },
    {
        id: 3,
        title: "NewsBot",
        stackUsed: "React, Hackernews API, vanilla CSS",
        description: "News search site using hackernews api and vanilla css on react",
        image: newsBot,
        url: "https://abrellr.github.io/hackernews/"
    }
]

export default projectsList;
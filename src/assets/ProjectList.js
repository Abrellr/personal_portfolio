import timestamp from "../images/timestamp.png"
import newsBot from "../images/newsBot.png"
import getShitDone from "../images/getShitDone.png"
import pokeChallenge from "../images/pokeChallenge.png"

const projectsList = [
    {
        id: 1,
        title: "Timestamp",
        stackUsed: "PostgreSQL, Express.js, React, Node.js, React Bootstrap", 
        description: "An individual work theme project using PERN stack",
        image: timestamp
    },
    {
        id: 2,
        title: "Pokemon",
        stackUsed: "React, React Drag & Drop, Pokemon API, NodeJS, Express, MaterialUI",
        description: "A react application with pokemon challenge theme, using a simple backend managed with Node and Express.",
        image: pokeChallenge
    },
    {
        id: 3,
        title: "NewsBot",
        stackUsed: "React, Hackernews API, vanilla CSS",
        description: "News search site using hackernews api and vanilla css on react",
        image: newsBot
    }
]

export default projectsList;
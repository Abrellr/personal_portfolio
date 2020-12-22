import timestamp from "../images/timestamp.png"
import newsBot from "../images/newsBot.png"
import getShitDone from "../images/getShitDone.png"
import pokeChallenge from "../images/pokeChallenge.png"

const projectsList = [
    {
        id: 1,
        title: "Timestamp",
        stackUsed: "PostgreSQL, Express.js, React, Node.js, React Bootstrap", 
        description: "a project final",
        image: timestamp
    },
    {
        id: 2,
        title: "Pokemon",
        stackUsed: "React, React Drag & Drop, Pokemon API, MaterialUI",
        description: "group work again",
        image: pokeChallenge
    },
    {
        id: 3,
        title: "NewsBot",
        stackUsed: "React, Hackernews API, vanilla CSS",
        description: "group work",
        image: newsBot
    },
    {
        id: 4,
        title: "Get sh*t done",
        stackUsed: "vanilla JavaScript, CSS",
        description: "group work at wbs",
        image: getShitDone
    }
]

export default projectsList;
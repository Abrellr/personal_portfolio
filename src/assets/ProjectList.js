import timestamp from "../images/timestamp.png"
import newsBot from "../images/newsBot.png"
import pokeChallenge from "../images/pokeChallenge.png"
import portfolio from "../images/portfolio.png"
import contentful from "../images/contentful.png"

const projectsList = [
    {
        id: 1,
        title: "Timestamp",
        stackUsed: "PostgreSQL, Express.js, React, Node.js, React Bootstrap", 
        description: "This work-time tracking application is built as PERN stack web application with CRUD operations.",
        image: timestamp,
        url: "https://abrell-timestamp.netlify.app/",
        github: "https://github.com/Abrellr/finale"
    },
    {
        id: 2,
        title: "Pokemon",
        stackUsed: "React, React Drag & Drop, Pokemon API, NodeJS, Express, MaterialUI",
        description: "A react application with pokemon challenge theme, using combination of a simple JSON file and Poke API on the backend.",
        image: pokeChallenge,
        url: "https://pokemonwbs.netlify.app",
        github: "https://github.com/imodrews/pokemon_frontend"
    },
    {
        id: 3,
        title: "NewsBot",
        stackUsed: "React, Hackernews API, vanilla CSS",
        description: "News search site using hackernews api and vanilla css on react.",
        image: newsBot,
        url: "https://abrellr.github.io/hackernews/",
        github: "https://github.com/Abrellr/hackernews"
    },
    {
        id: 4,
        title: "Portfolio",
        stackUsed: "React, MDBootstrap",
        description: "A single page application using react and MDBootstrap for react on the UI.",
        image: portfolio,
        url: "https://abrellr-r.netlify.app",
        github: "https://github.com/Abrellr/personal_portfolio"
    },
    {
        id: 5,
        title: "Contentful Cookbok",
        stackUsed: "React, Contentful, vanilla CSS",
        description: "A react page to test the headless CMS with contentful.",
        image: contentful,
        url: "https://contentful-cookbook.netlify.app/",
        github: "https://github.com/Abrellr/contentful_cookbook"
    }
]

export default projectsList;
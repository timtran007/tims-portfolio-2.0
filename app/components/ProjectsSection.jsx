'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import mealTimeImage from '../../public/images/projects/meal-time.png'
import foodiesImage from '../../public/images/projects/foodies.png'
import dogWalkingImage from '../../public/images/projects/dog-walking-htx.png'
import decisiveDigitalMarketingImage from '../../public/images/projects/decisive-digital-marketing.png'
import dogAdventuresImage from '../../public/images/projects/dog-adventures.png'
import tripSaveImage from '../../public/images/projects/trip-save.png'
import onRecallImage from '../../public/images/projects/on-recall.png'
import telemedicaImage from '../../public/images/projects/telemedica.png'
import confidentialProjectImage from '../../public/images/projects/confidential-project.jpg'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: 'Telemedica',
        appImage: telemedicaImage.src,
        techStack: 'NextJS | Material UI | Headless WordPress',
        description: 'This is a highly performant and accessible website that was built utilizing NextJS, Material UI & Headless WordPress. It caches data with Cloudflare and deployed with Vercel using CI/CD to ensure the latest code is deployed. The website empowers veterans to to leverage resources and services to gain quality medical evidence to win VA disability claims.',
        liveLink: 'https://telemedicallc.com',
        tags: ['All', 'Website'],
    },
    {
        id: 2,
        title: 'Meal Time App',
        appImage: mealTimeImage.src,
        techStack: 'React | Rails | PostgreSQL',
        description: "This app was built using React, Ruby on Rails, PostgreSQL JSON API database, and is hosted on Render. For the client, the test driven development framework was utilized with Jest in order to create the application. Users are able to create recipes, add items to shopping list and follow different users. You will be able to view detailed recipe information with the ability to edit your own recipes, in addition to deleting. User authentication is available using Rails' BCrypt gem in order to sign in, sign up and log out.",
        liveLink: 'https://meal-time-app.onrender.com/',
        gitURL: 'https://github.com/timtran007/meal-time-app',
        tags: ['All', 'Web App'],
    },
    {
        id: 3,
        title: 'Confidential Project',
        appImage: confidentialProjectImage.src,
        techStack: 'Electron | React | TailwindCSS | C++ | Python',
        description: 'This is a confidential project that was built using Electron, React, TailwindCSS, C++ & Python. The CI/CD process is taken care of with Azure. The application is a desktop application that processes and renders realtime data.',
        tags: ['All', 'Desktop App'],
    },
    {
        id: 4,
        title: 'Foodies App',
        appImage: foodiesImage.src,
        techStack: 'React | Rails | PostgreSQL',
        description: 'This app was built using React, Ruby on Rails, PostgreSQL, and is hosted on Render. At first the database was built with SQLite3; however, it was upgraded to PostgreSQL in order to be deployed through Render and GitHub. Users can sign up for an account and authenticate themselves through email and password to log in and log out of their account. Within the app, all users are able to see reviews of curated restaurants in Austin, TX. Users with accounts can add reviews as well as edit and delete their reviews.',
        likeLink: 'https://foodies-app-fwz1.onrender.com/',
        gitURL:'https://github.com/timtran007/restaurant-review-app',
        tags: ['All', 'Web App'],
    },
    {
        id: 5,
        title: 'Dog Walking HTX Website',
        appImage: dogWalkingImage.src,
        techStack: 'WordPress | Elementor | Hostinger',
        description: 'This is a client website that was built using WordPress Content Management System and hosted with Hostinger. The components were built using Elementor and the form is connected via WPForms. Google Analytics V4 was also set up with the website in order to track website data as well as people filling out the lead form.',
        liveLink: 'https://dogwalkinghtx.com/',
        tags: ['All', 'Website'],
    },
    {
        id: 6,
        title: 'Decisive Digital Marketing Website',
        appImage: decisiveDigitalMarketingImage.src,
        techStack: 'WordPress | Elementor | HostGator',
        description: 'This is a marketing website that was built using WordPress Content Management System and hosted with Hostgator. The components were built using Elementor and the form is connected via WPForms. Google Analytics was also set up with the website in order to track website data as well as people filling out the lead form.',
        liveLink: 'https://decisivedigitalmarketing.com/',
        tags: ['All', 'Website'],
    },
    {
        id: 7,
        title: 'Dog Adventures App',
        appImage: dogAdventuresImage.src,
        techStack: 'React | Sinatra | SQLite',
        description: 'This app was built using React with custom CSS, Sinatra, and a SQLite3 database. This is an application where users are able to keep track of the various adventures with the dog companions. Users are able to add dogs to their profile, create, read, update and delete adventures for their dogs associated with their account.',
        liveLink: 'https://www.loom.com/share/cc093a8eb5ba4dfa9039bfa7b9e1f1a0',
        gitURL:'https://github.com/timtran007/phase-3-project-dog-adventures-client',
        tags: ['All', 'Web App'],
    },
    {
        id: 8,
        title: 'Trip Save App',
        appImage: tripSaveImage.src,
        techStack: 'React | JavaScript | SQLite',
        description: "This app was primarily built using React JS and JavaScript. There is also a SQLite3 JSON Database file that hosts the 'back end' functionality for the application. Within this application, users are able to use the front end client to create trips, set budget, and add to their savings of the trips that they would like to take. Users have the option to quickly add preset amounts to their savings or add a custom amount.",
        liveLink: 'https://www.loom.com/share/a811939746e6420681095558a3c2104e',
        gitURL:'https://github.com/timtran007/phase-02-project-tripsave',
        tags: ['All', 'Web App'],
    },
    {
        id: 9,
        title: 'On Recall App',
        appImage: onRecallImage.src,
        techStack: 'HTML | CSS | JavaScript | FDA.gov API',
        description: "This app was primarily built using HTML, CSS and JavaScript. On Recall is pulling from the FDA.gov API for materials that are currently on recall. Within this application, users are able to sort by State, which items they want to see on recall. Users have the option to remove items from lists that they do not possess, which allows the process of elimination to take place in order to ensure they have no items on recall.",
        liveLink: 'https://www.loom.com/share/d9a2c368603d4b31baa70f0f0f6a7b4d',
        gitURL: 'https://github.com/timtran007/phase-1-project',
        tags: ['All', 'Web App'],
    }
  ];

export default function ProjectsSection() {
    const [tag, setTag] = useState('All')

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter(project => project.tags.includes(tag))
    return (
        <>
            <h2 className="text-center text-4xl font-bold mt-4 mb-6">My Projects</h2>
            <div className='flex flex-row justify-center items-center gap-2 py-6 px-4'>
                <ProjectTag handleTagChange={handleTagChange} tag="All" isSelected={tag === "All"}/>
                <ProjectTag handleTagChange={handleTagChange} tag="Website" isSelected={tag === "Website"}/>
                <ProjectTag handleTagChange={handleTagChange} tag="Web App" isSelected={tag === "Web App"}/>
                <ProjectTag handleTagChange={handleTagChange} tag="Desktop App" isSelected={tag === "Desktop App"}/>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-24'>
                {filteredProjects.map( project => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        imgURL={project.appImage}
                        techStack={project.techStack}
                        description={project.description}
                        externalLink={project.liveLink}
                        gitURL = {project.gitURL}
                    />
                ))}
            </div>
        </>
    )
}

import React from 'react'
import ProjectCard from './ProjectCard'
import mealTimeImage from '../../public/images/projects/meal-time.png'
import foodiesImage from '../../public/images/projects/foodies.png'
import dogWalkingImage from '../../public/images/projects/dog-walking-htx.png'
import decisiveDigitalMarketingImage from '../../public/images/projects/decisive-digital-marketing.png'
import dogAdventuresImage from '../../public/images/projects/dog-adventures.png'
import tripSaveImage from '../../public/images/projects/trip-save.png'
import onRecallImage from '../../public/images/projects/on-recall.png'

const projectsData = [
    {
      title: 'Meal Time App',
      appImage: mealTimeImage,
      projectUrl: '/projects/meal-time',
      techStack: 'React, Rails & PostgreSQL'
    },
    {
      title: 'Foodies App',
      appImage: foodiesImage,
      projectUrl: '/projects/foodies',
      techStack: 'React, Rails & PostgreSQL'
    },
    {
      title: 'Dog Walking HTX Website',
      appImage: dogWalkingImage,
      projectUrl: '/projects/dog-walking-htx',
      techStack: 'WordPress, Elementor & Hostinger'
    },
    {
      title: 'Decisive Digital Marketing Website',
      appImage: decisiveDigitalMarketingImage,
      projectUrl: '/projects/ddm',
      techStack: 'WordPress, Elementor & HostGator'
    },
    {
      title: 'Dog Adventures App',
      appImage: dogAdventuresImage,
      projectUrl: '/projects/dog-adventures',
      techStack: 'React, Sinatra & SQLite'
    },
    {
      title: 'Trip Save App',
      appImage: tripSaveImage,
      projectUrl: '/projects/trip-save',
      techStack: 'React'
    },
    {
      title: 'On Recall App',
      appImage: onRecallImage,
      projectUrl: '/projects/on-recall',
      techStack: 'HTML, CSS & JavaScript'
    }
  ];

export default function ProjectsSection() {
    return (
        <>
            <h2>My Projects</h2>
            <div></div>
        </>
    )
}

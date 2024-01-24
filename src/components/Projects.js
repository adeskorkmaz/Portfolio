import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const projectsData = [
    {
        id: 1,
        url: 'images/1.jpg',
        igUrl: 'https://www.instagram.com/p/CleB65oNY5T/'
    },
    {
        id: 2,
        url:'images/2.jpg',
        igUrl: 'https://www.instagram.com/p/CaQFUQ7tLwt/'
    },
    {
        id: 3,
        url:'images/3.jpg',
        igUrl: 'https://www.instagram.com/p/CleEq7NNp_b/'
    },
    {
        id: 4,
        url: 'images/4.jpg',
        igUrl: 'https://www.instagram.com/p/Co7c_8gNVL-/'
    },
    {
        id: 5,
        url: 'images/5.jpg',
        igUrl: 'https://www.instagram.com/p/CtEwlq0tlV6/'
    },
    {
        id: 6,
        url: 'images/6.jpg',
        igUrl: 'https://www.instagram.com/p/CsD5siaNPb4/'
    },
    {
        id: 7,
        url: 'images/7.jpg',
        igUrl: 'https://www.instagram.com/p/Cr_nQopgL2J/'
    },
    {
        id: 8,
        url: 'images/8.jpg',
        igUrl: 'https://www.instagram.com/p/CsD5er8t9iu/'
    }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="p-4">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projectsData.map((project) => (
          <div key={project.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body"> 
                <img src={project.url} />
                {/* <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p> */}
                <br/>
                <Button variant="primary" onClick={() =>window.open(project.igUrl, '_blank')}>
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

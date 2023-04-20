import React from 'react';

function Project({ imageUrl, title, gitHubUrl, deploymentUrl }) {
  return (
    <article>
      <a href={gitHubUrl} target="_blank" rel="noreferrer">
        <img src={imageUrl} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
        <p>
          <a href={gitHubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          |{' '}
          <a href={deploymentUrl} target="_blank" rel="noreferrer">
            Deployment
          </a>
        </p>
      </div>
    </article>
  );
}

export default Project;

import React from 'react';

function Project({ imageUrl, title, gitHubUrl, deploymentUrl }) {
  return (
    <article>
      <img src={imageUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>
          <a href={gitHubUrl} target="_blank">
            GitHub
          </a>{' '}
          | <a href={deploymentUrl} target="_blank"></a>Deployment
        </p>
      </div>
    </article>
  );
}

export default Project;

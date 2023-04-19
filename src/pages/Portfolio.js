import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="card-container">
        <Project
          imageUrl={'#'}
          title={'Bookends'}
          gitHubUrl={'https://github.com/kkarrwrites/bookends'}
          deploymentUrl={'https://red-leaf-8539.herokuapp.com'}
        />
        <Project
          imageUrl={'#'}
          title={'Déjà Brew'}
          gitHubUrl={'https://github.com/kkarrwrites/deja-brew'}
          deploymentUrl={'https://kkarrwrites.github.io/deja-brew'}
        />
        <Project
          imageUrl={'#'}
          title={'Tech Blog'}
          gitHubUrl={
            'https://github.com/kkarrwrites/boot-camp-module-14-tech-blog'
          }
          deploymentUrl={'https://summer-sea-1063.herokuapp.com/'}
        />
        <Project
          imageUrl={'#'}
          title={'Weather Dashboard'}
          gitHubUrl={
            'https://github.com/kkarrwrites/boot-camp-module-06-challenge-weather-dashboard'
          }
          deploymentUrl={
            'https://kkarrwrites.github.io/boot-camp-module-06-challenge-weather-dashboard'
          }
        />
        <Project
          imageUrl={'#'}
          title={'Portfolio'}
          gitHubUrl={
            'https://github.com/kkarrwrites/boot-camp-module-02-challenge'
          }
          deploymentUrl={
            'https://kkarrwrites.github.io/boot-camp-module-02-challenge/'
          }
        />
        <Project
          imageUrl={'#'}
          title={'Interactive Rating Component'}
          gitHubUrl={
            'https://github.com/kkarrwrites/frontend-mentor-interactive-rating-component'
          }
          deploymentUrl={
            'https://kkarrwrites.github.io/frontend-mentor-interactive-rating-component'
          }
        />
      </div>
    </section>
  );
}

export default Portfolio;

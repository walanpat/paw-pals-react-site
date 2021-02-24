import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const PawPals = () => {
  return (
    <div style={{ marginLeft: '10%' }}>
      <h1>Paw Pals App</h1>
      <h2>Project Concept</h2>
      <p>
        PawPals is a social media, but for dogs. PawPals helps dog owners find
        and connect with other dog owners in the area. By using a swiping style
        method akin to Tindero or Bumble, the user interface will provide an
        exciting experience to meet and set up connections between other dog
        owners in order to help find playdates/other dog lovers!{' '}
      </p>
      <p>
        This site will showcase the work of Team E in{' '}
        <a href='https://www.cs.unc.edu/~stotts/COMP523-s21/'>
          Comp 523 Software Engineering
        </a>{' '}
        course at UNC Chapel Hill.
      </p>
      <p>
        Team E's Project will be to create Paw Pals, a communication and meeting
        application for dog related activities.
      </p>
    </div>
  );
};

export default PawPals;

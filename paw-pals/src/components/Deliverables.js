import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Deliverables = () => {
  return (
    <div style={{ marginLeft: '10%', marginRight: '15%', marginTop: '2%' }}>
          <Link to='/pages/home'>
    <p className="iconcircle">Home</p>
    </Link>
      <li>
        As a dog owner, I want to see nearby dogs, so that I can match with
        them.
      </li>
      <li>
        As a dog owner, I want to match with other dogs, so that we can meet at
        a dog park.
      </li>
      <li>
        As a dog owner, I want to match with other dogs, so that we can chat
        with each other.
      </li>
      <li>
        As a dog owner, I want to match with other dogs, so that we can set up a
        playdate for our dogs.
      </li>
      <li>
        As a user, I want to see if I can adopt/rescue a dog, so that I can
        match with other dogs.
      </li>
      <li>
        As a user, I want to swipe, so that it feels more like Tinder/other
        dating apps.
      </li>
      <li>
        As a breeder, I want to find other dog owners willing to breed, so that
        I can breed my dog.
      </li>
      <li>
        As a breeder, I want to only see other dogs that want to breed, so that
        I don’t have to sift through nonbreeding dogs.
      </li>
      <li>
        As someone interested in adopting a dog, I want to see dogs available
        for adoption in the area, so that I can adopt one.
      </li>
      <li>
        As a dog owner, I want to see nearby dogs, so that I familiarize myself
        with dogs in the area.
      </li>
      <li>
        As a dog owner, I want to match with other dogs, so that I can provide
        my dog with social interaction.
      </li>
      <li>
        As a user, I want to be able to chat with other dog owners within the
        app, so that we can set up a playdate without exchanging phone numbers.
      </li>
      <li>
        As a user, I want to be able to filter the dog profiles that are
        presented to me by males only, females only, or both, so that I can more
        easily find the right dog for my own to play with.
      </li>
      <li>
        As a user, I want the app to suggest dog parks that are close to me and
        my match, so we can meet in the middle for a playdate location.
      </li>
      <li>
        As a user, I want to be able to set up an account with email and
        password login credentials, so I can log in and out without having to
        create a new profile every time I use the app.
      </li>
      <li>
        As a user, I want to be able to upload pictures of my dog to its
        profile, so that other dog owners can see what my dog looks like.
      </li>
      <li>
        As a user, I want to see pictures of other dogs, so that I know what
        they look like.
      </li>
      <li>
        As a dog owner, I want to see the breeds of other dogs displayed on
        their profile, so I know how they might act on a playdate.
      </li>
      <li>
        As a user, I want to be able to filter for certain breeds or sizes or
        ages of dogs, so I can easily find the right dog to play with my own.
      </li>
    </div>
  );
};
export default Deliverables;

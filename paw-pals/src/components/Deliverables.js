import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Deliverables = () => {
  return (
    <div style={{ marginLeft: '10%', marginRight: '15%', marginTop: '2%' }}>
      <Link to='/pages/home'>
        <p className='iconcircle'>Home</p>
      </Link>
      <h2>User Stories</h2>
      <br />
      <h3>Need to Have</h3>
      <li>
        As a dog owner, I want to see profiles of other dogs in my area, so that
        my dog can play with them.
      </li>
      <li>
        As a dog owner, I want to create a PawPals profile for my dog, so that
        other dog owners in the area can see it.
      </li>
      <li>
        As a user, I want to swipe right or press an approval-indicator button
        on profiles of which approve, so that I can match with them.
      </li>
      <li>
        As a user, I want to match with other users who have swiped right on me
        as well, so that I can chat with them.
      </li>
      <li>
        As a user, I want to chat with users with whom I have matched within the
        app, so that we can set up a playdate for our dogs without having to
        exchange phone numbers.
      </li>
      <li>
        As a dog owner, I want to set up playdates with other dogs, so that I
        can provide my dog with social interaction.
      </li>
      <li>
        As an interested adopter, I want to see dogs up for adoption in the
        area, so that I can match with them.
      </li>
      <li>
        As a breeder, I want to see dogs in the area that are available for
        breeding, so that I can match with them.
      </li>
      <li>
        As a user, I want the app to suggest local dog parks, so that I can
        easily find locations for playdates.
      </li>
      <li>
        As a user, I want to set up an account with email and password login
        credentials, so I can log in and out without having to create a new
        profile every time I use the app.
      </li>
      <li>
        As a user, I want to see pictures of other dogs on their profiles, so
        that I know what they look like.
      </li>
      <li>
        As a dog owner, I want to see the breeds of other dogs displayed on
        their profile, so that I know how they might act on a playdate.
      </li>
      <li>
        As an internet user, I want to be able to access the PawPals
        functionality through a web browser on either my desktop computer or
        mobile devices, so that I can use PawPals through a graphical interface.
      </li>
      <h3>Nice To Have</h3>
      <li>
        As a dog owner, I want to filter the dog profiles presented to me by
        males only, females only, or both males and females, so that I can
        easily find the right dog for my own to play with.
      </li>
      <li>
        As a dog owner, I want to filter for certain breeds or sizes of dogs, so
        I can easily find the right dog for my own to play with.
      </li>
      <li>
        As a puppy owner, I want to filter the dog profiles presented to me by
        puppies only, so that I can easily find the right age group for my dog
        to play with.
      </li>
      <li>
        As a senior dog owner, I want to filter the dog profiles presented to me
        by age group, so that I know the dogs presented to me will be gentle
        with my dog.
      </li>
      <li>
        As a breeder or dog owner interested in breeding my dog, I want to
        indicate in my profile that I am interested in breeding. I also want to
        see in the profiles presented to me whether the user is interested in
        breeding as well.
      </li>
      <li>
        As an iPhone user, I want to be able to download a PawPals mobile iOS
        application from the App Store, to easily and conveniently access the
        PawPals functionality in a familiar way.
      </li>
      <br />

      <h2>Requirements</h2>
      <br />

      <h3>Functional</h3>
      <h3>Definite</h3>
      <li>
        System must allow users to create an account with email and password
        login credentials.
      </li>
      <li>
        System must allow users to create a profile for their dog within their
        account, including (a) picture(s) of the dog, dog’s name, and dog’s
        breed.
      </li>
      <li>
        System must allow users to click on a button to indicate approval or
        disapproval of the profile currently being shown to them.
      </li>
      <li>
        If two users have indicated approval of each other, system must allow
        the users to direct message each other within the app.
      </li>
      <li>System must show users dog parks in the Chapel Hill area.</li>
      <h3>Perhaps</h3>
      <li>System may allow users to switch to an adoption mode.</li>
      <li>
        System may allow users to create a profile for dogs who are up for
        adoption to be viewed by interested adopters in the adoption mode.
      </li>
      <li>
        System may allow interested adopters to create an adopter profile within
        their account, including (a) picture(s) of them, their name, and a brief
        description.
      </li>
      <li>
        System may allow interested adopters using the adoption mode to click on
        a button to indicate approval or disapproval of the adoption profile
        currently being shown to them.
      </li>
      <li>
        System may allow interested adopters to direct message those listing
        their dogs for adoption within the app.
      </li>
      <li>
        System may allow users to filter profiles being shown to them by males
        only or females only, large, mid-size, or small, and/or puppies only.
      </li>
      <li>
        System may allow users to indicate on their profile whether they are
        open to breeding their dog with dogs of users with whom they match who
        are interested in breeding as well.
      </li>
      <h3>Improbable</h3>
      <li>
        System could interpret a user swiping rightward or leftward with their
        finger on a profile displayed on the screen as an indication of approval
        or disapproval, respectively.
      </li>
      <li>
        System could sense the location of a user and display that location on
        their profile.
      </li>
      <li>
        System could sense the location of two users who have matched and
        suggest dog parks in the vicinity of the two.
      </li>
      <li>
        System could sense the location of a user and the user whose profile is
        being displayed and display the distance, in miles, between the two
        users.
      </li>
      <br />

      <h3>Usability (help, documentation, tutorials</h3>
      <br />

      <h4>Definite</h4>

      <h4>Perhaps</h4>
      <h4>Improbable</h4>
      <br />

      <h3>Reliability</h3>
      <br />

      <h4>Definite</h4>
      <li>
        If system fails and/or crashes, it must function as normal again within
        24 hours.
      </li>
      <h4>Perhaps</h4>
      <h4>Improbable</h4>
      <br />

      <h3>Performance (availability, capacity, resources)</h3>
      <br />

      <h4>Definite</h4>
      <li>
        System must load user profiles in the Chapel Hill area, emitting
        profiles that user has selected to be filtered out, within two minutes.
      </li>
      <h4>Perhaps</h4>
      <h4>Improbable</h4>
      <br />

      <h3>
        Supportability (who maintains it, could this be nationalized or
        internationalized)
      </h3>
      <br />

      <h4>Definite</h4>
      <li>System must support use in the Chapel Hill area.</li>
      <li>
        System must be maintained by PawPals Engineering Team - William Alan
        Patterson, Marigrace Seaton, Martin Smolka, Casey Turgeon - at least
        until 6 PM ET on May 14, 2021.
      </li>
      <h4>Perhaps</h4>
      <li>System may support use in the greater Raleigh-Durham area.</li>
      <h4>Improbable</h4>
      <li>
        System could support use in any location by using GPS data from users.
      </li>
      <br/>

      <h3>Design (constraints, What Kind of App, What Kind of Databse)</h3>
      <br/>

      <h4>Definite</h4>
      <li>
        System must function as a web app on Google Chrome, Mozilla Firefox,
        Microsoft Edge, and Apple Safari.
      </li>
      <h4>Perhaps</h4>
      <li>System may function as an iOS mobile app.</li>

      <h4>Improbable</h4>
      <li>System could function as an Android mobile app.</li>
      <br/>

      <h3>Implementation (language, standards, methodology)</h3>
      <br/>

      <h4>Definite</h4>
      <li>
        System must express text in the English language using American
        spellings.
      </li>
      <li>
        System must follow Java conventions set forth here, Python conventions
        set forth here, JavaScript conventions set forth here, and Angular
        conventions set forth here.
      </li>
      <h4>Perhaps</h4>
      <h4>Improbable</h4>
      <li>
        System could allow users to select their preferred language from a set
        list of options and then convert the display text on the app to what is
        selected.
      </li>

      <h3>Interface</h3>
      <h4>Definite</h4>
      <li>
        System must store client account data using the Firebase interface.
      </li>
      <h4>Perhaps</h4>
      <li>
        System may use the Google Maps map interface to display a map of
        Carrboro and Chapel Hill’s dog parks.
      </li>

      <h4>Improbable</h4>
      <li>
        System could use the Google Maps map interface to display a map of a
        user and their matches’ areas’ local dog parks.
      </li>
      <br/>

      <h3>Physical (device requirements, screen requirements)</h3>
      <br/>

      <h4>Definite</h4>
      <h4>Perhaps</h4>
      <li>
        System may respond to touch and gesture input on devices with touch
        screens.
      </li>
      <h4>Improbable</h4>
    </div>
  );
};
export default Deliverables;

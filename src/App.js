import React, { Component } from 'react';
import Resume, {
  Basics,
  Work,
  Volunteer,
  Section,
} from 'react-resume';
import Github from "react-resume-github";
import theme from 'react-resume-theme-slick';

class App extends Component {
  render() {
    return (
      <Resume theme={theme()}>
        <Basics>
          <Basics.Name>Patricio López J.</Basics.Name>
          <Basics.Label>Software Engineer.</Basics.Label>
          <Basics.Location>Av. Portugal 442, Santiago</Basics.Location>
          <Basics.Email type="email">patricio@lopezjuri.com</Basics.Email>
          <Basics.Website type="website">lopezjuri.com</Basics.Website>
          <Basics.Phone type="phone">+56 9 90511003</Basics.Phone>
          <Basics.Summary>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Basics.Summary>
          <Basics.Profiles>
            <Basics.Profile network="facebook" username="mrpatiwi" />
            <Basics.Profile network="github" username="mrpatiwi" />
          </Basics.Profiles>
        </Basics>
        <Work>
          <Work.Title>Work Experience</Work.Title>
          <Work.Items>
            <Work.Item>
              <Work.Item.Company>Alma Máter UC</Work.Item.Company>
              <Work.Item.Position>Founder</Work.Item.Position>
              <Work.Item.Website href="https://lopezjuri.com">Website</Work.Item.Website>
              <Work.Item.Period start="01-01-2016" />
              <Work.Item.Summary>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Work.Item.Summary>
              <Work.Item.Highlights>
                <Work.Item.Highlight>Started</Work.Item.Highlight>
                <Work.Item.Highlight>Finished</Work.Item.Highlight>
              </Work.Item.Highlights>
            </Work.Item>
          </Work.Items>
        </Work>
        <Section>
          <Section.Title>Experience</Section.Title>
          <Github username="mrpatiwi">
            <Github.Title />
            <Github.Projects />
          </Github>
        </Section>
        <Volunteer>
          <Volunteer.Title>Volunteer</Volunteer.Title>
          <Volunteer.Items>
            <Volunteer.Item>
              <Volunteer.Item.Company>Alma Máter UC</Volunteer.Item.Company>
              <Volunteer.Item.Position>Founder</Volunteer.Item.Position>
              <Volunteer.Item.Website href="https://lopezjuri.com">Website</Volunteer.Item.Website>
              <Volunteer.Item.Period start="01-01-2016" />
              <Volunteer.Item.Summary>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Volunteer.Item.Summary>
              <Volunteer.Item.Highlights>
                <Volunteer.Item.Highlight>Started</Volunteer.Item.Highlight>
                <Volunteer.Item.Highlight>Finished</Volunteer.Item.Highlight>
              </Volunteer.Item.Highlights>
            </Volunteer.Item>
          </Volunteer.Items>
        </Volunteer>
      </Resume>
    );
  }
}

export default App;

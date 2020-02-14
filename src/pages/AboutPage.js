import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

const AboutPage = props => {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          My name is Simon, I'm a web devolper with experience in React, Vue,
          Express JS, Node JS, ASP.NET, MySQL, MongoDB and Wordpress.
        </p>
        <p>
          I have a passion for programming, I explored Java and C# but I fell
          for backend web development.
        </p>
        <p>
          I enjoy learning new ways to develop webapplications, so I try to gain
          more experience. Right now I am learning more about Angular and
          Python-based development.
        </p>
        <p>
          My latest project was for a company named Axio, I created the website
          with Wordpress following their design. You can check them out{" "}
          <a href="https://Axio.com" target="_blank" rel="noopener noreferrer">
            here
          </a>
        </p>
        <p>
          My other projects are school projects hosted on my personal server.
        </p>
      </Content>
    </div>
  );
};

export default AboutPage;

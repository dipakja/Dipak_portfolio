/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/projects.jpeg";
import image from "../images/projects.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Programming contest Website",
    description:
      "This is web-portal where you can find the latest contest running on various online platforms.",
    url: "https://programming-contest-dipak.netlify.app/#home",
  },
  {
    title: "DBank",
    description:
      "DBank is a decentralized application (dApp) that provides users with the ability to interact with a decentralized finance (DeFi) smart contract. This dApp allows users to deposit, withdraw, and view their balance in a secure and trustless manner. ",
    url: "https://github.com/dipakja/Dbank",
  },
  {
    title: "Todo App",
    description:
      "This is todo react web app. ",
    url: "https://github.com/dipakja/TodoApp",
  },
  {
    title: "DSA-JAVA ",
    description:
      "This  is an github repo where i upload my DSA question or learning",
    url: "https://github.com/dipakja/DSA-JAVA",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

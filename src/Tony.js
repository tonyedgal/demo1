import React from "react";

const dev = [
  {
    firstName: "Tony",
    lastName: "Edgal",
    alterEgo: "SpaceMan",
    techStacks: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
    interests: ["UI Design", "Material Design", "Figma"],
  },
];

const Tony = () => {
  return (
    <>
      {dev.map((info) => (
        <div>
          <h1>{`First Name: ${info.firstName}`}</h1>
          <h1>{`Last Name: ${info.lastName}`}</h1>
          <h2>{`Alter Ego: ${info.alterEgo}`}</h2>
          <h3>Technologies:</h3>
          {info.techStacks.map((tech) => (
            <h5>{tech}</h5>
          ))}
          <h3>Interested in Learning:</h3>
          <ul>
            {info.interests.map((interest) => (
              <li>{interest}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Tony;

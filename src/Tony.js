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
  },
];

const Tony = () => {
  return (
    <>
      {dev.map((info) => (
        <div key={info.alterEgo}>
          <h1>{`First Name: ${info.firstName}`}</h1>
          <h1>{`Last Name: ${info.lastName}`}</h1>
          <h2>{`Alter Ego: ${info.alterEgo}`}</h2>
          <ul>
            {info.techStacks.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Tony;

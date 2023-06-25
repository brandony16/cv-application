import baseImg from "../../assets/previewBaseImg.jpg";

const filledState = {
  info: [
    {
      name: "firstName",
      value: "John",
    },
    {
      name: "lastName",
      value: "Doe",
    },
    {
      name: "address",
      value: "99999 RealSt St.",
    },
    {
      name: "email",
      value: "LoremIpsum@dolor.com",
    },
    {
      name: "phone",
      value: "111-222-3333",
    },
    {
      name: "about",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "title",
      value: "Web Developer",
    },
    {
      name: "pic",
      selected: baseImg,
    },
  ],

  skills: [
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "Javascript",
    },
    {
      skill: "React",
    },
    {
      skill: "Git",
    },
    {
      skill: "Bash",
    },
    {
      skill: "Webpack",
    },
    {
      skill: "Jest",
    },
    {
      skill: "VSCode",
    },
  ],

  experience: [
    {
      from: "2018",
      to: "2020",
      position: "Junior Web Developer",
      company: "Microsoft",
      city: "D.C.",
    },
    {
      from: "2020",
      to: "Present",
      position: "Web Developer",
      company: "Google",
      city: "D.C.",
    },
  ],

  education: [
    {
      from: "2014",
      to: "2018",
      university: "Stanford Univeristy",
      degreeLvl: "Masters",
      degreeFld: "Computer and Data Sciences",
    },
  ],
};

export default filledState;
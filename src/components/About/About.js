import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  
 
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
// import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
// import resume from "../../assets/resume.pdf";
import fullstack from "../../assets/fullstack.gif";
const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={fullstack} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
         My name is Anusriraman I am a Full Stack Developer 
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create websites from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, REACT JS, MaterialUI,
            Bootstrap, MongoDB, mySQL ,Nodejs, GitHub and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I am eager to learn something new every day. And I am
            looking forward to talk with you!
          </StyledParagraph>
        
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;

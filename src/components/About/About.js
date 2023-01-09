import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  
 
  StyledAbout,
} from "../styles/About.styled";

import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";

import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
  Quote,
} from "../styles/Home.styled";
import { useNavigate } from "react-router-dom";
import projectIcon from "../../assets/icons/project-icon.svg";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
// import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
// import resume from "../../assets/resume.pdf";
import fullstack from "../../assets/fullstack.gif";
import { Link } from "react-router-dom";
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
{/*        
          <StyledButtonsContainer>
         {/* <Link onClick="https://drive.google.com/file/d/1NL-n_6KrSdtolgo7DstuBn9V4kkp2oxf/view?usp=drivesdk"  
         target="_blank">  */}
         {/* <StyledButton
           
            icon={projectIcon}
            to="https://drive.google.com/file/d/1NL-n_6KrSdtolgo7DstuBn9V4kkp2oxf/view?usp=drivesdk"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
            target="_blank"
         
          >
            <span> <ContactLink
              href="https://drive.google.com/file/d/1NL-n_6KrSdtolgo7DstuBn9V4kkp2oxf/view?usp=drivesdk"
              target="_blank"
              rel=""
            >
              Resume
            </ContactLink></span>
          </StyledButton>
          // {/* </Link> */}
          {/* </StyledButtonsContainer>  */}
          <button style={{width:"90px",height:"40px", backgroundColor:"#fe5a1d", borderRadius:"5px"}}>
          <ContactLink
              href="https://drive.google.com/file/d/1-7cLdQxJkZx5TnIwUyTNynKrMm2RERp3/view?usp=drivesdk"
              target="_blank"
              rel=""
              color="white"
              style={{color:"white"}}
            >
              Resume
            </ContactLink></button>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;

import React from "react";
import {
  PlaygroundImage,
  PlaygroundProjectDetails,
  PlaygroundProjectImageContainer,
  PlayGroundProjectLive,
  PlaygroundProjectName,
  PlaygroundProject,
  LinkWrapper,
  LiveIcon,
  PlaygroundProjectWrapper,
} from "../styles/Playground.styled";

// const PlaygroundProjectComponent = ({
//   img,
//   projectName,
//   liveLink,
//   hasLink,
// }) => {
  function PlaygroundProjectComponent(){

  
  return (
    // <PlaygroundProjectWrapper hasLink={hasLink}>
    //   <PlaygroundProject hasLink={hasLink}>
    //     <PlaygroundProjectImageContainer
    //       href={liveLink}
    //       hasLink={hasLink}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <PlaygroundImage src={img} />
    //     </PlaygroundProjectImageContainer>
    //     <PlaygroundProjectDetails>
    //       <PlaygroundProjectName>{projectName}</PlaygroundProjectName>
    //       <LinkWrapper hasLink={hasLink}>
    //         <PlayGroundProjectLive
    //           href={liveLink}
    //           hasLink={hasLink}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           View Live <LiveIcon />
    //         </PlayGroundProjectLive>
    //       </LinkWrapper>
    //     </PlaygroundProjectDetails>
    //   </PlaygroundProject>
    // </PlaygroundProjectWrapper>

<div className="card"style= {{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  );

}
export default PlaygroundProjectComponent;

import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;




// // StyledHero.js
// import styled from "styled-components";
// import defaultImg from "../images/room-1.jpeg";
// // Optional: you can define a custom image here if you want
// import customImg from "../images/custom-room.jpeg";

// const backgroundImage = customImg || defaultImg; // fallback to default

// const StyledHero = styled.header`
//   min-height: 60vh;
//   background: url(${backgroundImage});
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export default StyledHero;
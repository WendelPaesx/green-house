import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const ContentBox = styled(Box)`
  width:1090px;
  height: 440px;
  position: absolute;
  top: 110%;
  left: 30%;
  z-index: 2;
  background-color: #ffffff;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 1px, black; 
  display: flex;
  align-items:center
  margin: 0;
  @media (max-width: 700px){
    width:90%
    left:5%
    top:50%
    transform: translateY(-50%)
    
  };

`;

const TextContainer = styled.div`
  margin-left: 1em;
  font-size: 2.5em;
  
`;
export default function Tutorial() {
  return (
    <ContentBox>
      <img src="img/Mask-Group.png"></img>
      <TextContainer>
      <Typography variant="body1" component="p" sx={{ color: 'black', fontSize: '1em', lineHeight: '1.8' ,margin:'20px, 20px, 20px, 20px' }}>
          Como conseguir
          </Typography>
          <Typography variant="h2" component="h2" sx={{ color: 'black', fontSize: '2em', lineHeight: '1.8' ,margin:'20px, 20px, 20px, 20px' }}>
          minha planta
          </Typography>
        
      </TextContainer>
    </ContentBox>
  );
}

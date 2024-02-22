import React from "react";
import styled from "styled-components";
import { Box, Typography, TextField, Button } from "@mui/material";
import AWS from "aws-sdk";

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const ContentBox = styled(Box)`
  width:35%;
  height: 60%;
  position: absolute;
  top: 30%;   
  left: 10%;
  z-index: 2;
  background-color: rgba(245, 245, 245, 0.5);
  padding: 1em;
  border-radius: 15px;
  @media (max-width: 700px){
    width:90%
    left:5%
    top:50%
    transform: translateY(-50%)
    
  };

`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  height: 80%;
  top: 0;
  right: 0;
`;

const LogoImage = styled.img`
  position: absolute;
  z-index: 1;
  right: 25%;
  top:10%;
  @media (max-width: 700px){
    width:80%;
    right:10%
    top:20%

  }
`;

export default function AssinarNewsLetter() {
  const handleSubmit = async (event) => {
     event.preventDefault()   
    
     const email = event.target.email;
     


const ses = new AWS.SES();

    //config do aws ses
    AWS.config.update({
     .env
    });
    
    // Parâmetros do e-mail
    const params = {
      Source: "wendel_wop2@hotmail.com", // Endereço de e-mail do remetente
      Destination: {
        ToAddresses: [email], // Endereço de e-mail do destinatário
      },
      Message: {
        Subject: {
          Data: "Confirmação de Cadastro", // Assunto do e-mail
        },
        Body: {
          Text: {
            Data: "Olá, você se cadastrou em nossa newsletter. Obrigado!", // Corpo do e-mail
          },
        },
      },
    };
   
      try {
        // Enviar e-mail usando SES
        const result = await ses.sendEmail(params).promise();
        console.log("E-mail enviado com sucesso!", result);
      } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
      }
  };
    

    return (
      <StyledBox>
        <ContentBox>
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontFamily: "Noto Serif, Roboto",
              color: "black",
              fontSize: "1.9em",
              lineHeight: "0",
            }}
          >
            Sua casa com as
            <Typography
              variant="h1"
              component="h1"
              sx={{ color: "black", fontSize: "10vh", lineHeight: "1.3" }}
            >
              Melhores plantas
            </Typography>
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{ color: "black", fontSize: "1.5em", lineHeight: "1" }}
          >
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-la um lugar mais feliz no seu dia a dia.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: "black",
              fontSize: "1.5em",
              lineHeight: "1",
              marginTop: "1em",
            }}
          >
            Inscreva-se em nossa newsletter para receber novidades sobre a
            marca.
          </Typography>

          <form >
            <TextField
              id="email"
              name="email"
              type="email"
              label="Insira seu e-mail"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "1em", marginTop: "1em" }}
            />
            <Button onClick={handleSubmit}
              type="submit"
              variant="contained"
              color="warning"
              sx={{ fontSize: "1em", height: "3em", cursor: "pointer" }}
            >
              Assinar Newsletter
            </Button>
          </form>
        </ContentBox>
        <LogoImage src="img/imagem-hero1.png" alt="Planta" />
        <BackgroundImage src="img/Vector.png" alt="vector" />
      </StyledBox>
    );
  };


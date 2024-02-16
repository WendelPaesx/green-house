import { Box } from "@mui/material";


export default function AssinarNewsLetter() {
  return (
    <Box display="flex" alignItems="center" position="relative">
      <Box
        width="90%"
        height="60%"
        position="absolute"
        top="25%"
        left="10%"
        zIndex={2}
      >
        <div style={{fontFamily: 'Noto serf, roboto'}}>
          <p style={{ fontSize: "1.7em", lineHeight: "0", color: "#888888" }}>
            Sua casa com as{" "}
            <h1 style={{ fontSize: "4em", lineHeight: "1", color: "black" }}>
              {" "}
              Melhores plantas
            </h1>
          </p>
          <p style={{ fontSize: "1.5em", lineHeight: "1", color: "#888888" }}>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torna-lo uma pessoa mais feliz no seu dia a dia.
          </p>
          <p style={{ fontSize: "1.5em", lineHeight: "1", color: "#888888" }}>
            Entre com seu e-mail e assine a nossa newsletter para saber das
            novidades da marca
          </p>

          <form >
            
            <input
              type="email"
              id="email"
              placeholder="insira seu e-mail"
              style={{
                height:'2em',
                fontSize: "2em",
                padding: "8px",
                margin: " 0",
                boxShadow: '1px 5px 6px 1px rgba(0, 0, 0, 0.1)',
                border: "none",
                
              }}
            />
            <input
              type="submit"
              value="Assinar Newsletter"
              style={{
                fontSize: "1em",
                height: '5em',
                padding: "8px ",
                margin: " 0",
                backgroundColor: "#ffcb47",
                color: "#fff",
                border: "none",
                boxShadow: '1px 4px 6px 1px rgba(0, 0, 0, 0.1)',
                cursor: "pointer",
              }}
            />
          </form>
        </div>
      </Box>
      <img
        src="img/imagem-hero1.png"
        alt="Planta"
        style={{
          marginLeft: "auto",
          position: "relative",
          zIndex: 1,
          right: "30%",
          
          
        
        }}
      />
      <img
        src="img/Vector.png"
        alt="vector"
        style={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          height: "80%",
          right: 0,
          margin: 0,
          padding: 0,
        }}
      />
    </Box>
  );
}

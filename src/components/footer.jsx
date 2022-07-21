import { Box, Container } from "@mui/material";

const footer = () => {
  return (
    <Box
      sx={{
        color: "#141414",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        marginTop: "20px",
        padding: "10px",
        bottom: "0",
        textAlign: "center",
        position: "fixed",
        left: 0,
        width: "100%",
      }}
    >
      <Container sx={{ color: "#141414" }}>
        made with ♡ by <b>pair-04</b>
      </Container>
    </Box>
  );
};

export default footer;

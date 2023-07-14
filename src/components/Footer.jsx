import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // position: "absolute",
        // bottom: 0,
        bgcolor: "#A4D5A7",
        width: "100%",
        height: "15dvh",
        textAlign: "center",
        padding: "2.5rem",
        boxShadow: "4px 4px 6px 4px",
      }}
    >
      Developed by Adem Caliskan & Copyright ©2023
    </Box>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { useSelector } from "react-redux";
import noImage from "../assets/no-image.png";

export default function Profile() {
  const { currentUser, image, email } = useSelector((state) => state.auth);

  return (
    <div>
      <Paper
        elevation={10}
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: 40,
          width: 340,
        }}
      >
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="350"
            image={image || noImage}
            alt={currentUser}
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              {currentUser}
            </Typography>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              {email}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}

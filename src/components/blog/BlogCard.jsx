import React from "react";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { flex1, flex } from "../../styles/GlobalStyle";
import { Box, Paper } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useBlogCalls from "../../hooks/useBlogCalls";
import moment from "moment";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { postBlogsLike } = useBlogCalls();
  const convertRelativeTime = (date) => {
    return date.slice(0, 10) + " " + date.slice(11, 19);
  };
  const convertedRelativeTime = (date) => {
    return moment(date).fromNow();
  };
  return (
    <Paper
      elevation={20}
      sx={{
        maxWidth: 340,
        p: 2,
        width: "350px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        image={blog.image}
        component="img"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "green",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {blog.title}
        </Typography>

        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {blog.category_name}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {blog.content.substring(0, 60) + "..."}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {/* {blog.publish_date} */}
          {convertRelativeTime(blog.publish_date)}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {convertedRelativeTime(blog.publish_date)}
        </Typography>
      </CardContent>
      <CardActions sx={flex}>
        <AccountBoxIcon sx={{ borderRadius: "1rem" }} />
        <Typography gutterBottom variant="h6" component="div">
          {blog.author}
        </Typography>
      </CardActions>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={flex1}>
          <Box sx={flex1}>
            <FavoriteBorderIcon
              sx={{ "&:hover": { color: "red" } }}
              onClick={() => postBlogsLike("likes", blog.id)}
            />
            <Typography variant="h6">{blog.likes}</Typography>
          </Box>
          <Box sx={flex1}>
            <ChatBubbleOutlineIcon sx={{ "&:hover": { color: "blue" } }} />
            <Typography variant="h6">{blog.comment_count}</Typography>
          </Box>
          <Box sx={flex1}>
            <VisibilityOutlinedIcon sx={{ "&:hover": { color: "purple" } }} />
            <Typography variant="h6">{blog.post_views}</Typography>
          </Box>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() => navigate(`detail/${blog.id}`, { state: blog })}
            size="small"
            sx={{
              backgroundColor: "#A5D6A7",
              color: "black",
              fontWeight: 600,
              "&:hover": { backgroundColor: "green", color: "white" },
              padding: "8px",
            }}
          >
            Read More
          </Button>
        </Box>
      </CardActions>
    </Paper>
  );
};

export default BlogCard;

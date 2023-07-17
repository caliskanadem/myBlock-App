import { Box, Grid, ImageListItem, Modal } from "@mui/material";
import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";

import loadingGif from "../assets/loading.gif";
import clr from "../assets/clr.png";
import { flex, modalStyle } from "../styles/GlobalStyle";
import BlogCard from "../components/blog/BlogCard";

const Home = () => {
  const { getBlogsData } = useBlogCalls();
  const { blogs, loading } = useSelector((state) => state.blog);
  console.log(blogs);
  useEffect(() => {
    getBlogsData("blogs");
  }, []);

  return (
    <Box sx={{ minHeight: "120dvh", padding: "3rem" }}>
      {loading ? (
        <ImageListItem
          href="/"
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: 40,
            width: 400,
          }}
          // sx={{ width: 50, height: 20 }}
        >
          <img src={loadingGif} />
        </ImageListItem>
      ) : (
        <Grid container sx={flex} mt={10} spacing={5}>
          {blogs?.map((blog, index) => (
            <Grid item key={index}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Home;

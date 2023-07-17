import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    categories: [],
    details: [],
    myBlogs: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    getSuccessDetail: (state, { payload: { data } }) => {
      state.loading = false;
      state.details = data;
    },
    getSuccessMyBlog: (state, { payload: { data } }) => {
      state.loading = false;
      state.details = data;
    },
    fetchFail: () => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  getSuccessDetail,
  getSuccessMyBlog,
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;

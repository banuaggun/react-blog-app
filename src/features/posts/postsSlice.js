import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1", 
    title: "React Blog App Project",
    content: "I am preparing this project to take my react js skills to the next level and learn redux."
  },
  {
    id: "2",
    title: "Design Principles",
    content: "Design principles and the latest developments in design"
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer
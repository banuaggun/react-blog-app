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
  reducers: {
    postAdded(state, action){
      state.push(action.payload)
    }
  }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer
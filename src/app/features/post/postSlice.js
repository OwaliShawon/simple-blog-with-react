
import { createSlice } from '@reduxjs/toolkit';
import fetchPosts from '../../thunkMiddleware/fetchPostThunk';


// initial state
const initialState = {
    loading: false,
    posts: [],
    error: "",
};


const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = "Pending";
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "fulfilled";
            state.posts = action.payload;
        });

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.posts = [];
        });
    },
});


export default postSlice.reducer;
export { fetchPosts };


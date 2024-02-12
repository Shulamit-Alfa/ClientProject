import { createSlice } from '@reduxjs/toolkit';
import UsePost from '../Hooks/Post';
import UseDelete from '../Hooks/Delete';
import UsePut from '../Hooks/Put';
import UseGet from '../Hooks/Get';

const initialState = {
    posts: []

}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPost: (state) => {
            const [httpGet, data] = UseGet();
            httpGet('https://localhost:7112/api/Post');
            state.posts = data;
        },

        addPost: (state, action) => {
            const httpPost = UsePost();
            const newPost = { ...action.payload };
            httpPost('https://localhost:7112/api/Post', newPost);

            state.posts.push(action.payload);
        },
        deletePost: (state, action) => {
            const httpDelete = UseDelete();
            httpDelete('https://localhost:7112/api/Post' + action.payload);
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        editPost: (state, action) => {
            const httpPut = UsePut();
            httpPut('https://localhost:7112/api/Post/' + action.payload.id, action.payload);
            state.posts = state?.posts?.map(post =>
                post.id === action?.payload?.id ? action.payload : post
            );

        },
        addLike: (state, action) => {
            state.posts.filter((item) => {
                if (item.id == action.payload) {
                    item.like = !item.like;
                    if (item.like == true) {
                        item.amountLike++;
                        console.log(item.amountLike);
                    }
                    else {
                        item.amountLike--;
                        console.log(item.amountLike);
                    }
                }
            })
        }
    }

})
export const { getPost, addPost, deletePost, editPost, addLike } = postSlice.actions;
export default postSlice.reducer
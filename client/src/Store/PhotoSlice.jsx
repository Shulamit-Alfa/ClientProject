import { createSlice } from '@reduxjs/toolkit';
import UseGet from '../Hooks/Get';
import UsePost from '../Hooks/Post';
import UsePut from '../Hooks/Put';
import UseDelete from '../Hooks/Delete';
import { act } from 'react-dom/test-utils';

const initialState = {
  photo: []
}

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    getPhoto: (state) => {
      const [httpGet, data] = UseGet();
      httpGet('https://localhost:7112/api/Photo');
      state.photo = data;
    },
    addPhoto: (state, action) => {
      const httpPost = UsePost();
      // const newPhoto = { ...action.payload }
      const newPhoto={...action.payload}
      httpPost('https://localhost:7112/api/Photo', newPhoto);
      // state.photo.push(action.payload)
    },
    deletePhoto: (state, action) => {
      const httpDelete = UseDelete();
      httpDelete('https://localhost:7112/api/Photo/' + action.payload);
    }

  }
})
export const { getPhoto, addPhoto, deletePhoto } = photoSlice.actions;
export default photoSlice.reducer;
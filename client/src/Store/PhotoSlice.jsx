import { createSlice } from '@reduxjs/toolkit';
import UseDelete from '../Hooks/Delete';
import UseGet from '../Hooks/Get';
import UsePost from '../Hooks/Post';

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
      const newPhoto = { ...action.payload }
      httpPost('https://localhost:7112/api/Photo', newPhoto);
    },
    deletePhoto: (state, action) => {
      const httpDelete = UseDelete();
      httpDelete('https://localhost:7112/api/Photo/' + action.payload);
    }

  }
})
export const { getPhoto, addPhoto, deletePhoto } = photoSlice.actions;
export default photoSlice.reducer;
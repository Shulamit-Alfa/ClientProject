import { createSlice } from '@reduxjs/toolkit';
import UseGet from '../Hooks/Get';
import UsePost from '../Hooks/Post';
import { Email } from '@mui/icons-material';
import { act } from 'react-dom/test-utils';
import UsePut from '../Hooks/Put';
import UseDelete from '../Hooks/Delete';
const initialState = {
  users: []
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state) => {
      const [httpGet, res] = UseGet();
      httpGet('https://localhost:7112/api/Users');
      state.users = res;
    },
    addUser: (state, action) => {
      const httpPost = UsePost();
      const newUser = { ...action.payload };
      httpPost('https://localhost:7112/api/Users', newUser);
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const httpPut = UsePut();
      httpPut('https://localhost:7112/api/Users/' + action.payload.id, action.payload);
    },
    deleteUser: (state, action) => {
      const httpDelete = UseDelete();
      httpDelete = ('https://localhost:7112/api/Users' + action.payload);
    }
  }
})
export const { getUser, addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
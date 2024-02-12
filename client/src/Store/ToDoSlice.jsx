import { createSlice } from '@reduxjs/toolkit';
import UseDelete from '../Hooks/Delete';
import UseGet from '../Hooks/Get';
import UsePost from '../Hooks/Post';
import UsePut from '../Hooks/Put';

const initialState = {
    tasks: []
}

const toDoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {

        getTask: (state) => {
            const [httpGet, data] = UseGet();
            httpGet('https://localhost:7112/api/ToDo');
            state.tasks = data;
        },

        addTask: (state, action) => {
            const httpPost = UsePost();
            const now = new Date();
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const formattedTime = now.toJSON(options);
            // const newTask = { title: action.payload.title, description: action.payload.description, isComplete: false, createDate: formattedTime };
            const newTask = { ...action.payload };
            httpPost('https://localhost:7112/api/ToDo', newTask);

            state.tasks.push(action.payload);
        },

        editTask: (state, action) => {
            const httpPut = UsePut();
            httpPut('https://localhost:7112/api/ToDo/' + action.payload.id, action.payload);

            state.tasks = state?.tasks?.map(task =>
                task.id === action?.payload?.id ? action.payload : task
            );
        },

        deleteTask: (state, action) => {
            const httpDelete = UseDelete();
            httpDelete('https://localhost:7112/api/ToDo/' + action.payload)
            
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },

    }
})

export const { getTask, addTask, editTask, deleteTask } = toDoSlice.actions;
export default toDoSlice.reducer

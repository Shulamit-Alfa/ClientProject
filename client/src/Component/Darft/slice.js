// Slice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            state.tasks?.push(action.payload);
            
        },
        editTask: (state, action) => {
            state.tasks = state.tasks?.map(task =>
                task.id === action.payload?.id ? action.payload : task
            );
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks?.filter(task => task.id !== action.payload);
        },
    },
});

export const { setTasks, addTask, editTask, deleteTask } = toDoSlice.actions;
export default toDoSlice.reducer;

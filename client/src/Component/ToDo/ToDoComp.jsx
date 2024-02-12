import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, getTask } from "../../Store/ToDoSlice";
import ToDo from "./ToDo";


export function FormDialog() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState({ title: '', description: '' });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch(addTask(task));
        handleClose();
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ "& .MuiButton-startIcon": { marginRight: 1 } }}>
                Add Task
            </Button>
            <Dialog open={open} onClose={handleClose} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <DialogTitle>Add Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Your Task"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description Task"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};


const ToDoComp = () => {
    const dispatch = useDispatch();
    dispatch(getTask());
    const myTasks = useSelector((state) => state.toDoSlice?.tasks)

    if (!myTasks || !myTasks.length) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <div>
            <h1>Tasks</h1>
            <FormDialog />
            <div>
                {myTasks.map((t) => (
                    <ToDo key={t.id} task={t} style={{ display: 'flex', flaxWrap: 'wrap', justifyContent: 'space-between' }} />
                ))}
            </div>
        </div>
    )
};

export default ToDoComp;







import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Store/ToDoSlice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FormDialog = () => {
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState({ title: '', description: '' });
    const dispatch = useDispatch();

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
        <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ '& .MuiButton-startIcon': { marginRight: 1 } }}>
                Add Task
            </Button>
            <Dialog open={open} onClose={handleClose}>
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
                        onChange={e => setTask({ ...task, title: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description Task"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={task.description}
                        onChange={e => setTask({ ...task, description: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormDialog;



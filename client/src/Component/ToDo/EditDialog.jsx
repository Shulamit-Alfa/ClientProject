import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { editTask } from '../../Store/ToDoSlice';

export const EditDialog = (props) => {
    const { setEdit, task } = props;
    const [editedTask, setEditedTask] = useState(task);
    const dispatch = useDispatch();

    const handleClose = () => {
        setEdit(false);
    };

    const handleSubmit = () => {
        dispatch(editTask(editedTask));
        handleClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Change Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    name="title"
                    label="Your Task"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={editedTask.title}
                    onChange={handleInputChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    name="description"
                    label="Description Task"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={editedTask.description}
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
};
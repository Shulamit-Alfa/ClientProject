import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from "../../Store/PostSlice";
import Button from '@mui/material/Button';
import { createSvgIcon } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import MinHeightTextarea from './PostComp';
import Textarea from './PostComp';

import { TextareaAutosize } from '@mui/material';

export const EditDialogPost = (props) => {
    // const [open, setOpen] = useState(false);
    // const [context, setContext] = useState('');
    const { setEdit, post } = props;
    // const [open, setOpen] = useState(false);
    const [editedPost, setEditedPost] = useState(post);
    const dispatch = useDispatch();

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    const handleClose = () => {
        setEdit(false);
    };


    const handleSubmit = () => {
        dispatch(editPost(editedPost));
       handleClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPost({ ...editedPost, [name]: value });
    };

    return (


        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Edit Post</DialogTitle>
            <DialogContent>
                <TextareaAutosize
                    aria-label="מאמר"
                    value={editedPost.content}
                    minRows={9}
                    cols={40}
                    placeholder="Your Post"
                    onChange={handleInputChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>

    );
};
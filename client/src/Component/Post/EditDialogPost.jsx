import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { editPost } from "../../Store/PostSlice";

import { TextareaAutosize } from '@mui/material';

export const EditDialogPost = (props) => {

    const { setEdit, post } = props;
    const [editedPost, setEditedPost] = useState(post);
    const dispatch = useDispatch();

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
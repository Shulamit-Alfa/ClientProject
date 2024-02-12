import React, { useState } from "react";
import Users from "./Users";
import {addUser, getUser} from "../../Store/UserSlice"
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export function FormDialog() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({ id: '', name: '', email: '', address: '' , phone: ''});

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch(addUser(user));
        handleClose();
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ "& .MuiButton-startIcon": { marginRight: 1 } }}>
                Add User
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="User Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Email"
                        label="Email"
                        type="Mail"
                        fullWidth
                        placeholder='youremail@gmail.com'
                        variant="standard"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={user.phone}
                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={user.address}
                        onChange={(e) => setUser({ ...user, address: e.target.value })}
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
const UsersComp = () => {

    const myUsers = useSelector((state) => state.userSlice.rows);
    // const editedTask = useSelector((state) => state.toDoSlice.editedTask);
    const dispatch = useDispatch();
    dispatch(getUser());
   

    // const handleEditTask=(editedTask)=>{
    //     dispatch(setEditTask(editedTask));
    // }
    return (
        <div>
            <h1>Users</h1>
            <FormDialog />
            <Users />
            {/* <div style={{ display: 'flex', flaxWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}> */}
                {/* {myUsers.map((u) => {
                    
                    return(
                        <>
                        <Users key={u.id} user={u} />
                        </>
                    )
                    
                })} */}
            {/* </div> */}
        </div>
    )
};
export default UsersComp;
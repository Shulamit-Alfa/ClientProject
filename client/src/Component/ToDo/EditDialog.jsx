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

// ////
// import React, { useEffect, useState } from "react"
// import { useSelector, useDispatch } from 'react-redux';
// import ToDo from "./ToDo";
// import { addTask, editTask } from "../../Store/ToDoSlice";
// import Button from '@mui/material/Button';
// import { createSvgIcon } from '@mui/material';
// import AddTaskIcon from '@mui/icons-material/AddTask';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export function EditDialog(props) {

//     const [open, setOpen] = useState(false);
//     const [task, setTask] = useState(props.task);

//     const dispatch = useDispatch();

//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         props.setEdit(false);
//     };

//     const handleSubmit = (task) => {
//         dispatch(editTask(task));
//         handleClose();
//     };

//     return (
//         <React.Fragment>

//             <Dialog open={props.edit} onClose={handleClose}>
//                 <DialogTitle>Change Task</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="title"
//                         label="Your Task"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         value={task.title ?? task.title}
//                         defaultValue={"title"}
//                         onChange={(e) => setTask({ ...task, title: e.target.value })}
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="name"
//                         label="Description Task"
//                         type="text"
//                         fullWidth
//                         variant="standard"
//                         value={task.description ?? task.description}
//                         defaultValue={"description"}
//                         onChange={(e) => setTask({ ...task, description: e.target.value })}
//                     />

//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     {/* <Button onClick={() => handleSubmit(task)}>Submit</Button> */}
//                     <Button onClick={() => handleSubmit(task)}>Submit</Button>
//                 </DialogActions>
//             </Dialog>
//         </React.Fragment>
//     );
// };


// // const ToDoComp = () => {
// //     const myTasks = useSelector(state => state.toDoSlice.task);
// //     // const editedTask = useSelector((state) => state.toDoSlice.editedTask);
// //     // const dispatch = useDispatch();

// //     // const handleEditTask=(editedTask)=>{
// //     //     dispatch(setEditTask(editedTask));
// //     // }
// //     return (
// //         <div>
// //             <h1>Task List</h1>
// //             {/* <FormDialog /> */}
// //             <div style={{ display: 'flex', flaxWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
// //                 {myTasks.map((task, index) => (
// //                     <ToDo key={index} task={task} />

// //                 ))}
// //             </div>
// //         </div>
// //     )
// // };
// // export default ToDoComp;







////
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { editTask } from "../../Store/ToDoSlice";


export function EditDialog(props) {
    const [open, setOpen] = useState(false);

    const [task, setTask] = useState(props.task);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        props.setEdit(false);
    };
    const dispatch = useDispatch();

    const handleSubmit = (task) => {
        dispatch(editTask(task));
        handleClose();
    };
   

    return (
        <React.Fragment>

            <Dialog open={props.edit} onClose={handleClose}>
                <DialogTitle>Change Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Your Task"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={task.title ?? task.title}
                        defaultValue={"title"}
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
                        value={task.description ?? task.description}
                        defaultValue={"description"}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleSubmit(task)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};


// const ToDoComp = () => {
//     const myTasks = useSelector(state => state.toDoSlice.task);
//     // const editedTask = useSelector((state) => state.toDoSlice.editedTask);
//     // const dispatch = useDispatch();

//     // const handleEditTask=(editedTask)=>{
//     //     dispatch(setEditTask(editedTask));
//     // }
//     return (
//         <div>
//             <h1>Task List</h1>
//             {/* <FormDialog /> */}
//             <div style={{ display: 'flex', flaxWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
//                 {myTasks.map((task, index) => (
//                     <ToDo key={index} task={task} />

//                 ))}
//             </div>
//         </div>
//     )
// };
// export default ToDoComp;







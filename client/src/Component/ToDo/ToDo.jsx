import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { deleteTask, editTask } from '../../Store/ToDoSlice';
import { EditDialog } from './EditDialog';

export default function ToDo(props) {

  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(props.task);

  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  // const [title, setTitle] = useState(props.task.title);
  // const [description, setDescription] = useState(props.task.description);
  // const [time, setTime] = useState(props.task.time);
  // const [isComplete, setIsComplete] = useState(props.task.isComplete);
  // const [editTask, setEditTask] = useState(null);
  // const [open, setOpen] = useState(false);


  const handleEdit = () => {
    setEdit(false)
    // dispatch(editTask({ id: props.task.id, title: title, description: description, time: time, isComplete: isComplete }))
    // dispatch(editTask(props))
    dispatch(editTask(task))
  }

  const actions = !edit
    ? [
      { icon: <DeleteIcon onClick={() => { dispatch(deleteTask(props.task.id)) }} />, name: 'Delete' },
      { icon: <EditIcon onClick={() => setEdit(true)} />, name: 'Edit' },
    ]
    : [
      { icon: <DeleteIcon onClick={() => { dispatch(deleteTask(props.task.id)) }} />, name: 'Delete' },
      { icon: <EditIcon onClick={() => handleEdit()} />, name: 'Edit' },
    ];

  return (
    <>
      <Card sx={{ height: '250px', width: '100%', mb: 45 }}>

        <CardHeader
          title={
            <React.Fragment>
              <Checkbox /*{...label}*/ sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
              {task.title}
              {/* {title} */}
            </React.Fragment>
          }
          //subheader={time}
          subheader={task.createDate}

        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {task.description}
            {/* {description}  */}
          </Typography>

          <CardActions disableSpacing>
            <IconButton aria-label="options">

              {<Box sx={{ height: 90, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                  ariaLabel="SpeedDial basic example"
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                  icon={<SpeedDialIcon />}
                  direction="right"
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
              </Box>}
            </IconButton>
          </CardActions>
        </CardContent>

      </Card>
      {
       edit && <EditDialog /*edit={edit}*/ setEdit={setEdit} /*task={props.task}*/ task={task} /*setTask={setTask}*/ />
      }
    </>
  );
}





import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../Store/ToDoSlice';
import { EditDialog } from './EditDialog';

export default function ToDo(props) {

  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(props.task);

  const handleEdit = () => {
    setEdit(false)
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
              <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
              {task.title}
            </React.Fragment>
          }
          subheader={task.createDate}

        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {task.description}
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
        edit && <EditDialog setEdit={setEdit} task={task} />
      }
    </>
  );
}





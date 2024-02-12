// ToDo
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
import PrintIcon from '@mui/icons-material/Print';
import { deleteTask, updatedTask } from './slice';
import FormDialog from './formDialog';
import { EditDialog } from './editDailog';

const ToDo = ({ task, onEditTask }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleEditSubmit = (updatedTask) => {
        onEditTask(updatedTask);
        setEditMode(false);
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

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
                    subheader={task.time}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {task.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="options">
                        <Box sx={{ height: 90, transform: 'translateZ(0px)', flexGrow: 1 }}>
                            <SpeedDial
                                ariaLabel="SpeedDial basic example"
                                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                icon={<SpeedDialIcon />}
                                direction="right"
                            >
                                <SpeedDialAction
                                    icon={<DeleteIcon />}
                                    tooltipTitle="Delete"
                                    onClick={handleDelete}
                                />
                                <SpeedDialAction
                                    icon={<EditIcon />}
                                    tooltipTitle="Edit"
                                    onClick={handleEdit}
                                />
                            </SpeedDial>
                        </Box>
                    </IconButton>
                </CardActions>
            </Card>

            <EditDialog></EditDialog>
        </>
    );
};

export default ToDo;

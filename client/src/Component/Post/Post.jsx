import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from '../../Store/PostSlice';
import { EditDialogPost } from './EditDialogPost';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post(props) {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [post, setPost] = useState(props.post);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEdit = () => {
    setEdit(false)
    dispatch(editPost(post));

  }

  const actions = !edit
    ? [
      { icon: <DeleteIcon onClick={() => { dispatch(deletePost(props.post.id)) }} />, name: 'Delete' },
      { icon: <EditIcon onClick={() => setEdit(true)} />, name: 'Edit' },
    ]
    : [
      { icon: <DeleteIcon onClick={() => { dispatch(deletePost(props.post.id)) }} />, name: 'Delete' },
      { icon: <EditIcon onClick={() => handleEdit()} />, name: 'Edit' },
    ];
  return (

    <>
      <Card sx={{ height: '250px', width: '100%', mb: 45 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.content}
          </Typography>
        </CardContent>

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
      </Card>

      {
        edit &&
        <EditDialogPost

          setEdit={setEdit}
          post={post}

        />
      }
    </>
  );

}
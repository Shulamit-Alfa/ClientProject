import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePhoto } from '../../Store/PhotoSlice';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Photos(props) {

  const dispatch = useDispatch()

  return (
    <>

      <ImageListItem key={props.item.img}>
        <img
          src={props.item.img}
          alt="Preview"
          loading="lazy"
        />
        <ImageListItemBar
          title={props.item.title}
          subtitle={props.item.author}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${props.item.title}`}
            >
              <IconButton onClick={() => { dispatch(deletePhoto(props.photo.id)) }}>
                <DeleteIcon style={{ color: 'white' }} />
              </IconButton>
            </IconButton>
          }
        />
      </ImageListItem>
    </>
  );
}
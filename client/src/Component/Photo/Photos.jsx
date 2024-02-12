import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deletePhoto, getPhoto } from '../../Store/PhotoSlice';
import { useDispatch, useSelector } from 'react-redux';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Photos(props) {

  // const [photo, setPhoto] = useState(props.photo);
  const dispatch = useDispatch()
  //  dispatch(getPhoto())
  // const delet = () => {
  //   dispatch(deletePhoto({ id: props.item.id }))
  // }
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
              <IconButton onClick={() => { dispatch(deletePhoto(props.photo.id))}}>
                <DeleteIcon style={{ color: 'white' }} />
              </IconButton>
            </IconButton>
          }
        />
      </ImageListItem>

      {/* <ImageListItem key={props.item.img} cols={props.item.cols || 1} rows={props.item.rows || 1}>
        <img
          {...srcset(props.item.img, 121, props.item.rows, props.item.cols)}
          alt={props.item.title}
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
              </IconButton> */}
      {/* <DeleteIcon /> */}
      {/* </IconButton>
          }
        />
      </ImageListItem> */}
    </>
  );
}
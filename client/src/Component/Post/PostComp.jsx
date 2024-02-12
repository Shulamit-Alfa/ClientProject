import React, { useState } from 'react';
import Post from "./Post"
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Textarea from '@mui/material/TextareaAutosize';
import { addPost, getPost } from '../../Store/PostSlice';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';
//import { Textarea } from '@mui/base/TextareaAutosize';

// export function MinHeightTextarea(props) {
//     const [context, setContext] = useState('');
//     const blue = {
//         100: '#DAECFF',
//         200: '#b6daff',
//         400: '#3399FF',
//         500: '#007FFF',
//         600: '#0072E5',
//         900: '#003A75',
//     };

//     const grey = {
//         50: '#F3F6F9',
//         100: '#E5EAF2',
//         200: '#DAE2ED',
//         300: '#C7D0DD',
//         400: '#B0B8C4',
//         500: '#9DA8B7',
//         600: '#6B7A90',
//         700: '#434D5B',
//         800: '#303740',
//         900: '#1C2025',
//     };

//     const Textarea = styled(BaseTextareaAutosize)(
//         ({ theme }) => `
//       box-sizing: border-box;
//       width: 320px;
//       font-family: 'IBM Plex Sans', sans-serif;
//       font-size: 0.875rem;
//       font-weight: 400;
//       line-height: 1.5;
//       padding: 8px 12px;
//       border-radius: 8px;
//       color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//       background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//       border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//       box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
//       &:hover {
//         border-color: ${blue[400]};
//       }
  
//       &:focus {
//         border-color: ${blue[400]};
//         box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
//       }
  
//       // firefox
//       &:focus-visible {
//         outline: 0;
//       }
//     `,
//     );
//     return <Textarea {...props} />;

//     // return (
//     //     <Textarea  />
//     // );

// }
const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
const MinHeightTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
      box-sizing: border-box;
      width: 320px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
      &:hover {
        border-color: ${blue[400]};
      }
    
      &:focus {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      }
    
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `,
  );


export function FormDialog() {
    const dispatch = useDispatch();
    // const [context, setContext] = useState('');
    const [open, setOpen] = useState(false);
    // const [post, setPost] = useState({content:' ' });
    // const [content, setContent] = useState(props.post.content);
    const [post, setPost] = useState({ context: '', like: false });
    // const[editedPost,setEditedPost]=useState(props.editedPost)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch(addPost(post));
        handleClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    return (
        <>
        {/* // <React.Fragment> */}
            <Button variant="outlined" onClick={handleClickOpen} sx={{ "& .MuiButton-startIcon": { marginRight: 1 } }}>
                Add Post
            </Button>
            <Dialog open={open} onClose={handleClose} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <DialogTitle>Add Post</DialogTitle>
                <DialogContent>
                    <MinHeightTextarea
                        aria-label="מאמר"
                        value={post.content}
                        minRows={9}
                        cols={40}
                        placeholder="Your Post"
                        onChange={(e)=>setPost({...post,content:e.target.value})}
                    />

                    {/* return (
    <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
  );} */}
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>handleSubmit()}>Submit</Button>
                </DialogActions>
            </Dialog>
        {/* // </React.Fragment> */}
        </>
    );
};
const PostComp = () => {
    const dispatch = useDispatch();
    dispatch(getPost());
    // const [post, setPost] = useState({ contex: ' ' });
    const myPosts = useSelector((state) => state.postSlice?.posts);

    if (!myPosts || !myPosts.length) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Posts</h1>
            <FormDialog />
            <div>
                {myPosts.map((p) => (
                    <Post key={p.id} post={p} style={{ display: 'flex', flaxWrap: 'wrap', justifyContent: 'space-between' }} />
                ))}
            </div>
        </div>
    )
};
export default PostComp;



// import React from 'react';
// import Post from "./Post"
// import { useSelector, useDispatch } from 'react-redux';


// // export function FormDialog() {
// //     const [like, setLike] = useState(false);
// //     const [post, setPost] = useState({ description: '' });

// //     const handleClickOpen = () => {
// //         setLike(true);
// //     };
// //     const handleClose = () => {
// //         setLike(false);
// //     };
// //     const dispatch = useDispatch();

// //     const handleSubmit = (post) => {
// //         dispatch(addPost(post));
// //         handleClose();
// //     };

// //     return (
// //         <React.Fragment>
// //             <Button variant="outlined" onClick={handleClickOpen} sx={{ "& .MuiButton-startIcon": { marginRight: 1 } }}>
// //                 Add Task
// //             </Button>
// //             <Dialog open={open} onClose={handleClose}>
// //                 <DialogTitle>Add Post</DialogTitle>
// //                 <DialogContent>
// //                     {/* <TextField
// //                         autoFocus
// //                         margin="dense"
// //                         id="title"
// //                         label="Your Task"
// //                         type="text"
// //                         fullWidth
// //                         variant="standard"
// //                         value={post.title}
// //                         onChange={(e) => setTask({ ...task, title: e.target.value })}
// //                     /> */}
// //                     <TextField
// //                         autoFocus
// //                         margin="dense"
// //                         id="name"
// //                         label="Description post"
// //                         type="text"
// //                         fullWidth
// //                         variant="standard"
// //                         value={post.description}
// //                         onChange={(e) => setPost({ ...post, description: e.target.value })}
// //                     />

// //                 </DialogContent>
// //                 <DialogActions>
// //                     <Button onClick={handleClose}>Cancel</Button>
// //                     <Button onClick={() => handleSubmit(post)}>Submit</Button>
// //                 </DialogActions>
// //             </Dialog>
// //         </React.Fragment>
// //     );
// // };



// const PostComp = () => {
//     const myPosts = useSelector(state => state.postSlice.posts);
//     const dispatch=useDispatch();
//     return (
//         <div>
//             <h1>Posts</h1>
//             {/* <FormDialog />  */}
//             <div style={{ display: 'flex', flaxWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
//                 {myPosts.map((post, index) => (
//                     <Post key={index} post={post} />
//                 ))}
//             </div>
//         </div>
//     )
// };
// export default PostComp;


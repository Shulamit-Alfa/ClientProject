import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { lime, teal } from '@mui/material/colors';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeComp from './Component/Home/HomeComp';
import PhotoComp from './Component/Photo/PhotoComp';
import PostComp from './Component/Post/PostComp';
import ToDoComp from './Component/ToDo/ToDoComp';
import UsersComp from './Component/Users/UsersComp';

function App() {
  const color = teal['500'];
  return (
    <div className="App" dir="rtl">
      <Box sx={{ display: { xs: 'none', sm: 'block' }, '& :not(style)': { ml: 20 } }}>
        <AppBar position="static" sx={{ backgroundColor: color}} >
          <Toolbar >
            <Link to="/" underline='none' sx={{color:lime['50']}} >
              HOME
            </Link>
            <Link to="/TodoComp" underline="none" >
              TODO
            </Link>
            <Link to="/PostComp" underline="none" >
              POST
            </Link>
            <Link to="/PhotoComp" underline="none" >
              PHOTO
            </Link>
            <Link to="/UsersComp" underline="none" >
              USER
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/TodoComp" element={<ToDoComp />} />
        <Route path="/PostComp" element={<PostComp />} /> 
        <Route path="/PhotoComp" element={<PhotoComp />} /> 
        <Route path="/UsersComp" element={<UsersComp />} /> 
      </Routes>
    </div>
  );
}

export default App;
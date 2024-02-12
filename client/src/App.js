import NavBar from './Component/AppBar';
import './App.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Routes, Route, Link } from 'react-router-dom'
import HomeComp from './Component/Home/HomeComp';
import { cyan, teal,lime } from '@mui/material/colors';
import Tabs from '@mui/material/Tabs';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToDoComp from './Component/ToDo/ToDoComp';
// import ToDoComp from './Component/Darft/todoComp';
import Blog  from './Component/Post/Post';
import PostComp from './Component/Post/PostComp';
import PhotoComp from './Component/Photo/PhotoComp';
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
            {/* <Link to="/post" underline="none">
              פוסטים
            </Link>
            <Link to="/photo" underline="none">
              תמונות
            </Link>
            <Link to="/users" underline="hover">
              משתמשים
            </Link>  */}
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Box sx={{ width: '100%' ,backgroundColor:color}}>
      <Tabs  aria-label="nav tabs example">
        <Link  to="/" >Home       </Link>
        <Link  to="/ToDo" >ToDo      </Link>
        <Link label="Page Two" to="/Post" >Post       </Link>
      </Tabs>
    </Box> */}
      {/* <Toolbar sx={{ width: '100%', backgroundColor: color }}>
        <ButtonGroup aria-label="outlined primary button group">

          <Link to="/">One</Link>
          <Link to="/todo">One</Link>
          <Link to="/">One</Link>

        </ButtonGroup>
      </Toolbar> */}

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


// שלנווו
// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import NavBar from './Component/AppBar';
// // import * as React from 'react';


// const LazyHome = React.lazy(() => import('./Component/Home/HomeComp'));
// const LazyToDo = React.lazy(() => import('./Component/ToDo/ToDoComp'));
// const pages = ['Home', 'ToDo', 'Photo', 'Post'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function App() {
//   return (

//     <>
//       <div>
//         {/* <NavBar > */}
//           {/* <Link to="/Home">Home</Link>
//           {/* {pages.map((page) => (
//               <Link key={page} to={'/${page}'}>{page}</Link>
//             ))}; */}
//         <NavBar/> 

//         <Routes>
//           <Route
//             path="/HomeComp"
//             element={
//               <Suspense fallback={<h1>loading...</h1>}>
//                 <LazyHome />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/ToDoComp"
//             element={
//               <Suspense fallback={<h1>loading...</h1>}>
//                 <LazyToDo />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </div></>

//   );
// }

// export default App;


























// function App() {
//   return (
//     // <Router>
//     <>
//       <div>
//         <NuvBar></NuvBar> 
//         <nav>
//           <Link to="/Home">Home</Link>
//           <Link to="/ToDo">ToDo</Link> 
//         </nav>
//         <Routes>
//           <Route
//             path="/Home"
//             element={
//               <Suspense fallback={<h1>loading...</h1>}>
//                 <LazyHome />
//               </Suspense>
//             }
//           />
//           {/* <Route
//             path="/ToDo"
//             element={
//               <Suspense fallback={<h1>loading...</h1>}>
//                 <LazyToDo />
//               </Suspense>
//             }
//           /> */}
//         </Routes>
//       </div></>
//   );
// }

// export default App;
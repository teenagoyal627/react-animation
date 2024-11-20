// import { useState } from "react";
// import {motion} from 'framer-motion'
// const App=()=>{
//   const[x,setX]=useState(0)
//   const[y,setY]=useState(0)
//   const[rotate,setRotate]=useState(0)

//   return (
//     <div id="demo">
//       <motion.div id="box" animate={{x:x,y:y,rotate:rotate}} transition={
//         {duration:0.3,
//         type:'spring'}
//       }/>
//         <div id="inputs">
//           <p>
//             <label htmlFor="x">X</label>
//             <input type="number" id="x" onChange={(event)=>setX(+event.target.value)} />
//           </p>
         
//           <p>
//             <label htmlFor="y">Y</label>
//             <input type="number" id="y" onChange={(event)=>setY(+event.target.value)} />
//           </p>
          
//           <p>
//             <label htmlFor="rotate">Rotate</label>
//             <input type="number" id="rotate" onChange={(event)=>setRotate(+event.target.value)} />
//           </p>
//           </div>      

//     </div>
//   )
// }
// export default App;




import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
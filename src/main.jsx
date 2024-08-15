import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Header from './Component/Header/Header.jsx'
import User from './Component/User/User.jsx'
import Github ,{ githubInfoLoader } from './Component/Github/Github.jsx'


// 1st method for component routing
// const router =createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"About",
//       element:<About/>
//     },
//     {
//       path:"Contact",
//       element:<Contact/>
//     },
//     {
//       path:"Footer",
//       element:<Footer/>
//     }
//   ]
// }])

// 2nd Method for component routing
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Footer' element={<Footer/>}/>
      <Route path='Header' element={<Header/>}/>
      <Route path='user/:userid' element={<User />} />
      <Route 
       loader={githubInfoLoader}
      path='Github'
       element={<Github/>}
       />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>*
    <RouterProvider router={router}/>
  </StrictMode>,
)

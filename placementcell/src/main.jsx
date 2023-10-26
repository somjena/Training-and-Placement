import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import HomePage from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Programs from './Component/Programs/Programs.jsx'
import ContactPage from './Component/Contact/Contact.jsx'
import Login from './Component/Login/Login.jsx'
import Layout from './Layout.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='programs' element={<Programs/>}/>
      <Route path='contact' element={<ContactPage/>}/>
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

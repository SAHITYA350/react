import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


const au = "This is another user";

const reactE = React.createElement(
   'a',
   {href: "https://3dportfolio-snowy-sigma.vercel.app/", target: "_blank"},
   "Clcik my portfolio",
   au
)

createRoot(document.getElementById('root')).render(
    reactE
)

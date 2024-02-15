import React from 'react'
import Page  from './component/Page'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'


function callApi({query='',headlines=false}) {
  const url = headlines ? `https://newsapi.org/v2/top-headlines?country=in&apiKey=b2c0f3b3d4d645dbac1b5ff64ee14200`
  : `https://newsapi.org/v2/everything?q=${query}&apiKey=b2c0f3b3d4d645dbac1b5ff64ee14200`
  return fetch(url)
    .then(response => response.json())

}
let Router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "",
        element: <Page />,
        loader: () => callApi({headlines:true})
      },
      {
        path: "latest",
        element: <Page  heading='Latest'/>,
        loader: () => callApi({query:'latest'})
      },
      {
        path: "education",
        element: <Page heading='Education' />,
        loader: () => callApi({query:'education'})
      },
      {
        path: "india",
        element: <Page heading='India' />,
        loader: () => callApi({query:'india'})
      },
      {
        path: "entertainment",
        element: <Page heading='Entertainment' />,
        loader: () => callApi({query:'entertainment'})
      },
      {
        path: "technology",
        element: <Page heading='Technology' />,
        loader: () => callApi({query:'technology'})
      },
      {
        path: "business",
        element: <Page  heading='Business'/>,
        loader: () => callApi({query:'business'})
      },
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>

  </React.StrictMode>,
)

import './App.css'
import { Outlet } from 'react-router-dom'
import Heder from './component/heder'
import Page from './component/Page'
import Search from './component/search-bar'
import Latest from './component/Latest'
import news from './component/Getnews'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [list, setlist] = useState([])
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=b2c0f3b3d4d645dbac1b5ff64ee14200`)
    .then(response => response.json())
    .then(data => {
      setlist(data.articles)
    })
  }, [])


  return (
    <>
    <Heder/>
    <div className='kuch_bhi'>
    <Outlet/>
      <div className='side_bar'>
        <Search />
        <Latest list={ list } />
      </div>
    </div>
    </>
  )
}

export default App

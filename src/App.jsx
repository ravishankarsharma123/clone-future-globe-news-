import './App.css'
import Heder from './component/heder'
import Page from './component/Page'
import Search from './component/search-bar'
import Latest from './component/Latest'
import news from './component/Getnews'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [home, setHome] = useState([]);
  useEffect(  ()=>{
     fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=b2c0f3b3d4d645dbac1b5ff64ee14200')
     .then(response => response.json())
     .then(data => setArticles(data.articles))
  },[])

  return (
    <>
    <Heder/>
    <div className='kuch_bhi'>
    <Routes>
        <Route path="/">
          <Route index element={<Page articles={home}/>} />
          <Route path="latest" element={<Page />} />
          <Route path="education" element={<Page /> }  /> 
          <Route path="india" element={<Page />} />
          <Route path="entertainment" element={<Page />} />
          <Route path='technology' element={<Page/>}/>
          <Route path='business' element={<Page/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <div className='side_bar'>
        <Search />
        <Latest
          list={[
            "The Future of Stock Market in India",
            "How to choose best stocks for long term investment; a step by step guide",
            "Best Stocks Portfolio for Long Term Profit",
            "SSC GD Online Form 2023 Notification Out for 26146 Posts, Check Details and Apply Here",
            "SBI Clerk 8283 Posts Notification Out, Check Details and Apply Here",
          ]}
        />
      </div>
    </div>
    </>
  )
}

export default App

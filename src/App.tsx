import './App.css'
import { useState } from 'react'

import {IoMdSend} from 'react-icons/io'
import getTitles from './api/getTitles'
import MovieTitle from './components/movieTitle'

function App() {
  const [title, setTitle] = useState('')
  const [result, setResult] = useState([])

  const handleGetTitles = async () => {
    setResult(await getTitles(title))
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Search</h1>
      </header>
      <main>
        <div className="input-wrapper">
          <input type="text" placeholder='Type the movie title' onChange={e => setTitle(e.target.value)} />
          <button onClick={handleGetTitles}><IoMdSend/></button>
        </div>
        <div className="output-wrapper">
          {result.map((movie : {title: string, description: string, image: string}, index : number) =>
          movie.image != "" && 
          <MovieTitle key={index} 
            title={movie.title}
            description={movie.description}
            image={movie.image} />)
          }
        </div>
      </main>
    </div>
  )
}

export default App

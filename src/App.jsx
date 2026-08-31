
// https://react-bootstrap.netlify.app/docs/layout/grid/

import Movies from './components/movies/Movies.jsx';


function App() {

  return (
    <div>
      <h1 className="text-light text-center">LAS PELIS DE LA 2TUP8</h1>
      <h3 className="text-light-emphasis text-center mb-5">Bienvenidos/as</h3>

      <Movies/>
    </div>
  )
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Country } from 'pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/:Country' element={<Country />} />
    </Routes>
  </BrowserRouter>
)

export default App

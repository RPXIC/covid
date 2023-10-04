import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from 'pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App

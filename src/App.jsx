import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Quiz from './pages/Questioniere';
import './App.css'

export default function App() {

  return <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quiz/:id' element={<Quiz />} />
      <Route path='*' />
    </Routes>

  </Router>



}


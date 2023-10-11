import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Sign-In" element={<SignIn/>} />
        <Route path="/Sign-Up" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>


    </BrowserRouter>
    )
}

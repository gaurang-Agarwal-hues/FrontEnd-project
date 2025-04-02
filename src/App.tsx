import './tailwind.css';
import { Sidebar2,  } from './pages/signup';
import { Dashboard } from './pages/dashboard';
import { Signin } from './pages/signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//now to add routes do npm install react-router-dom
function App() {
   return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Sidebar2></Sidebar2>}></Route>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
      </BrowserRouter>
    
  )

  
}

export default App;

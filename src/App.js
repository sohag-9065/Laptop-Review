

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorRoute from './components/ErrorRoute/ErrorRoute';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';


function App() {
  // const nagigate = useNavigate();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/Review' element={<Reviews></Reviews>}></Route>
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/*' element={<ErrorRoute></ErrorRoute>}> </Route>
        
      </Routes>
    </div>
  );
}

export default App;

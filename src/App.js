
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "../Header/Header";
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contacts from '../Pages/Contacts/Contacts';
import NotFound from '../Pages/NotFound/NotFound';


function App(){  
    return(
        <div>
           <Header/>
           <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
           </Router> 
           
        </div>
    )
}

export default App;
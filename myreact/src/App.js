import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';// שנוכל לשנות את הניווט כל פעם
import Home from './lesson4/component/comp_home';
import About from './lesson4/component/comp_about';
import Contact from './lesson4/component/comp_contact';
import Servies from './lesson4/component/comp_servies';
import MyComponent from './Lesson2/lesson2_img';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n'; 
// import i18n from '../i18n';
import i18n from 'i18next';





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <MyComponent></MyComponent>
//       </header>
//     </div>
//   );
// }

// export default App;

function App(){
  
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  return(
    <BrowserRouter>
    <nav id="n" class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/">home </Link>|
      <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/about">about </Link>|
      <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/contact">contact   </Link>|
      <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/servies"> servies</Link>
    </nav>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/about" element ={<About/>}></Route>
      <Route path="/contact" element ={<Contact/>}></Route>
      <Route path="/servies" element ={<Servies/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App 

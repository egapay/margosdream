import Home from "./components/Home";
import Artwork from "./components/Artwork";
import Contact from "./components/Contact";
import Merch from "./components/Merch";
import Donate from "./components/Donate";
import TestComponent from "./components/TestComponent";
import 'semantic-ui-css/semantic.min.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home/>}/>
        <Route
          exact
          path="/home"
          element={<Home/>}/>
        <Route
          exact
          path="/artwork"
          element={<Artwork/>}/>
        <Route
          exact
          path="/contact"
          element={<Contact/>}/>
        <Route
          exact
          path="/merch"
          element={<Merch/>}/>
        <Route
          exact
          path="/Donate"
          element={<Donate/>}/>
        <Route
          exact
          path="/Test"
          element={<TestComponent/>}/>
        <Route
          path="*"
          element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App

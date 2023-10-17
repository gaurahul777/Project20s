import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Layout from "./components/shared/Layout"
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path="products" element={<Products/>}/>
        </Route>
        <Route path="login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App

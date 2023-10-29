import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import AddProduct from './component/Product/AddProduct';
import AddCategory from './component/Category/AddCategory';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/createCategory" element={<AddCategory />} />
          <Route exact path="/createProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

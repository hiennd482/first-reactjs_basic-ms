import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Todofeatures from './features/todo/pages';
import Albumne from './features/Albumdemo/pages';
import categoryApi from './api/categoryApi';

const App = () => {
  useEffect(() => {
    const fecthCategory = async () => {
      const categories = await categoryApi.getAll();
      console.log(categories);
    };
    fecthCategory();
  }, []);
  return (
    <div className="App">
      {/* <Outlet>
        <ul>
          <li>
            <Link to="/todonhes">todo</Link>
          </li>
        </ul>
      </Outlet> */}
      {/* <Layout></Layout> */}
      {/* <h2>{me.name},{me.age} </h2>
          <h3>{a.map(color => (
            <h4 style={{ color }}>{color}</h4>
          )
          )}</h3> */}
      {/* <Todofeatures></Todofeatures> */}
      {/* <Albumne></Albumne> */}
      <p>
        <Link to="/todonhes">todo</Link>
      </p>

      <p>
        <Link to="/Albumdemo">Albumne</Link>
      </p>
      <Link to="/">home</Link>

      <Routes>
        <Route path="todonhes" element={<Todofeatures />}></Route>
        <Route path="Albumdemo" element={<Albumne />}></Route>
      </Routes>

      <h4>hihih</h4>
      <p></p>
    </div>
  );
};

export default App;

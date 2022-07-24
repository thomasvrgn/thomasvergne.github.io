import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/tailwind.css';
import { HashRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Main from './main/Index';
import List from './blog/List';
import Article from './blog/Article';
import Error from './Error';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="blog">
            <Route index element={<List />} />
            <Route path=":slug" element={<Article />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <footer className="h-[750px] relative overflow-hidden">
        {/* Grid effect */}
        <div className="absolute w-full h-full grid-effect opacity-50"></div>
        {/* Bottom blur effect */}
        <div className="absolute -top-96 sm:-top-1/3 -left-1/3 -right-1/3 h-[35rem] bg-white blur-[3rem] sm:blur-[7rem] filter z-10"></div>
      </footer>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

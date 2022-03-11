import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Projects from './Projects';
import 'styles/tailwind.css';
import Button from 'components/Button';
import Blog from './Blog';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Projects />
    <Blog />
    <div className="p-16">
      <Button onClick={() => window.localStorage.clear()}>
        Supprimer le cache
      </Button>  
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

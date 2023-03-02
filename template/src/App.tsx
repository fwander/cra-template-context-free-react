import './App.css';
import { AST_root } from './grammar-lib/ast';
import { Root } from './grammar-lib/lib';
import React from 'react';

function App() {


  function update(expr: AST_root){
    console.log("update:", expr);
  }

  return (
        <div className="App">
          <Root update={update} />
        </div>
  );
}

export default App;

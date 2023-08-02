import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Create from './components/Create';
import { Provider } from './Context';


function App() {
  const GlobalStyle = createGlobalStyle`
    body{
      background: #B1C4B7;
    }
  `;

  return (
    <Provider>
      <GlobalStyle />
      <Template>
        <Header />
        <List />
        <Create />
      </Template>
    </Provider>
  );
}

export default App;

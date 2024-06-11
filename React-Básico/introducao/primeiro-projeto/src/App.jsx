import React from "react";
import "./styles/App.css"
import Navbar from "./components/NavBar/Navbar";
import logoImg from './assets/images/logo.png'

// Componente em classe é uma classe que herda a classe component do react e retorna HTML dentro do método Render

class App extends React.Component {
  render() {
    // mètodo responsável por rederizar o conteúdo HTML do nosso componente
    return (
      <Navbar/>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Bruno de andrade</h1>
//     </div>
//   );
// }

export default App;

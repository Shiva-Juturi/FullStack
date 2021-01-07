// import logo from './logo.svg';
// import './App.css';

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
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';

import React from 'react';
import Login from './Login';


class App extends React.Component {

  render() {
    return (
      <div>
        <h1>   Hello  ... This is Your Webpage </h1>
      <Login></Login>

      </div>

    )
  }

}

export default App;
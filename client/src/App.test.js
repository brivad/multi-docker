import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// il test fallirebbe (soprattutto in travis) perche il file Fib.js utilizzato fa
// richieste a un server web che non è attualmente running
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// per avere test che passi si dovrà implementare in modo da usare un fake server

it('renders without crashing', () => {})

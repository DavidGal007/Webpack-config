import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/style.css'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

const food = {
    apple: 1,
    manzana: 2,
    pera: "David"
}

const newObject = {
    ...food,
    latest: 5,

}

console.log(food);
console.log(newObject);
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div class="calculator">
    <div class="display" data-dom="display">0</div>
    <button class="button button--secondary">AC</button>
    <button class="button button--secondary">+/-</button>
    <button class="button button--secondary">%</button>
    <button class="button button--operation">&divide;</button>
    <button class="button">7</button>
    <button class="button">8</button>
    <button class="button">9</button>
    <button class="button button--operation">x</button>
    <button class="button">4</button>
    <button class="button">5</button>
    <button class="button">6</button>
    <button class="button button--operation">-</button>
    <button class="button">1</button>
    <button class="button">2</button>
    <button class="button">3</button>
    <button class="button button--operation">+</button>
    <button class="button button--double">0</button>
    <button class="button">,</button>
    <button class="button button--operation">=</button>
  </div>
  );
}

export default App;

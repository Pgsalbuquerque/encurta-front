import React, {useEffect, useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './App.css';

import flecha from './assets/flechas.png'

function App() {
  const [inputText, setInputText] = useState('');
  const [encurtar, setEncurtar] = useState(true)

  const handleSubmit = () => {
    setEncurtar(false)
  }

  const handleCopy = () => {
    setEncurtar(true)
  }

  return (
    <div className="App">
      <h1 class="title">Encurtador de Links</h1>
      {encurtar 
      ? 
      <>
        <div class='ContainerEncurtar'>
          <input 
          class = 'inputEncurtar'
          type="text" 
          value={inputText} 
          placeholder="Digite seu link aqui"
          onChange={e => setInputText(e.target.value)}
          />
          <button class="buttonEncurtar" onClick={handleSubmit}>ENCURTAR</button>
        </div>
      </> 
      : 
      <>
        <div class='ContainerEncurtado'>
            <input 
            class = 'inputEncurtado'
            type="text" 
            value={inputText} 
            placeholder="Digite seu link aqui"
            onChange={e => setInputText(e.target.value)}
            />
            <CopyToClipboard text={inputText}>
                <button class="buttonEncurtado" onClick={handleCopy}>COPIAR</button> 
            </CopyToClipboard>
        </div>
      </>
      }
      <div class="historyContainer">
        <div class="history">
          <b class="leftB">https://google.com.br</b>
          <img style={{height: '30px'}} src={flecha}/>
          <b class="rightB">https://whatsapp.com.br</b>
        </div>
        <div class="history">
          <b class="leftB">https://facebook.com.br</b>
          <img style={{height: '30px'}} src={flecha}/>
          <b class="rightB">https://whatsapp.com.br</b>
        </div>
        <div class="history">
          <b class="leftB">https://whatsapp.com.br</b>
          <img style={{height: '30px'}} src={flecha}/>
          <b class="rightB">https://whatsapp.com.br</b>
        </div>
      </div>
    </div>
  );
}

export default App;

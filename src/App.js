import React, {useEffect, useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './App.css';

import flecha from './assets/flechas.png'
import api from './api'

function App() {
  const [inputText, setInputText] = useState('');
  const [encurtar, setEncurtar] = useState(true)
  const [historyJson, setHistoryJson] = useState({"f": {"shorten": "", "original": ""}, "s": {"shorten": "", "original": ""}, "t": {"shorten": "", "original": ""}})

  const handleSubmit = () => {
    api.post('/shorten', {"link": inputText})
    .then(r => {
      const f = historyJson.f
      const s = historyJson.s
      const json = {"f": {"shorten": `https://encurta-front.vercel.app//${r.data.link}`, "original": inputText}, "s": f, "t": s}
      setHistoryJson(json)
      const stringify = JSON.stringify(json)
      localStorage.setItem('zgencurta', stringify)
      setInputText('https://encurta-front.vercel.app//' + r.data.link)
      setEncurtar(false)
    })
    .catch(e => console.log(e))
    
  }

  const handleCopy = () => {
    setEncurtar(true)
    setInputText("")
  }

  useEffect(() => {
    const zgencurta = localStorage.getItem('zgencurta')
    if (!zgencurta) {
      localStorage.setItem('zgencurta', '{"f":{"shorten": "", "original": ""}, "s":{"shorten": "", "original": ""}, "t":{"shorten": "", "original": ""}}')
    } else {
      setHistoryJson(JSON.parse(zgencurta))
    }
  }, [])

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
      {historyJson.f.shorten !== "" 
        ? 
        <div class="history">
          <a class="leftB" href={historyJson.f.original}>{historyJson.f.original}</a>
          <img style={{height: '30px'}} src={flecha}/>
          <a class="rightB" href={historyJson.f.shorten}>{historyJson.f.shorten}</a>
        </div>
        :
        <></>
      }
      {historyJson.s.shorten !== "" 
        ? 
        <div class="history">
          <a class="leftB" href={historyJson.s.original}>{historyJson.s.original}</a>
          <img style={{height: '30px'}} src={flecha}/>
          <a class="rightB" href={historyJson.s.shorten}>{historyJson.s.shorten}</a>
        </div>
        :
        <></>
      }
      {historyJson.t.shorten !== "" 
        ? 
        <div class="history">
          <a class="leftB" href={historyJson.t.original}>{historyJson.t.original}</a>
          <img style={{height: '30px'}} src={flecha}/>
          <a class="rightB" href={historyJson.t.shorten}>{historyJson.t.shorten}</a>
        </div>
        :
        <></>
      }  
      </div>
    </div>
  );
}

export default App;

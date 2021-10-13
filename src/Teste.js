import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

import api from './api'
function Teste() {
  const {link} = useParams()
  const [error, setError] = useState(false)

  useState(() => {
    api.get(`/original?shortened=${link}`)
    .then( r =>
          window.location.assign(r.data.link)
      )
    .catch(e => setError(true))
  }, [])

  return error ? <h1>not found</h1> : <></>;
}

export default Teste;
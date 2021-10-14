import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

import api from './api'
import NotFound from './NotFound'

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

  return error ? <NotFound/> : <></>;
}

export default Teste;
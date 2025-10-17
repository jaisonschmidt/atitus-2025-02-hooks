import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const doLogin = () => setIsLogged(true);

  return (
    <>
      {isLogged ? <div>Seja bem-vindo, Fulano de Tal!</div> : <div>Faça seu login, <a href="#" onClick={doLogin}>clique aqui</a>!</div>}
    </>
  )
}

export default App

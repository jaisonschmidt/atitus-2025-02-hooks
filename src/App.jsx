import { useState } from 'react';
import { TodoList } from './components/TodoList';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const doLogin = () => setIsLogged(true);
  const doLogout = () => setIsLogged(false); 

  return (
    <>
      {isLogged ? <div>Seja bem-vindo, Fulano de Tal! <a href="#" onClick={doLogout}>Sair</a></div> : <div>Faça seu login, <a href="#" onClick={doLogin}>clique aqui</a>!</div>}
      
      <TodoList />
    </>
  )
}

export default App

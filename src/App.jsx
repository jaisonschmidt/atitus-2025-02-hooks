import { useState } from 'react';
import { TodoList } from './components/TodoList';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const doLogin = () => setIsLogged(true);
  const doLogout = () => setIsLogged(false); 

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">TaskManager</h1>
            </div>
            <div className="flex items-center space-x-4">
              {isLogged ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">
                    Seja bem-vindo, <span className="text-blue-600">Fulano de Tal</span>!
                  </span>
                  <button 
                    onClick={doLogout}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Faça seu login</span>
                  <button 
                    onClick={doLogin}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    Entrar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <main className="py-8">
        <TodoList />
      </main>
    </div>
  )
}

export default App

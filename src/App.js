import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const filters=['all','active','completed'];
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
    <Header 
      filters={filters} 
      filter={filter} 
      onFilterChange={setFilter}/>
    <TodoList filter={filter}/>
      
    </DarkModeProvider>
  );
}

export default App;

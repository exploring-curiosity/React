import React from 'react';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';
import ThemeToggle from './Components/ThemeToggle';
import ThemeContextProvider from './Context/ThemeContext';
import AuthContextProvider from './Context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

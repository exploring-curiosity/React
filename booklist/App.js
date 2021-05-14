import React from 'react';
import Navbar from './components/Navbar';
import BookContestProducer from './Context/BookContest';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
function App() {
    return (
        <div className="App">
            <BookContestProducer>
                <Navbar />
                <BookList />
                <BookForm />
            </BookContestProducer>
        </div>
    );
}

export default App;

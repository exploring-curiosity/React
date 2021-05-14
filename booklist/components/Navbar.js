import React,{ useContext } from 'react';
import { BookContest } from '../Context/BookContest';

const Navbar = () => {
    const {books}=useContext(BookContest);
    return (  
        <div className="navbar">
            <h1> My Reading List</h1>
            <p>Currently there are {books.length} books in your inventory</p>
        </div>
    );
}
 
export default Navbar;
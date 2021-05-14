import React,{useContext} from 'react';
import { BookContest } from '../Context/BookContest';
import BookDetails from './BookDetails';
const BookList = () => {
    const {books}=useContext(BookContest);
    return books.length ? ( 
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id}/>)
                })}
            </ul>
        </div>
     ):(<div className="empty">No available Books</div>);
}
 
export default BookList;
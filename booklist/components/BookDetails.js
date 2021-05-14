import React,{useContext} from 'react';
import { BookContest } from '../Context/BookContest';

const BookDetails = ({book}) => {
    const {removeBook}=useContext(BookContest);
    return ( 
        <li onClick={()=> removeBook(book.id)}>
            <div className='title'>{ book.title }</div>
            <div className='author'>{ book.author }</div>
        </li>
     );
}
 
export default BookDetails;
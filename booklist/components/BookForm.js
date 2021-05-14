import React,{useContext,useState} from 'react';
import { BookContest } from '../Context/BookContest';

const BookForm = () => {
    const {addBook} = useContext(BookContest);
    const [name,setName]=useState('');
    const [author,setAuthor]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addBook(name,author);
        setName('');
        setAuthor('');
    }
    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <label>Book Name:</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} required /><br />
                <label>Author:</label>
                <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} required /><br />
                <input type='submit'  value="Add Book"/>
            </form>
        </div>
    );
}
 
export default BookForm;
import React,{createContext, useState} from 'react';

export const BookContest = createContext();

const BookContestProducer = (props) => {
    const [books,setBooks] = useState([
        {title:'Book1' ,author:'Author1',id:1},
        {title:'Book2' ,author:'Author2',id:2}
    ]);
    const [x,setx] =useState(3);
    const addBook=(title,author)=>{
        setBooks([...books,{title,author,id:x}]);
        setx(x+1);
    };
    const removeBook=(id)=>{
        setBooks(books.filter(book => book.id !== id));
    };
    return (
        <BookContest.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContest.Provider>
    );
}
 
export default BookContestProducer;
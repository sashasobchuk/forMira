import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {downloadBooks} from "../../redux/booksReducer";
import Book from "./book/book";

const Books = () => {

    const books = useSelector(state => state.booksPage.books)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(downloadBooks())
    },[dispatch])

    return (
        <div>
            <div className='tittle'>BOOKS </div>
            {books.map((book)=>(
                    <Book props={{book,dispatch}} />
            ))}
            bool
        </div>
    );
};

export default Books;
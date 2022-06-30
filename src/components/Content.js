import React from 'react';
import BookList from './BookList';
import { useBooklistState, useBooklistDispatch } from '../context/BookListContext';

const Booklist = () => {
    const { filterList } = useBooklistState();
    const dispatch = useBooklistDispatch();
    return (
        <div className='booklist_wrap'>
            <div className='booklist'>
                <span>글쓴이</span>
                <span>제목</span>
                <span>년도</span>
            </div>
            {filterList.map(book=><BookList book={book} key={book.id} dispatch={dispatch}/>)}
        </div>

     
    );
};

export default Booklist;
import React from 'react';

const BookList = ({ book, dispatch }) => {
    //useReducer는 dispatch를 전달
    const onDelete = () => dispatch({
            type:'DELETE_BOOK',
            id: book.id
    })
    return (
        <div className='booklist_NewList'>
            <span>{book.writer}</span>
            <span>{book.title}</span>
            <span>{book.year}<button onClick={onDelete}>X</button></span>
        </div>
    );
};

export default BookList;
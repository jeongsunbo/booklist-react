import React,{ createContext, useReducer, useContext }from 'react';
const initialbooklist = {
    total: [
        {
            id:1,
            writer:'글쓴이1',
            title:'제목1',
            year:'2019',
        },
        {
            id:2,
            writer:'글쓴이2',
            title:'제목2',
            year:'2020',
        },
        {
            id:3,
            writer:'글쓴이3',
            title:'제목3',
            year:'2021',
        },
        {
            id:4,
            writer:'글쓴이4',
            title:'제목4',
            year:'2022',
        },
    ],
    filterList: [
        {
            id:1,
            writer:'글쓴이1',
            title:'제목1',
            year:'2019',
        },
        {
            id:2,
            writer:'글쓴이2',
            title:'제목2',
            year:'2020',
        },
        {
            id:3,
            writer:'글쓴이3',
            title:'제목3',
            year:'2021',
        },
        {
            id:4,
            writer:'글쓴이4',
            title:'제목4',
            year:'2022',
        },
    ]
}

// useState의 대체 함수입니다. 
// (state, action)=> newState의 형태로 reducer를 받고 dispatch 메서드와 
// 짝의 형태로 현재 state를 반환합니다
function BooklistReducer( state, action ){
    switch(action.type){
        // 년도별로 찾음
        case "YEAR_BOOKS":
            return {
               ...state,
               filterList: state.total.filter(book=> book.year === action.year)
            };
        case "TOTAL_LIST":
            return state;
        case "DELETE_BOOK":
            //???
            return {
                total:state.total.filter(list=>list !== action.id),
                filterList:state.filterList.filter(list=>list.id !== action.id)
            }
        default:
            return state;
    }
}
const BooklistStateContext = createContext();
const BooklistDispatchContext = createContext();
// const BooklistNextContext = createContext();

export function BooklistProvider({ children}){
    const [ state, dispatch ] = useReducer( BooklistReducer, initialbooklist);
    // const nextId = useRef(5);
    return (
        <BooklistStateContext.Provider value={state}>
            <BooklistDispatchContext.Provider value={dispatch}>
                {/* <BooklistNextContext.Provider value={nextId}> */}
                    {children}
                {/* </BooklistNextContext.Provider> */}
            </BooklistDispatchContext.Provider>
        </BooklistStateContext.Provider>
    )
}   
export function useBooklistState(){
    return useContext(BooklistStateContext);
}
export function useBooklistDispatch(){
    return useContext(BooklistDispatchContext);
}
// export function useBooklistNextId(){
//     return useContext(BooklistNextContext);
// }
import React from 'react';
import { useBooklistDispatch, useBooklistState } from '../context/BookListContext';

const Book = ({ year }) => {
    const dispatch = useBooklistDispatch();
    const onYearChange = () => dispatch({
        type:'YEAR_BOOKS',
        year:year
    })
    return(
        <li onClick={onYearChange}>{year}년도</li>
    )
}
const Head = () => {
    const { total } = useBooklistState();
    // 1)map메서드를 활용 ['2022','2021','2020','2019'...]
    // 2)new Set - set을 생성(같은 값을 허용하지 않음) {'2022','2021','2020','2019'}
    // 3)스프레드 구문으로 배열로 변경 [...Set]['2022','2021','2020','2019']
    const yearArr = [...new Set(total.map(list => list.year))];
    // console.log(yearArr);
    return (
        <div className='header'>
            <h1>booklist</h1>
            <ul className='btns'>
                {yearArr.map((year,index)=><Book year={year} key={index}/>)}
            </ul>
        </div>
    );
};

export default Head;
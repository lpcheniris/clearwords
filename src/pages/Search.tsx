// import { useState } from 'react';
import styles from './Search.module.css';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {

    queryAsync,
  selectQuery
} from '../redux/reducer/QuerySlice';
import Query from '../components/Query';
import { isEmpty } from '../utils'

export default function Search() {
    // const [word, setWord] = useState()
    const query = useAppSelector(selectQuery);
    const dispatch = useAppDispatch();
    function handleEnter(e: any) {
        if (e.key === "Enter") {
            // setWord(e.target.value)
            dispatch(queryAsync(e.target.value))
        }
    }
    return (
        <div className={styles.searchWrapper}>
            <input type="text" onKeyUp={(e) => handleEnter(e)} />
            <button name='search'>Search</button>
            <button name='collect' >Favorite </button>
            <div>{!isEmpty(query)? <Query data={query}/> : <div>It is not word</div>}</div>
        </div>)
}
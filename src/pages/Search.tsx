import { useState } from 'react';
import styles from './Search.module.css';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
    queryAsync,
    selectQuery,
    favoriteAsync
} from '../redux/reducer/QuerySlice';
import Query from '../components/Query';
import { isEmpty } from '../utils'

export default function Search() {
    const [word, setWord] = useState("")
    const queryData = useAppSelector(selectQuery);
    const dispatch = useAppDispatch();
    function handleEnter(e: any) {
        if (e.key === "Enter") {
            dispatch(queryAsync(e.target.value))
        }
    }
    function handleSearch() {
        dispatch(queryAsync(word))
    }
    function handleFavorite() {
        if(!isEmpty(queryData)){
            dispatch(favoriteAsync(queryData))
        }
       
    }
    function handleInputChange(e:any) {
        setWord(e.target.value)
    }
    return (
        <div className={styles.searchWrapper}>
            <input  type="text" onKeyUp={(e) => handleEnter(e)} onChange={handleInputChange}/>
            <button name='search' onClick={handleSearch}>Search</button>
            <button name='collect' onClick={handleFavorite}>Favorite </button>
            <div>{!isEmpty(queryData) ? <Query data={queryData} /> : <div>It is not word</div>}</div>
        </div>)
}
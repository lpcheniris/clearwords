import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import styles from './Search.module.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {

  incrementAsync,
  selectQuery
} from '../app/reducer/QuerySlice';

export default function Search() {
    const [word, setWord] = useState()
    const query = useAppSelector(selectQuery);
    const dispatch = useAppDispatch();
    function handleEnter(e: any) {
        if (e.key == "Enter") {
            setWord(e.target.value)
            dispatch(incrementAsync(e.target.value))
        }
    }

    return (
        <div className={styles.searchWrapper}>
            <input type="text" onKeyUp={(e) => handleEnter(e)} />
            <button name='search'>Search</button>
            <button name='collect' >Favorite </button>
            <div>{JSON.stringify(query)}</div>
        </div>)
}
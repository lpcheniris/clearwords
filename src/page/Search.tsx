import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import styles from './Search.module.css';
import CryptoJS from 'crypto-js';

export default function Search() {
    const [word, setWord] = useState()
    function handleEnter(e: any) {
        if (e.key == "Enter") {
            setWord(e.target.value)
        }
    }

    return (
        <div className={styles.searchWrapper}>
            <input type="text" onKeyUp={(e) => handleEnter(e)} />
            <button name='search'>Search</button>
            <button name='collect' >Favorite </button>
        </div>)
}
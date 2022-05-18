import React from 'react';
import { render } from 'react-dom';
import styles from './Search.module.css';

export default function Search() {
    return (
        <div className={styles.searchWrapper}>
            <input  type="text" />
            <button name='search'>Search</button>
            <button name='collect'>Favorite </button>
        </div>)
}
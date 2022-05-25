import { useEffect, useState } from 'react';
import styles from './WordList.module.css';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
    selectAllWordList, allWordListAsync, deleteWordListAsync
} from '../redux/reducer/WordListSlice';

import { isEmpty } from '../utils'

export default function WordList() {
    const [word, setWord] = useState("")
    const allWordList = useAppSelector(selectAllWordList);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(allWordListAsync())
    }, [])
    function handleDelete(word: string) {
        dispatch(deleteWordListAsync(word)).then(() => {
            dispatch(allWordListAsync())
        })
    }

    return (
        <div className={styles.WordListWrapper}>
            {allWordList.map((v: any, i: number) =>
                <div className={styles.wordItem} key={i}>
                    <h3>{v.query} </h3>
                    <div className={styles.explains}> {`:  ${v.explains.join(" ")}`}</div>
                    <button onClick={() => handleDelete(v.query)}>Delete</button>
                </div>)}
        </div>
    )
}
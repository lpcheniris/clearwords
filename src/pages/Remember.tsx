import { useEffect, useState } from "react"
import RememberItem from "../components/RememberItem"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { wordListAsync, selectRememberList } from "../redux/reducer/WordsSlice"
import { isEmpty } from "../utils"
import styles from './Remember.module.css'

export default function Remember() {
    const [index, setIndex] = useState(0)
    const dispatch = useAppDispatch()
    const rememberList = useAppSelector(selectRememberList);

    const currentRemember = rememberList[index]
    useEffect(() => {
        console.log("rememberList")
        dispatch(wordListAsync())
    }, [])
    function handleSelectRight() {
        if (index < rememberList.length) {
            console.log(index)
            setIndex(index + 1)
        }
    }
    return <div>
        {currentRemember && !isEmpty(currentRemember) ?
            <RememberItem data={currentRemember} handleSelectRight={handleSelectRight} />
            : (index === rememberList.length &&
                <div className={styles.congratulations} >Congratulations, you have memorized all the words. </div>
            )
        }
    </div>
}

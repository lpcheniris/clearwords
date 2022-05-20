import { useEffect } from "react"
import { useAppDispatch } from "../redux/hooks"
import { wordListAsync } from "../redux/reducer/WordsSlice"

export default function Remember() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(wordListAsync())
    })
    return <div>remember</div>
}
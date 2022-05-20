import styles from './RememberItem.module.css'
import { getAudioUrl } from "../utils"
import { ReactComponent as AudioIcon } from '../assets/audio.svg';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { ReactComponent as WrongIcon }  from '../assets/wrong.svg';
 
import { useEffect, useState } from 'react';

export default function RememberItem(props: any) {
    const data = props.data
    // console.log(data)
    const [isRight, setIsRight] = useState(false)
    const [selectOption, setSelectOption] = useState("")
    const phoneticAudio = new Audio(getAudioUrl(data.word))
    useEffect(() => {
        setSelectOption("")
        // console.log(data)
        if(data&&data.type=="voiceToen") {
            phoneticAudio.play()
        }
    }, [props.data])
    function handleClick() {
        phoneticAudio.play()
    }
    function handleSelect(v: string) {
        setSelectOption(v)

        if(v === data.correct) {
            setIsRight(true)
            setTimeout(() => {
                props.handleSelectRight({query: data.query, status: { [data.type]: true }})
            }, 1000)
        } else {
            setIsRight(false)
        }
    }
    function getSelectStyle(v: string) {
        if (v === data.correct && selectOption === v) {
            return styles.right
        } else if (v !== data.correct && selectOption === v) {
            return styles.wrong
        } else {
            return styles.normalOption
        }
    }
    return <div className={styles.rememberWrapper}>
        {data.type != "voiceToen" ?
            <div className={styles.word}>{data.word}</div> :
            <div onClick={handleClick}><AudioIcon className='icon' />
            </div>}
        <div>
            {data.options.map((v: string, i: number) =>
                <div onClick={() => handleSelect(v)} className={[styles.option, getSelectStyle(v)].join(" ")} key={i}>
                    <div className={styles.optionText}>{v}</div>
                    {selectOption === v ? (v===data.correct ? <CheckIcon className='icon' />: <WrongIcon className='icon' />) : <div />} 
                    </div>
            )}</div>
    </div>
}

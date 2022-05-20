import styles from './Query.module.css'
import { getAudioUrl } from "../utils"
import { ReactComponent as AudioIcon } from '../assets/audio.svg';
export default function Query(props: any) {
    const data = props.data
    console.log(data)
    const phoneticAudio = new Audio(getAudioUrl(data.query))
    function handleClick() {
        phoneticAudio.play()
    }
    return (data.isWord == true ?
        <div className={styles.queryWrapper}>
            <div className={styles.sound}  onClick={handleClick}><AudioIcon className='icon' /> </div>
            <div>/{data.phonetic}/</div>
            <div>{data.translation.concat(" \n ")}</div>
        </div>
        :
        <div>It is not word</div>
    )
}


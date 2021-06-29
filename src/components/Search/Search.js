import React, {useState} from 'react';
import styles from './Search.module.css'
const Search = ({search}) => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onClick = () => {
        search(text)
    }
    return (
        <div className={styles.wrapper}>
            <input type="text" className={styles.searchField} value={text} onChange={onChange}/>
            <button className={styles.btn} onClick={onClick}>Найти</button>
        </div>
    )
}
export default Search
import React from 'react';
import styles from './ChooseDataset.module.css'
const ChooseDataset = ({chooseDataset}) => {
    return (
        <div className={styles.wrapper} onClick={chooseDataset}>
            <h1>Выберете загружаемый датасет</h1>
            <button className={styles.btn} data-size='small'>Маленький</button>
            <button className={styles.btn} data-size='big'>Большой</button>
        </div>
    )
}

export default ChooseDataset
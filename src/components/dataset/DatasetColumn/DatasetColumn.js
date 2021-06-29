import React from 'react';
import styles from './DatasetColumn.module.css'
const DatasetColumn = ({data, ind, sortByCol, ascending}) => {
    const renderArrow = () => {
        if (ascending === null) {
            return ''
        }
        else if (ascending) {
            return (
                <svg width='14px' height='14px'>
                    <polygon points='7,0 0,14 14,14' fill='black'/>
                </svg>
            )

        }
        else {
            return (
                <svg width='14px' height='14px'>
                    <polygon points='0,0 14,0 7,14' fill='black'/>
                </svg>
            )
        }
    }
    const columnName = ['id', 'firstName', 'lastName', 'email', 'phone'];
    return (
        <div className={styles.wrapper}>
            <div>
                <span onClick={() => sortByCol(columnName[ind])}>{columnName[ind]}</span>
                {renderArrow()}
            </div>

            {
                data.map((item, i) => <span key={i}>{item}</span>)
            }
        </div>
    )
}
export default DatasetColumn
import React, {useState} from 'react';
import DatasetColumn from "./DatasetColumn/DatasetColumn";
import styles from './Dataset.module.css'
const Dataset = ({dataset, sortByCol}) => {
    const [ascending, setAscending] = useState(null);

    const newDataset = [[], [], [], [], []];
    for (let item of dataset) {
        newDataset[0].push(item['id']);
        newDataset[1].push(item['firstName']);
        newDataset[2].push(item['lastName']);
        newDataset[3].push(item['email'])
        newDataset[4].push(item['phone'])
    }
    const onClickSort = (columnName) => {
        if (ascending === null) {
            setAscending(true);
        }
        else {
            setAscending(prevState => !prevState);
        }
        sortByCol(columnName, ascending);
    }
    return (
        <div className={styles.wrapper}>

            {
                newDataset.map((data, ind) => <DatasetColumn key={ind} data={data} ind={ind}
                                                             sortByCol={onClickSort}
                                                             ascending={ascending}
                />)
            }
        </div>
    )
}

export default Dataset
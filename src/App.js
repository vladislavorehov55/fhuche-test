import React, {useState} from 'react';
import {SMALL_DATASET, BIG_DATASET} from './constants';
import styles from './App.module.css'
import ChooseDataset from "./components/chooseDataset/ChooseDataset";
import Dataset from "./components/dataset/Dataset";
import Search from "./components/Search/Search";
function App() {
  const [isShownChooseDataset, setIsShownChooseDataset] = useState(true);
  const [dataset, setDataset] = useState([]);
  const [sortedDataset, setSortedDataset] = useState([]);
  const [filteredDataset, setFilteredDataset] = useState([]);


  const chooseDataset = async (e) => {
    let response = '';
    let json = '';
    setIsShownChooseDataset(false);
    if (e.target.dataset.size === 'small') {
      response = await fetch(SMALL_DATASET);
      json = await response.json();
    }
    else {
      response = await fetch(BIG_DATASET);
      json = await response.json();
    }
    setDataset(json)
  }
  const sortByCol = (columnName, ascending) => {
    const newSortedDataset = dataset.slice();
    if (ascending) {
      newSortedDataset.sort((prev, next) => {
        if (prev[columnName] > next[columnName]) return -1;
        else return 1;
      })
    }
    else {
      newSortedDataset.sort((prev, next) => {
        if (prev[columnName] < next[columnName]) return -1;
        else return 1;
      })
    }
    setSortedDataset(newSortedDataset)
  }
  const search = (text) => {
    let newDataset;
    if (sortedDataset.length !== 0) {
      newDataset = sortedDataset.slice();
    }
    else {
      newDataset = dataset.slice();
    }
    newDataset.filter(item => {
      if (item.id.toString().match(text)) return true;
      if (item.firstName.match(text)) return true;
    })
    console.log(newDataset)
  }
  const getRenderedDataset = () => {
    if (sortedDataset.length !== 0) return sortedDataset;
    if (filteredDataset.length !== 0) return filteredDataset;
    if (dataset.length !== 0) return dataset;
  }
  return (
    <div className={styles.app}>
      {
        isShownChooseDataset && <ChooseDataset chooseDataset={chooseDataset}/>
      }
      {
        !isShownChooseDataset && <Search search={search}/>
      }
      {
        dataset.length !== 0 && <Dataset dataset={getRenderedDataset()}
                                         sortByCol={sortByCol}/>
      }
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import {SMALL_DATASET, BIG_DATASET} from './constants';
import './App.css';
import ChooseDataset from "./components/chooseDataset/ChooseDataset";
import Dataset from "./components/dataset/Dataset";
function App() {
  const [isShownChooseDataset, setIsShownChooseDataset] = useState(true);
  const [dataset, setDataset] = useState([]);
  const [sortedDataset, setSortedDataset] = useState([])

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
  return (
    <div className="App">
      {
        isShownChooseDataset && <ChooseDataset chooseDataset={chooseDataset}/>
      }
      {
        dataset.length !== 0 && <Dataset dataset={sortedDataset.length ? sortedDataset : dataset}
                                         sortByCol={sortByCol}/>
      }
    </div>
  );
}

export default App;

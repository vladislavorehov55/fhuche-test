import React from 'react';

const ChooseDataset = ({chooseDataset}) => {
    return (
        <div onClick={chooseDataset}>
            <h1>Выберете загружаемый датасет</h1>
            <button data-size='small'>Маленький</button>
            <button data-size='big'>Большой</button>
        </div>
    )
}

export default ChooseDataset
import React from 'react';
import {useCountContext} from './Context';

const Count = () => {
    const{count, handleCount} = useCountContext()
    return (
        <>
            <h1>{count}</h1>
            <div>
                <button className="btn" onClick={() => handleCount(-1)}>-</button>
                <button className="btn" onClick={() => handleCount(0)}>Reset</button>
                <button className="btn" onClick={() => handleCount(1)}>+</button>
            </div>
        </>
    )
}

export default Count;
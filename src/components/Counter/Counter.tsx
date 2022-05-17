import React from 'react';
import './counter.css'
import {CountType} from "../../App";
type CountProps = {
    addCount:()=>void
    count:CountType
    resetCount:()=>void
}
const Counter = (props:CountProps) => {
    return (
        <div className={'counter'}>
            <div className={'display'}>
                <span className={props.count.value === props.count.max
                    ?'red'
                    :''
                }>{props.count.value}</span>
            </div>
            <div className={'buttons'}>
                <button disabled={props.count.value === props.count.max} onClick={()=>props.addCount()} >add</button>
                <button disabled={props.count.value === props.count.init} onClick={()=> props.resetCount()}>reset</button>
            </div>
        </div>
    );
};

export default Counter;

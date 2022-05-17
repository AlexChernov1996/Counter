import React, {useState} from 'react';
import Counter from './components/Counter/Counter';
import './App.css';
export type CountType = {
    value: number
    init: number
    max: number
}
function App() {
    const [count, setCount] = useState<CountType>({value: 0, init: 0, max: 5})
    const addCount = () => {
        setCount({value: count.value+1, init: count.init,max: count.max})
    }
    const resetCount = () => {
        setCount({value: count.init, init: count.init,max: count.max})
    }
    return (
        <div className="App">
            <Counter addCount={addCount} count={count} resetCount={resetCount}/>
        </div>
    );
}

export default App;

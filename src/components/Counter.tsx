import styles from './Counter.module.css';
import { ChangeEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from '../features/counter/counterSlice';
export const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount) || 0;
    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());
    const handleAddAmount = () => dispatch(incrementByAmount(incrementValue));
    const handleAddAsync = () => dispatch(incrementAsync(incrementValue));
    const handleAddIfOdd = () => dispatch(incrementIfOdd(incrementValue));
    const handleInputChange = (e: ChangeEvent) => {
        const el: HTMLInputElement = e?.target as HTMLInputElement;
        if (el) {
            setIncrementAmount(el.value);
        }
    };
    return (
        <div>
            <div className={styles.row}>
                <button className={styles.button} aria-label="Decrement value" onClick={handleDecrement}>-</button>
                <span className={styles.value}>{count}</span>
                <button className={styles.button} aria-label="Increment value" onClick={handleIncrement}>+</button>
            </div>
            <div className={styles.row}>
                <input className={styles.textbox} aria-label="Set increment amount" value={incrementAmount} onChange={handleInputChange} />
                <button className={styles.button} onClick={handleAddAmount}>Add Amount</button>
                <button className={styles.asyncButton} onClick={handleAddAsync}>Add Async</button>
                <button className={styles.button} onClick={handleAddIfOdd}>Add If Odd</button>
            </div>
        </div>
    );
}

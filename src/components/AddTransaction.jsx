import React, {useState, useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    // @ts-ignore
    const {addTransaction} = useContext(GlobalContext);

    // @ts-ignore
    const onSubmit = input => {
        input.preventDefault();

        const newTransaction = {
            id: Math.floor (Math.random() * 100000000),
            text,
            amount
        }
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(input) => setText(input.target.value)} placeholder='Enter text...'/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)</label>
                    <input type="number"  value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder='Enter amount...'/>
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    );
}

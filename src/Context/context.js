import React , { useReducer , createContext} from "react";

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount": 100,
    "category": "Extra",
    "date": "2021-09-13",
    "id": "88522f27-5ae9-4187-aec8-3788b784c47b",
    "type": "Income"},
    {"amount":100,"category":"Other","type":"Expense","date":"2021-09-13","id":"252c5568-7929-42df-84af-3cad25b491cf"}
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ( { children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    // Action Creators 
    const deleteTransaction = ( id ) => {
        dispatch({ type:'DELETE_TRANSACTION', payload: id});

    }

    const addTransaction = ( transaction) => {
        dispatch({ type:'ADD_TRANSACTION', payload: transaction})
    }

    // console.log("Context_Transaction",transactions);

    const balance = transactions.reduce( (acc , currVal) => {
        return (currVal.type === "Expense" ? acc-currVal.amount : acc + currVal.amount)
        
    } , 0 );
    return(
        <ExpenseTrackerContext.Provider value ={{ 
            deleteTransaction ,
            addTransaction, 
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
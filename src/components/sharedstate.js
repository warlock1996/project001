import React, { useReducer } from "react";
import Reducer from "./reducer"

// some inital state for the context
const initalState = {
    transactions: [
        { id: 1, name: 'Income one', amount: 8000 },
        { id: 2, name: 'Income two', amount: 5000 }
    ]
}

// creating global context
export const GlobalContext = React.createContext(initalState)

// creating a wrapping global provider
export const GlobalProvider = (props) => {

    // creating a reducer
    const [state, dispatch] = useReducer(Reducer, initalState)
    
    return (
        <GlobalContext.Provider value = {
            {
                transactions: state.transactions,
                dispatcher: dispatch
            }
         }>
                { props.children }
        </GlobalContext.Provider>
    )
}
import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }){

    const [gainList, setGainList] = useState([
        {
            id: 0,
            month: 'November',
            label: 'Salary',
            value: '3000'
        },
        {
            id: 1,
            month: 'November',
            label: 'Sells',
            value: '500'
        },
        {
            id: 2,
            month: 'November',
            label: 'Gifts',
            value: '100'
        }
    ])

    const [expenseList, setExpenseList] = useState([
        {
            id: 0,
            month: 'November',
            label: 'Rent',
            value: '1200'
        },
        {
            id: 1,
            month: 'November',
            label: 'Food',
            value: '500'
        },
        {
            id: 2,
            month: 'November',
            label: 'Transportation',
            value: '200'
        }
    ])

    const [totalGainGlobal, setTotalGainGlobal] = useState()

    const [totalExpenseGlobal, setTotalExpenseGlobal] = useState()

    return (
        <AuthContext.Provider value={{gainList, setGainList, expenseList, setExpenseList, totalGainGlobal, setTotalGainGlobal, totalExpenseGlobal, setTotalExpenseGlobal}}>
            {children}
        </AuthContext.Provider>
    )
}
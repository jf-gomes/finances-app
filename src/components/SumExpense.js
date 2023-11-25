import { useState, useContext } from 'react'
import { Text, StyleSheet } from 'react-native'

import { AuthContext } from '../contexts/auth'

export default function SumExpense(props){

    const {setTotalExpenseGlobal} = useContext(AuthContext)

    let totalExpense = 0
    props.obj.map((e) => {
        if (e.month == props.month){
            totalExpense += Number(e.value)
        }
    })
    setTotalExpenseGlobal(totalExpense)

    return (
        <>
            <Text style={styles.txt}>Total expenses</Text>
            <Text style={styles.txt}>{totalExpense}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 15,
        textAlign: 'center'
    }
})
import { useState, useContext } from 'react'
import { Text, StyleSheet } from 'react-native'

import { AuthContext } from '../contexts/auth'

export default function SumGain(props){

    const {setTotalGainGlobal} = useContext(AuthContext)

    let totalGain = 0
    props.obj.map((e) => {
        if (e.month == props.month){
            totalGain += Number(e.value)
        }
    })
    setTotalGainGlobal(totalGain)

    return (
        <>
            <Text style={styles.txt}>Total gains</Text>
            <Text style={styles.txt}>{totalGain}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 15,
        textAlign: 'center'
    }
})
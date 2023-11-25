import { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Switch } from 'react-native'

import { AuthContext } from '../contexts/auth'

export default function HomeScreen({ navigation }){

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Add gain')}>
                <Text style={styles.btnText}>Add Gain</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Add expense')}>
                <Text style={styles.btnText}>Add Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGeneral} onPress={() => navigation.navigate('General')}>
                <Text style={styles.btnText}>General</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C4732',
    },
    btn: {
        backgroundColor: '#04E034',
        padding: 8,
        width: '75%',
        margin: 8,
        borderRadius: 8
    },
    btnGeneral: {
        backgroundColor: '#04E0CA',
        padding: 8,
        width: '75%',
        margin: 8,
        borderRadius: 8
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})
import { useState, useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';

import { AuthContext } from '../contexts/auth'

import SumGain from '../components/SumGain';
import SumExpense from '../components/SumExpense';

export default function GeneralScreen(){

    const {gainList} = useContext(AuthContext)
    const {expenseList} = useContext(AuthContext)

    const [gainListToRender, setGainListToRender] = useState([])
    const [expenseListToRender, setExpenseListToRender] = useState([])

    //Month dropdown list settings
    const [openMonth, setOpenMonth] = useState(false);
    const [valueMonth, setValueMonth] = useState(null);
    const [itemsMonth, setItemsMonth] = useState([
        {
            label: 'January',
            value: 'January'
        },
        {
            label: 'February',
            value: 'February'
        },
        {
            label: 'March',
            value: 'March'
        },
        {
            label: 'April',
            value: 'April'
        },
        {
            label: 'May',
            value: 'May'
        },
        {
            label: 'June',
            value: 'June'
        },
        {
            label: 'July',
            value: 'July'
        },
        {
            label: 'August',
            value: 'August'
        },
        {
            label: 'September',
            value: 'September'
        },
        {
            label: 'October',
            value: 'October'
        },
        {
            label: 'November',
            value: 'November'
        },
        {
            label: 'December',
            value: 'December'
        }
    ]);

    const {totalGainGlobal} = useContext(AuthContext)
    const {totalExpenseGlobal} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.listsContainer}>
                <View style={styles.listsContainerItems}>
                    <View style={styles.list}>
                        <Text style={gainListToRender.length > 0 ? {display: 'none'} : {textAlign: 'center', color: 'grey'}}>{gainListToRender.length == 0 ? 'No items to show' : null}</Text>
                        <FlatList
                            data={gainListToRender}
                            renderItem={({item}) => (
                                <Text style={styles.listItem}>{item.label}: {item.value}</Text>
                            )}
                        />
                    </View>
                    <View style={styles.list}>
                        <Text style={expenseListToRender.length > 0 ? {display: 'none'} : {textAlign: 'center', color: 'grey'}}>{expenseListToRender.length == 0 ? 'No items to show' : null}</Text>
                        <FlatList
                            data={expenseListToRender}
                            renderItem={({item}) => (
                                <Text style={styles.listItem}>{item.label}: {item.value}</Text>
                            )}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.totals}>
                <SumGain obj={gainList} month={valueMonth} />
                <SumExpense obj={expenseList} month={valueMonth} />
                <Text style={{fontSize: 15, textAlign: 'center'}}>Balance</Text>
                <Text style={{fontSize: 15, textAlign: 'center'}}>{totalGainGlobal == 0 && totalExpenseGlobal == 0 ? 0 : totalGainGlobal - totalExpenseGlobal}</Text>
            </View>
            <DropDownPicker
                style={{marginTop: 200, borderColor: 'transparent'}}
                open={openMonth}
                value={valueMonth}
                items={itemsMonth}
                setOpen={setOpenMonth}
                setValue={setValueMonth}
                setItems={setItemsMonth}
                dropDownDirection='TOP'
                placeholder='Select a month'
                onChangeValue={() => {
                    let newListGain = gainList.filter((e) => e.month == valueMonth)
                    setGainListToRender(newListGain)
                    let newListExpense = expenseList.filter((e) => e.month == valueMonth)
                    setExpenseListToRender(newListExpense)
                }}
                dropDownContainerStyle={{borderColor: 'transparent'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C4732',
        alignItems: 'center',
        justifyContent: 'center'

    },
    listsContainer: {
        flexDirection: 'row',
    },
    listsContainerItems: {
        flexDirection: 'row',
        gap: 60
    },
    list: {
        backgroundColor: 'white',
        
        width: 150,
        borderRadius: 8,
        maxHeight: 200,
        minHeight: 200,
        borderStyle: 'solid',
        borderColor: '#20F52E',
        borderWidth: 1,
        marginTop: 20
    },
    listItem: {
        fontSize: 15,
        textAlign: 'center',
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 8,
        margin: 2
    },
    totals: {
        backgroundColor: 'white',
        padding: 8,
        width: 150,
        borderRadius: 8,
        maxHeight: 200,
        width: '75%',
        borderStyle: 'solid',
        borderColor: '#20F52E',
        borderWidth: 1,
        marginTop: 20
    }
})
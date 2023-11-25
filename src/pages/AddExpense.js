import { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';

import { AuthContext } from '../contexts/auth'

export default function AddExpenseScreen(){

    //Type dropdown list settings
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: 'Rent',
            value: 'Rent'
        },
        {
            label: 'Transportation',
            value: 'Transportation'
        },
        {
            label: 'Food',
            value: 'Food'
        },
        {
            label: 'Medical expenses',
            value: 'Medical expenses'
        }
    ]);

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

    //Modal
    const [modalVisible, setModalVisible] = useState(false)
    const [addNewType, setAddNewType] = useState()

    const [financialValue, setFinancialValue] = useState()

    //Global variable
    const {expenseList, setExpenseList} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.pickers}>
                <DropDownPicker
                    style={styles.typePicker}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder='Select a type'
                    dropDownContainerStyle={styles.typeDropDownContainer}
                    dropDownDirection='BOTTOM'
                />
                <DropDownPicker
                    style={styles.monthPicker}
                    open={openMonth}
                    value={valueMonth}
                    items={itemsMonth}
                    setOpen={setOpenMonth}
                    setValue={setValueMonth}
                    setItems={setItemsMonth}
                    placeholder='Select a month'
                    dropDownContainerStyle={{width: '75%', borderColor: 'transparent'}}
                    dropDownDirection='BOTTOM'
                />
            </View>
            <TextInput 
                style={styles.valueInput}
                keyboardType='numeric'
                value={financialValue}
                onChangeText={(e) => setFinancialValue(e)}
                placeholder='Type a value'
            />
            <TouchableOpacity style={styles.addBtn} onPress={() => {
                let newList = expenseList
                newList.push({
                    id: newList.length + 1,
                    month: valueMonth,
                    label: value,
                    value: financialValue
                })
                setExpenseList(newList)
                setFinancialValue('')
            }}>
                <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addTypesBtn} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.btnText}>Add more types</Text>
            </TouchableOpacity>
            <Modal transparent={true} visible={modalVisible}>
                <View style={styles.modal}>
                    <TextInput 
                        style={styles.modalInput}
                        value={addNewType}
                        onChangeText={(e) => setAddNewType(e)}
                        placeholder='Type to add'
                    />
                    <TouchableOpacity style={styles.addTypesModalBtn} onPress={() => {
                        let newList = items
                        newList.push({
                            label: addNewType,
                            value: addNewType
                        })
                        setItems(newList)
                        setAddNewType('')
                    }}>
                        <Text style={styles.btnText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeModalBtn} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.btnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2C4732'
    },
    typePicker: {
        width: '75%',
        marginBottom: 200,
        marginTop: 20,
        borderColor: 'transparent'
    },
    monthPicker: {
        width: '75%',
        marginBottom: 50,
        borderColor: 'transparent'
    },
    modal: {
        backgroundColor: '#2C4732',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    valueInput: {
        backgroundColor: '#fff',
        width: '75%',
        fontSize: 20,
        color: 'black',
        padding: 8,
        borderRadius: 8,
        textAlign: 'center',
    },
    addBtn: {
        backgroundColor: '#04E034',
        padding: 8,
        width: '75%',
        margin: 8,
        borderRadius: 8
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    addTypesBtn: {
        backgroundColor: '#04E0CA',
        padding: 8,
        width: '75%',
        margin: 8,
        borderRadius: 8
    },
    typeDropDownContainer: {
        marginTop: 20,
        width: '75%',
        borderColor: 'transparent'
    },
    addTypesModalBtn: {
        backgroundColor: '#04E034',
        padding: 8,
        width: '75%',
        margin: 8,
        borderRadius: 8
    },
    addTypesModalBtnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    closeModalBtn: {
        backgroundColor: '#04E0CA',
        padding: 8,
        width: '75%',
        margin: 8,
        borderRadius: 8
    },
    modalInput: {
        backgroundColor: '#fff',
        width: '75%',
        fontSize: 20,
        color: 'black',
        padding: 8,
        borderRadius: 8,
        textAlign: 'center',
    }
})
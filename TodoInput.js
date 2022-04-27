//import React from 'react'
import { useState } from 'react'
import { TextInput, Button, StyleSheet, View } from 'react-native'

const TodoInput = ({ onAddItem }) =>
{
    const [item, setItem] = useState('');

    const onChangeTextHandler = ( input )=>
    {
        setItem(input)
    }

    const onAdd = () =>
    {
        onAddItem(item)
        setItem('')
        hide()
    }
    return 
    {
        //  Modal visible={false}
        <Modal 
            visible={false}
            animationType="slide"
        >
            <View styles={styles.inputContainer}>
                <TextInput
                    placeHolder = 'TODO Item'
                    style = { styles.textInput }
                    onChangeText = {onChangeTextHandler}
                    value = {item}
                />
                <Button
                    title = 'ADD'
                    onPress = {onAdd}
                />
            </View>
        </Modal>
    }
}

const styles = StyleSheet.create
(
    {
        inputContainer:
        {
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems:'center'
        },

        textInput:
        {
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            width: '80%'
        }
    }
)

export default TodoInput

/**import TodoInput from './components/TodoInput'; 
 * import TodoListItem from './components/TodoListItem';
 * //JSX en App.js
 * export default function App()
 * {
 *      const [items, setItems] = useState ([]);
 *      const [showModal, setShowModal] = useState(false);
 * 
 *      const addItem = (item) =>
        * {
        *      setItems([...items, { key: Math.random().toString(), value:item}])
        * }
        * 
        * 
        * const removeItem = (id) =>
        * {
        *      // iteración de la lista de items
        *      setItems(currentITems) =>
        *      {
        *          return items
        *            .filter((item) => item.key !== id)
        *          // de items filtra los que su key NO es el del id. Para ni tener dos items con el mismo key.
        *      }
        * }
        * 
        * const hideModal = {} => setShowModal(false);
        * 
        * return
        * (
        *    <View style={styles.container}>
        *    <Button title = 'Add New Goal' onPress{() => setShowModal=true}
         *    <TodoInput onAddItem={addItem} visible={showModal} hide={hideModal}/>
            * <FlatList
            *      data={items}
            *      renderItem={i => 
            *      (
            *          <TodoListItem
            *              item={i}
            *              onRemoveITem={removeItem}
            *          />
            *      )}
            *  />
            * </View>
             
         );
 * }
 * 
 */

/**
 const TodoListItem = ({ item, onRemoveItem }) =>
 {
     const {item: item2} = item;
     const onremove = () =>
     {
         onRemoveItem(item2.key)
     }

     return 
     (
         <TouchableOpacity activeOpacity = {.8} onPress={onRemove} >
            <View key={item.key} style={styles.listItems}>
                <Text>{item.item.value}</Text>
            </View>
        >/TouchableOpacity
     )
 }

 const styles = StyleSheet.create
 (
     {
         listItems: 
         {
             padding: 10,
             margin: 5,
             backgroundColor: 'grey',
             borderColor: 'black',
             borderWidth: 1
         }
     }
 )

 export default TodoListItem

 */
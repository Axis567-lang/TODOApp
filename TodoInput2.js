import TodoInput from './components/TodoInput'; 
import TodoListItem from './components/TodoListItem';
 //JSX en App.js
 export default function App()
 {
      const [items, setItems] = useState ([]);
      const [showModal, setShowModal] = useState(false);
 
      const addItem = (item) =>
        {
             setItems([...items, { key: Math.random().toString(), value:item}])
        }
        
        
        const removeItem = (id) =>
        {
             // iteración de la lista de items
             setItems(currentITems) =>
             {
                 return items
                   .filter((item) => item.key !== id)
                 // de items filtra los que su key NO es el del id. Para ni tener dos items con el mismo key.
             }
        }
        
        const hideModal = () => setShowModal(false);
        
        return
        (
           <View style={styles.container}>
           <Button title = 'Add New Goal' onPress() => {setShowModal=true}
            <TodoInput onAddItem={addItem} visible={showModal} hide={hideModal}/>
            <FlatList
                 data={items}
                 renderItem={i => 
                 (
                     <TodoListItem
                         item={i}
                         onRemoveITem={removeItem}
                    />
                 )}
             />
            </View>
             
         );
 }
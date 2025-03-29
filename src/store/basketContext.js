import { useState ,createContext } from "react";


export const basketContext = createContext({items: [] });

export const BasketContextProvider = ({children}) => {
    const [items, setItems] = useState([]); 

    const addToBasket = (newItem) => {
        const copyOfItems = [...items];
        const existingItem = copyOfItems.find((item) => item.id === newItem.id);
        if(existingItem) {
            existingItem.amount = newItem.amount + existingItem.amount;
        } else {
            copyOfItems.push(newItem)
        }
      
        setItems(copyOfItems)
    }

    const incremetFoodAmount = (id) => {
        const copyOfItems = [...items]
        const existingFood = copyOfItems.find((item) => item.id == id)
        existingFood.amount++;
        setItems(copyOfItems)
    };

    const decrementFoodAmount = (id) => { 
        const copyOfItems = [...items] 
        const existingFood = copyOfItems.find((item) => item.id == id)
        if(existingFood.amount === 1) {
            const filteredFoods = copyOfItems.filter((item) => item.id !== existingFood.id);
            setItems(filteredFoods);
            return;
        } else {
            existingFood.amount--
        }
       setItems(copyOfItems)
    }
    return <basketContext.Provider 
    value={{
        items: items,
         onAdd: addToBasket,
         onAddByOne: incremetFoodAmount,
         onRemoveByOne: decrementFoodAmount,
         }}>
        {children}
    </basketContext.Provider>
}

import React, { useState } from 'react';
import Food from './Food';
import Order from './Order'
import Breakfast from '../data/breakfast.json';
import Lunch from '../data/lunch.json';
import Tables from '../data/tables.json';

function Waiter() {
    const [orderFood, setOrderFood] = useState([]);
    const onAddOrder = (food) => {
        const foodExist = orderFood.find(f => f.id === food.id);
        if (foodExist) {
            setOrderFood(
                orderFood.map(f =>
                    f.id === food.id ? { ...foodExist, qty: foodExist.qty + 1 } : f
                )
            )
        } else {
            setOrderFood([...orderFood, { ...food, qty: 1 }]);
        }
    }
    const onRemoveFood = (food) => {
        const foodExist = orderFood.find(f => f.id === food.id);
        if (foodExist.qty === 1) {
            setOrderFood(
                orderFood.filter(f => f.id !== food.id)
            )
        } else {
            setOrderFood(
                orderFood.map(f =>
                    f.id === food.id ? { ...foodExist, qty: foodExist.qty - 1 } : f)
            )
        }
    }

// ********************   INTENTO DE PASAR LA MESA **************
    const [dataTables, setDataTables] = useState([]);
    const numberTable = (table) => {
        const tableSelect = dataTables.find(t => t.number === table.number);
        if (tableSelect) {
            setDataTables(
                dataTables.map(t =>
                    t.number === table.number ? { ...tableSelect } : t.number
                )
            )
        } else {
            setDataTables([...dataTables])
        }
    }
// ********************  FIN INTENTO DE PASAR LA MESA **************

    return (
        <main>
            <Food numberTable={numberTable} tables={Tables} onAddOrder={onAddOrder} foodB={Breakfast} foodL={Lunch} />
            <Order dataTables={dataTables} onAddOrder={onAddOrder} onRemoveFood={onRemoveFood} orderFood={orderFood} />
        </main>
    )
}

export default Waiter;
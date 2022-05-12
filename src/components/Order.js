import React from 'react';
import { Table, Button } from 'reactstrap';

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Ud.</th>
                <th>Orden</th>
                <th>Precio</th>
                <th>Agregar</th>
                <th>Eliminar</th>

            </tr>
        </thead>
    );
}

function TableBody(props) {
    const { onAddOrder, onRemoveFood, orderFood } = props;
    return (
        <tbody>
            <tr>{orderFood.length === 0 && <th>Agrega algo del menú.</th>}</tr>
            {orderFood.map(item => (
                <tr key={item.id}>
                    <td>{item.qty}</td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)} c/u</td>
                    <td>
                        <Button onClick={() => onAddOrder(item)} className='add'>+</Button>
                    </td>
                    <td>
                        <Button onClick={() => onRemoveFood(item)} className='remove danger' close />
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

function TableFoot(props) {
    const { orderFood } = props;
    const totalPrice = orderFood.reduce((a, b) => a + b.price * b.qty, 0);
    return (
        <tfoot>
            {orderFood.length !== 0 && (
                <tr>
                    <th></th>
                    <th className='fw-bold'>TOTAL:</th>
                    <th>${totalPrice.toFixed(2)}</th>
                </tr>
            )}
        </tfoot>
    )
}

function Order(props) {
    const { onAddOrder, onRemoveFood, orderFood } = props;
    return (
        <Table hover responsive className='table-info'>
            <TableHeader />
            <TableBody onAddOrder={onAddOrder} onRemoveFood={onRemoveFood} orderFood={orderFood} />
            <TableFoot orderFood={orderFood} />
        </Table>
    )
}

export default Order;
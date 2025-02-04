import React from 'react';
import { Table, Button } from 'reactstrap';

function TableHeader(props) {
    const {dataTables} = props;
    return (
        <thead>
            <tr>
                <th>Ud.</th>
                <th>Mesa{dataTables[0]}</th>
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
            <tr>{orderFood.length === 0 && <th>Agrega un producto del menú.</th>}</tr>
            {orderFood.map(item => (
                <tr key={item.id}>
                    <td>{item.qty}</td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)} c/u</td>
                    <td>
                        <Button onClick={() => onAddOrder(item)} color="warning">+</Button>
                    </td>
                    <td>
                        <Button onClick={() => onRemoveFood(item)} close />
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

function TableFoot(props) {
    const { orderFood } = props;
    const totalFoods = orderFood.reduce((a, b) => a + b.qty, 0);
    const totalPrice = orderFood.reduce((a, b) => a + b.price * b.qty, 0);
    return (
        <tfoot>
            {orderFood.length !== 0 && (
                <tr>
                    <th>{totalFoods} prod.</th>
                    <th>TOTAL A PAGAR:</th>
                    <th>${totalPrice.toFixed(2)}</th>
                    <th>
                        <Button onClick={() => alert('La boleta se esta imprimiento.')} color="dark">PAGAR</Button>
                    </th>
                    <th>
                        <Button onClick={() => alert('Orden enviada a la cocina.')} color="primary">ENVIAR</Button>
                    </th>
                </tr>
            )}
        </tfoot>
    )
}

function Order(props) {
    const { dataTables, onAddOrder, onRemoveFood, orderFood } = props;
    return (
        <Table hover responsive className='table-warning'>
            <TableHeader dataTables={dataTables} />
            <TableBody onAddOrder={onAddOrder} onRemoveFood={onRemoveFood} orderFood={orderFood} />
            <TableFoot orderFood={orderFood} />
        </Table>
    )
}

export default Order;
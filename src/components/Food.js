import React from 'react';
import { FormGroup, Label, Input, Button, UncontrolledCollapse } from 'reactstrap';

function Food(props) {
    const { numberTable, tables, onAddOrder, foodB, foodL } = props;
    return (
        <div container>
            <FormGroup>
                <Label className='text-white' for="exampleSelect">
                    MESA:
                </Label>
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option selected value="all">Seleccionar</option>
                    {tables.map(table => (
                        <option onClick={() => numberTable(table)}>{table.number}</option>
                    ))}
                </Input>
            </FormGroup>
            <div>
                <Button color="info" outline id='toggler' style={{ marginBottom: '1rem' }}>
                    DESAYUNO
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    {
                        foodB && foodB.map(order => {
                            return (
                                <Button onClick={() => onAddOrder(order)} color='success' key={order.id}>
                                    <p>{order.name}</p>
                                    <p>${order.price.toFixed(2)}</p>
                                </Button>
                            )
                        })
                    }
                </UncontrolledCollapse>
            </div>
            <div>
                <Button color="info" outline id='toggler2' style={{ marginBottom: '1rem' }}>
                    ALMUERZO
                </Button>
                <UncontrolledCollapse toggler="#toggler2">
                    {
                        foodL && foodL.map(order => {
                            return (
                                <Button onClick={() => onAddOrder(order)} color='success' key={order.id}>
                                    <p>{order.name}</p>
                                    <p>${order.price}</p>
                                </Button>
                            )
                        })
                    }
                    {
                        foodL && foodL.map(order => {
                            return (
                                order.burger && order.burger.map(burger => {
                                    return (
                                        <Button onClick={() => onAddOrder(burger)} color='success' key={burger.id}>
                                            <p>{burger.name}</p>
                                            <p>${burger.price}</p>
                                        </Button>
                                    )
                                })
                            )
                        })
                    }
                </UncontrolledCollapse>
            </div>
        </div>
    )
}

export default Food;
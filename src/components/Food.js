import React from 'react';
import { FormGroup, Label, Input, Button, UncontrolledCollapse } from 'reactstrap';

function Food(props) {
    const { numberTable, tables, onAddOrder, foodB, foodL } = props;
    return (
        <div container>
            <div className='submenu'>
                <FormGroup className='submenu_mesa'>
                    <Label className='text-white' for="exampleSelect">
                        MESA:
                    </Label>
                    <Input className='submenu_mesa_input'
                        id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option selected value="all">Selec.</option>
                        {tables.map(table => (
                            <option onClick={() => numberTable(table)} key={table.number}>{table.number}</option>
                        ))}
                    </Input>
                </FormGroup>
                <Button color="danger" outline id='toggler' style={{ marginBottom: '1rem' }}>
                    DESAYUNO
                </Button>
                <Button color="danger" outline id='toggler2' style={{ marginBottom: '1rem' }}>
                    ALMUERZO & CENA
                </Button>

            </div>
            <div>
                <UncontrolledCollapse className='foods' toggler="#toggler">
                    {
                        foodB && foodB.map(order => {
                            return (
                                <Button className='foods_btn' onClick={() => onAddOrder(order)} color='warning' key={order.id}>
                                    <p>{order.name}</p>
                                    <p>${order.price.toFixed(2)}</p>
                                </Button>
                            )
                        })
                    }
                </UncontrolledCollapse>
                <UncontrolledCollapse className='foods' toggler="#toggler2">
                    {
                        foodL && foodL.map(order => {
                            return (
                                <Button className='foods_btn' onClick={() => onAddOrder(order)} color='warning' key={order.id}>
                                    <p>{order.name}</p>
                                    <p>${order.price}</p>
                                </Button>
                            )
                        })
                    }
                </UncontrolledCollapse>
            </div>
        </div>
    )
}

export default Food;
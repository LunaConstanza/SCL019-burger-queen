import React from 'react';
import Breakfast from '../data/breakfast.json';
import Lunch from '../data/lunch.json'
import Order from './Order'
import { Button, UncontrolledCollapse } from 'reactstrap';

function Waiter() {
    return (
        <div className='container'>
            {/* {this.props.numero} */}
            <div>
                <div>
                    <Button color="info" outline id='toggler' style={{ marginBottom: '1rem' }}>
                        DESAYUNO
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        {
                            Breakfast && Breakfast.map(order => {
                                return (
                                    <Button color='success' key={order.id}>
                                        <p>{order.name}</p>
                                        <p>{order.price}</p>
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
                            Lunch && Lunch.map(order => {
                                return (
                                    <Button color='success' key={order.id}>
                                        <p>{order.name}</p>
                                        <p>{order.price}</p>
                                    </Button>
                                )
                            })
                        }
                        {
                            Lunch && Lunch.map(order => {
                                return (
                                    order.burger && order.burger.map(burger => {
                                        return (
                                            <Button color='success' key={burger.id}>
                                                <p>{burger.name}</p>
                                                <p>{burger.price}</p>
                                            </Button>
                                        )
                                    })
                                )
                            })
                        }
                    </UncontrolledCollapse>
                </div>
            </div>
            <div>
                <Order />
            </div>
        </div >
    )
}

export default Waiter;
import { Table } from 'reactstrap';

function TableHeader () {
    return (
        <thead>
            <tr className='table-warning'>
                <th>Food</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}

function Order() {
return (
    <Table hover className='table-warning'>
        <TableHeader />
        <p>Aquí se iran agregando las ordenes.</p>
    </Table>
)
}

export default Order;
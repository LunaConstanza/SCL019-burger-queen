import React from 'react';


function Waiter() {
    // onMenu = () => {
    //     // Mostrar el menu segun boton que clickea (reutilizar funcion)
    //     // especificar con if else lo que se debe mostrar
    // }

        return (
            <div>
                {/* {this.props.numero} */}
                <button type="button" class="btn btn-outline-info">DESAYUNO</button>
                <button type="button" class="btn btn-outline-info">ALMUERZO</button>
            </div>
        )
}
export default Waiter;
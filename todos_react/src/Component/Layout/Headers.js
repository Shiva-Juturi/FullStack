import React from 'react';

function Headers() {
    return (
        <header style={Headerstyle}>
            <h1>
                Todo List
            </h1>

        </header>

    )
}

const Headerstyle = {

    background: '#333',
    color: '#ffff',
    padding: '10px',
    textAllign: 'center'


}

export default Headers;
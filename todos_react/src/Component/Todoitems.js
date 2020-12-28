import react, { Component } from 'react';

import propTypes from 'prop-types';

class Todoitems extends Component {
    getStyle = () => {

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderbottom: '1px #ccc dotted',


            textDecoration: this.props.todo.Status ? 'line-through' : 'none'
        }

    }



    render() {

        return (

            <div style={this.getStyle()}>


                <p>
                    <input type="checkbox" onChange={this.props.MarkCompleted.bind(this, this.props.todo.id)}></input> {' '}

                    {this.props.todo.title}
                    <button onClick={this.props.delTodos.bind(this, this.props.todo.id)} style={butStyle}> X</button>

                </p>

            </div>
        )


    }
}
Todoitems.propTypes = {

    todo: propTypes.object.isRequired
}


const butStyle = {

    background: '#ff0000',
    color: '#ffF',
    border: 'none',
    padding: ' 5px 10px ',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'





}

export default Todoitems;

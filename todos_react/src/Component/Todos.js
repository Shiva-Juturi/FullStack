import react, { Component } from 'react';

import Todoitems from './Todoitems'

import propTypes from 'prop-types';


class Todos extends Component {




    render() {

        return this.props.todos.map((todo) => (

            //  <h3> { todo.title} </h3> */

            <Todoitems key={todo.id} todo={todo} MarkCompleted={this.props.MarkCompleted} delTodos={this.props.delTodos} />

        ));

    }
}
Todos.propTypes = {

    todos: propTypes.array.isRequired
}



export default Todos;

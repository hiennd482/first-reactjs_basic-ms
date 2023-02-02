import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';


todoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};
todoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};
function todoList(props) {
    const { todoList, onTodoClick } = props;
    const handletodoClick = (todo, idx) => {
        if (!onTodoClick)
            return;
        else
            onTodoClick(todo, idx);
    }
    return (
        <div>
            <ul className='todol'>
                {todoList.map((todo, idx) => (
                    <li key={todo.id}
                        className={classNames({
                            'todo-item': true,
                            completed: todo.status === 'completed'
                        })}
                        onClick={() => handletodoClick(todo, idx)}>{todo.name}</li>
                ))}

            </ul>
        </div>
    );
}

export default todoList;
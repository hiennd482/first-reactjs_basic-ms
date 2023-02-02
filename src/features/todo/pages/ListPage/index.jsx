import React, { useState } from 'react';
import Todo from '../../components/todolist';


const Todofeatures = (props) => {
    const inittodolist = [
        {
            id: 1,
            name: 'dsdfsdfsadfsdf',
            status: 'new'
        },
        {
            id: 2,
            name: 'alo',
            status: 'completed'
        },
        {
            id: 3,
            name: 'xin chào',
            status: 'new'
        }
    ];
    const [todoList, setTodoList] = useState(inittodolist);
    const [filterStt, setFilter] = useState('all');
    const handletodoClick = (todo, idx) => {
        //clone current array
        const newTodolist = [...todoList];
        console.log(todo, idx);
        //toggle the state
        newTodolist[idx] = {
            ...newTodolist[idx],
            status: newTodolist[idx].status === 'new' ? 'completed' : 'new'
        }
        //update the state
        setTodoList(newTodolist);
    }
    const handleshowAll = () => {
        setFilter('all');
    }
    const handleshowCompleted = () => {
        setFilter('completed');

    }
    const handleshowNew = () => {
        setFilter('new');
    }
    const rendered = todoList.filter(todo => filterStt === 'all' || filterStt === todo.status);
    console.log(rendered);
    return (
        <div>
            <h3>xib chao</h3>
            <Todo todoList={rendered} onTodoClick={handletodoClick}></Todo>
            <div>
                <button onClick={handleshowAll}>show all</button>
                <button onClick={handleshowCompleted}>completed</button>
                <button onClick={handleshowNew}>new</button>
            </div>
        </div>
    );
};

export default Todofeatures;
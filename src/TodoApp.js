import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddTodo = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: '#ecf0f1', minHeight: '100vh' }}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4" style={{ color: '#3498db' }}>To-Do List</h1>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="Add a new task"/>
                                <div className="input-group-append">
                                    <button
                                        onClick={handleAddTodo}
                                        className="btn btn-success"
                                        type="button"
                                        style={{ backgroundColor: '#2ecc71', border: 'none' }}>
                                        Add
                                    </button>
                                </div>
                            </div>
                            <ul className="list-group">
                                {todos.map((todo, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        {todo}
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteTodo(index)}
                                            style={{ backgroundColor: '#e74c3c', border: 'none', marginLeft: '5px' }}>
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TodoApp;

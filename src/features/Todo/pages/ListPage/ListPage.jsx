import React from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';

ListPage.propTypes = {};

function ListPage({ todoList }) {
  const handleTodoFormSubmit = (values) => {
    console.log('Form Submit: ', values);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
    </div>
  );
}

export default ListPage;

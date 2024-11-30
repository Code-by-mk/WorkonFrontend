import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newItem, setNewItem] = useState({
    userId: '',
    id: '',
    title: '',
    completed: false,
  });

  useEffect(() => {
    const callApi = async () => {
      try {
        let result = await fetch("https://jsonplaceholder.typicode.com/todos");
        result = await result.json();
        setData(result.slice(0, 10)); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    callApi();
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const handleUpdate = (id) => {
    const updatedData = data.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setData(updatedData);
  };

  const handleAdd = () => {
    const newId = data.length ? data[data.length - 1].id + 1 : 1; 
    const newEntry = { ...newItem, id: newId };
    setData([...data, newEntry]); 
    setNewItem({ userId: '', id: '', title: '', completed: false });
    setShowInput(false);
  };

  return (
    <div>
      <h1>API Call in React</h1>
      <table border="1">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => ( 
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleUpdate(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button classname="add" onClick={() => setShowInput(!showInput)}>
        {showInput ? 'Cancel' : 'Add New Item'}
      </button>

      {showInput && (
        <div>
          <input
            type="text"
            placeholder="User ID"
            value={newItem.userId}
            onChange={(e) => setNewItem({ ...newItem, userId: e.target.value })}
          />
          <input
            type="text"
            placeholder="Title"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          />
          <label>
            Completed:
            <input
              type="checkbox"
              checked={newItem.completed}
              onChange={(e) => setNewItem({ ...newItem, completed: e.target.checked })}
            />
          </label>
          <button onClick={handleAdd}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default App;

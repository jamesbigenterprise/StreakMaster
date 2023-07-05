import React, { useState } from 'react';
import TaskForm from './TaskForm';
import StreakList from './TaskList';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>Streak Master</h1>
            <TaskForm addTask={addTask} />
            <StreakList tasks={tasks} />
        </div>
    );
}

export default App;

import React from 'react';
import StreakCounter from './StreakCounter';

function Straktem({ task }) {
    const handleCompletion = () => {
        // Handle task completion logic and update the state accordingly
    };

    return (
        <li>
            <span>{task.name}</span>
            <button onClick={handleCompletion}>Mark as Completed</button>
            <span>Streak: <StreakCounter streak={task.streak} /></span>
        </li>
    );
}

export default Straktem;

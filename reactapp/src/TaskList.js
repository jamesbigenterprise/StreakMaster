import React from 'react';
import Straktem from './TaskItem';

function StreakList({ tasks }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <Straktem key={index} task={task} />
            ))}
        </ul>
    );
}

export default StreakList;
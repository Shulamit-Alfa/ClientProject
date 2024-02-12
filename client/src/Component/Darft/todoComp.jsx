// ToDoComp
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, deleteTask, setTasks } from '../../Store/ToDoSlice';
import ToDo from './todo';
import FormDialog from './formDialog';

const ToDoComp = () => {
    const dispatch = useDispatch();
    const myTasks = useSelector(state => state.toDoSlice?.tasks);

    useEffect(() => {
        // Fetch tasks when component mounts
        // Example: fetchTasks()
    }, []);

    const handleEditTask = (task) => {
        dispatch(editTask(task));
    };

    return (
        <div>
            <h1>Task List</h1>
            <FormDialog />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {myTasks.map(task => (
                    <ToDo key={task.id} task={task} onEditTask={handleEditTask} />
                ))}
            </div>
        </div>
    );
};

export default ToDoComp;

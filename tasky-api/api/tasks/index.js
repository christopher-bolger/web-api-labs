import express from 'express';
import { tasksData } from './taskData';

const router = express.Router(); 

// Get all tasks
router.get('/', (req, res) => {
    res.json(tasksData);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const task = tasksData.tasks.find(task => task.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ status: 404, message: 'Task not found' });
    }
});

export default router;

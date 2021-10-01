import { v4 as uuidv4 } from 'uuid';

const tasks = [
        { 
            id: uuidv4(),
            title: 'User Interviews',
            content: 'Conduct a user interview plan to capture requirements he user has from the product'
        },
        { 
            id: uuidv4(),
            title: 'Document Requirements',
            content: 'Create a SRS document from the requirements captured during User interview'
        },
        { 
            id: uuidv4(),
            title: 'Create Design Document',
            content: 'Create a SDD to visually capture the requirements'
        }
    ]

const columns = {
        col1:{
            title: 'To Do',
            tasks:[tasks[1],tasks[2]]
        },
        col2:{
            title: 'In Progress',
            tasks:[tasks[0]]
        },
        col3:{
            title: 'Review',
            tasks:[]
        },
        col4:{
            title: 'Done',
            tasks:[]
        }
    }

export {tasks,columns};
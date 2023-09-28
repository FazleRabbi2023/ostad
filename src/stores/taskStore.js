// productStore.js
import {ref,reactive} from 'vue'
import { defineStore } from 'pinia';


const taskStore = defineStore('tasks', () => {
    
    let tasks= reactive([])
   
    const addTask = (task) => {
        tasks.push(task);
        console.log(tasks)
    }
    const totalTasks =() => {
       return tasks.length;
    }

    const removeTask = (i) => {
        tasks.splice(i, 1);
    }

    const taskStatus = ref(false);
    
    return {tasks, addTask, totalTasks, removeTask, taskStatus}
})



export {taskStore}
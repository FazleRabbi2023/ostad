
<script setup>
import { ref,computed } from 'vue';
import { taskStore } from '../stores/taskStore'; // Import your store


const tasksStore = taskStore(); // Create an instance of your store


const name = ref()

const status = ref(false)

</script>

<template>
  <div class="container">
    <table class="table table-bordered m-4">
        <tr>
            <td>
                Task Name: <input v-model="name" type="text">
            </td>
            <td>
              <button class="btn btn-primary btn-sm" @click="tasksStore.addTask(name)">Add Task</button>  
            </td>
        </tr>
    </table>

    <hr>

    <table class="table table-hover table-bordered">
        <tr v-for="(task,index) in tasksStore.tasks" :key="index">
            <td>{{ task }}</td>
            <td><input class="ml-2" type="checkbox" v-model="tasksStore.taskStatus"/></td>
            <td>{{ tasksStore.taskStatus? 'Done':'Not Done' }}</td>
            <td><button class="btn btn-danger btn-sm" @click="tasksStore.removeTask(index)">remove task</button></td>
        </tr>
    </table>

   
  </div>
</template>

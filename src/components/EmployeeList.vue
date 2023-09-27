
<script setup>
import { defineComponent } from 'vue';
import { useEmployeesStore } from '../store/index'; 


    const employeesStore = useEmployeesStore()

    const selectEmployee = (employee) => {
      employeesStore.setSelectedEmployee(employee);
    };

   
 

</script>

<template>
 <p>{{ employeesStore.employee }}</p> 
    <h2>Список сотрудников</h2>
    <ul>
      <li v-for="employee in employeesStore.employees" :key="employee.id" @click="selectEmployee(employee)">
        {{ employee.name }}
      </li>
    </ul>
</template>



<script setup lang="ts">
import { useEmployeesStore } from '../store/index'; 
interface EmployeeValue {
  id: number , name: string, age: number 
}

    const employeesStore = useEmployeesStore()

    const selectEmployee = (employee: EmployeeValue) => {
      employeesStore.setSelectedEmployee(employee);
    };

   
 

</script>

<template>

    <h2>Список сотрудников</h2>
    <ul>
      <li v-for="employee in employeesStore.employees" :key="employee.id" @click="selectEmployee(employee)">
        {{ employee.name }}
      </li>
    </ul>
</template>


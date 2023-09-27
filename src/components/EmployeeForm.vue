<script setup>
import { defineComponent, ref } from 'vue';
import { useEmployeesStore } from '../store/index';


    const store = useEmployeesStore();  
    const updateEmployee = (val) => {
      store.updateEmployee(val);
    };


</script>
<template>
     <h2>Форма редактирования сотрудника</h2>
    <form @submit.prevent>
      <label for="name">Имя:</label>
      <input type="text" v-model="store.selectedEmployee.name" >
      <button @click="updateEmployee(store.selectedEmployee)" type="submit">Сохранить</button>
    </form>
</template>
import { defineStore } from 'pinia';

export const useEmployeesStore = defineStore('employees', {
  state: () => ({
    employees: [
      { id: 1, name: 'Катя', age: 30 },
      { id: 2, name: 'Саша', age: 35 },
      { id: 3, name: 'Анна', age: 28 },
    ],
    selectedEmployee: { id: null, name: '', age: null },
  }),
  actions: {
    setSelectedEmployee(employee) {
      this.selectedEmployee = { ...employee };
    },
    updateEmployee(updatedEmployee) {
      this.employees.map((employee) => employee.id === updatedEmployee.id ? employee.name = updatedEmployee.name : employee.name);
    },
  },
});

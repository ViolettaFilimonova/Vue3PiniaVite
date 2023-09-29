import { defineStore } from 'pinia';

interface EmployeeValue {
  id: number , name: string, age: number 
}

export const useEmployeesStore = defineStore('employees', {
  state: () => ({
    employees: [
      { id: 1, name: 'Катя', age: 30 },
      { id: 2, name: 'Саша', age: 35 },
      { id: 3, name: 'Анна', age: 28 },
    ] as [EmployeeValue , EmployeeValue, EmployeeValue],
    selectedEmployee: { id: 0, name: '', age: 0 } as EmployeeValue,
  }),
  actions: {
    setSelectedEmployee(employee:EmployeeValue) {
      this.selectedEmployee = { ...employee };
    },
    updateEmployee(updatedEmployee: EmployeeValue) {
      this.employees.map((employee) => employee.id === updatedEmployee.id ? employee.name = updatedEmployee.name : employee.name);
    },
  },
});

/* 
   filename: complex_code.js
   content: A complex code implementing a task scheduling system for a company
*/

// Constants
const MAX_TASKS = 10;
const WORKING_HOURS = 8;

// Data Structures
class Task {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class Employee {
  constructor(name, availableHours) {
    this.name = name;
    this.availableHours = availableHours;
    this.tasks = [];
  }

  assignTask(task) {
    if (this.tasks.length < MAX_TASKS) {
      this.tasks.push(task);
      console.log(`Task "${task.name}" assigned to employee "${this.name}".`);
    } else {
      console.log(`Employee "${this.name}" already has the maximum number of tasks assigned.`);
    }
  }

  doWork() {
    console.log(`Starting work for employee "${this.name}".`);
    let totalDuration = 0;
    let completedTasks = [];
    
    // Simulate working on tasks
    for (let i = 0; i < this.tasks.length; i++) {
      if (totalDuration >= this.availableHours) {
        console.log(`Employee "${this.name}" has reached the available hours limit.`);
        break;
      }
      
      const task = this.tasks[i];
      if (totalDuration + task.duration <= this.availableHours) {
        totalDuration += task.duration;
        completedTasks.push(task);
        console.log(`Employee "${this.name}" completed task "${task.name}" in ${task.duration} hours.`);
      } else {
        console.log(`Employee "${this.name}" ran out of working hours to complete task "${task.name}".`);
      }
    }

    // Remove completed tasks
    for (const task of completedTasks) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
    
    console.log(`Employee "${this.name}" finished work. Total duration: ${totalDuration} hours.`);
  }
}

// Create employees
const employee1 = new Employee("John Doe", WORKING_HOURS);
const employee2 = new Employee("Jane Smith", WORKING_HOURS);

// Create tasks
const task1 = new Task("Task 1", 3);
const task2 = new Task("Task 2", 2);
const task3 = new Task("Task 3", 4);
const task4 = new Task("Task 4", 1);

// Assign tasks to employees
employee1.assignTask(task1);
employee1.assignTask(task2);
employee1.assignTask(task3);
employee1.assignTask(task4);

employee2.assignTask(task4);
employee2.assignTask(task3);

// Simulate work
employee1.doWork();
employee2.doWork();
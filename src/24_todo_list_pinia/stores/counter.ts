import { defineStore } from "pinia";
// 引入interface
import { Todo } from '../types/todo'

export type RootState = {
  todos: Todo[];
};

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
  } as RootState),
  actions: {
    addTodo (todo: Todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index: number) {
      this.todos.splice(index, 1)
    },
    updateTodo (todos: Todo, isCompleted: boolean) {
      todos.isCompleted = isCompleted
    }
  }
})
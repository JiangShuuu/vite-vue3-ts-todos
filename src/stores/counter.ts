import { defineStore } from "pinia";
// 引入interface
import { Todo } from '../types/todo'

export type RootState = {
  todos: Todo[];
};

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    todos: []
  } as RootState),
  actions: {
    addTodo (todo: Todo) {
      this.todos.unshift(todo)
    }
  }
})
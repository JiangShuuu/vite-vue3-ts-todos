import { Todo } from '../types/todo'

// 保存數據到localStorage中
export function saveTodos(todos:Todo []) {
  localStorage.setItem('todos_key', JSON.stringify(todos))
}

// 從localStorage中讀取數據
export function readTodos():Todo [] {
  return JSON.parse(localStorage.getItem('todos_key') || '[]')
}
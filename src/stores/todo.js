import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [
      {
        index: 0,
        value: 1
      },
      {
        index: 1,
        value: 2
      },
      {
        index: 2,
        value: 3
      },
      {
        index: 3,
        value: [
          {
            index: 0,
            value: 1
          },
          {
            index: 1,
            value: 2
          }
        ]
      }
    ]
  }),
  getters: {},
  actions: {
    reset() {
      this.todos = []
    },
    removeTodo(x) {
      console.log(x)
    }
  }
})

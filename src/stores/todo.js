import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [
      {
        index: 0,
        value: 'example 1'
      },
      {
        index: 1,
        value: 'example 2'
      },
      {
        index: 2,
        value: 'example 3'
      },
      {
        index: 3,
        value: [
          {
            index: 4,
            value: 'example 4'
          },
          {
            index: 5,
            value: 'example 5'
          },
          {
            index: 6,
            value: 'example 6'
          }
        ]
      }
    ],
    newTodo: "new todo",
    newNestedTodo: "new nested todo"
  }),
  getters: {},
  actions: {
    reset() {
      this.todos = []
    },
    generateNewIndex() {
      let indexes = [];
      this.todos.forEach(item => {
        if (Array.isArray(item.value)) {
          indexes.push(item.index)
          item.value.forEach(subItem => {
            indexes.push(subItem.index)
          })
        } else {
          indexes.push(item.index)
        }
      })
      return indexes;
    },
    addNewMultiTask() {
      let indexes = this.generateNewIndex();
      for (let i = 0; i < 30; i++) {
        if (!indexes.includes(i)) {
          this.todos.push({ index: i, value: [] });
          break;
        }
      }
    },
    addNestedTodo(todo, index) {
      console.log(todo, index)
      console.log(this.todos)
      let indexes = this.generateNewIndex();
      console.log(indexes)
      for (let i = 0; i < 30; i++) {
        if (!indexes.includes(i)) {
          console.log(i)
          console.log(this.todos[i])
          this.todos[index].value.push({ value: todo, index: i });
          break;
        }
      }
    },
    addTodo(todo) {
      let indexes = this.generateNewIndex();
      for (let i = 0; i < 30; i++) {
        if (!indexes.includes(i)) {
          this.todos = [...this.todos, { value: todo, index: i }]
          break;
        }
      }
      this.newTodo = "new todo"
    },
    removeTodo(todo, isNested) {
      let cleanup = false;
      if (isNested) {
        this.todos.forEach(item => {
          if (Array.isArray(item.value)) {
            item.value = item.value.filter(item => {
              return item.index !== todo.index;
            })
            if (item.value.length < 1) {
              cleanup = true;
            }
          }
        })
      } else {
        this.todos = this.todos.filter(item => {
          return item.index !== todo.index;
        })
      }
      if (cleanup) {
        this.todos = this.todos.filter(item => {
          return !(Array.isArray(item.value) && item.value.length < 1)
        })
      }
    }
  }
})

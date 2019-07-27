<!--
 * @Author: btbrad
 * @Date: 2019-06-02 22:33:55
 * @LastEditors: btbrad
 * @LastEditTime: 2019-06-03 00:02:45
 * @Description:
 -->
<template>
  <div class="todolist">
    <h2>TODOLIST</h2>
    <input type="text"
           v-model="newTodo" />
    <button @click="add">添加</button>
    <button @click="clear">清空</button>
    <ul>
      <li v-for="item in todos"
          :key="item.name"
          :class="{finished:item.done}">
        <input type="checkbox"
               v-model="item.done" />
        {{item.name}}
      </li>
    </ul>
    <p>{{active}}/{{all}}</p>
  </div>

</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    initial () {
      let data = [
        {
          id: 0,
          name: '吃饭',
          done: true
        },
        {
          id: 1,
          name: '睡觉',
          done: 'false'
        },
        {
          id: 2,
          name: '上班',
          done: false
        }
      ]
      window.localStorage.setItem('todos', JSON.stringify(data))
    },
    add () {
      let todo = this.newTodo.trim()
      if (!todo.length) {
        return
      }
      let newOne = {
        id: +new Date(),
        name: todo,
        done: false
      }
      this.todos.unshift(newOne)
    },
    clear () {
      this.todos = this.todos.filter(item =>
        !item.done
      )
    }
  },
  computed: {
    active () {
      return this.todos.filter(item => !item.done).length
    },
    all () {
      return this.todos.length
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: (value) => {
        window.localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted () {
    // this.initial()
    this.todos = JSON.parse(window.localStorage.getItem('todos'))
  }
}
</script>

<style scped>
.todolist {
  width: 200px;
  margin: 100px auto;
}
.finished {
  color: #f40;
  text-decoration: line-through;
}
</style>

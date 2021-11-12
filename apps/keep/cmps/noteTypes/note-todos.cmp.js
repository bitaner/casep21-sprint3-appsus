import { utilService } from '../../../../services/util-service.js'
import { eventBus } from '../../../../services/event-bus-service.js'

// doneAt - check done at time stamp
// marked - lineover



export default {

    props: ['note'],
    template: `
        <section class="todo-note">
            <h3>
                {{note.info.txt}}
            </h3>
            <ul class="todo-list">
            <li v-for="(todo,idx) in note.info.todos">
            <input type="checkbox" v-bind:checked="todo.doneAt" @click="toggleMark" >
            <span v-bind:class="toggleOverlineClass" @click="" >{{todo.txt}}</span>
            <button v-on:click="removeTodo(todo.id)">X</button>    
            </li>
           <input type="text" v-model="value" placeholder="i need to do..." @change="addTodo">
            </ul>
        </section>
        <!-- v-bind:class="toggleOverLine" -->
    `,
    data() {
        return {
            value: null
        }
    },
    methods: {
        removeTodo(todoId) {
            console.log(todoId)
            const idx = this.note.info.todos.findIndex(u => u.id === todoId)
            this.note.info.todos.splice(idx, 1)
                // console.log('this.users', this.users);
            this.note.info.todos = this.note.info.todos.filter(u => u.id !== todoId)
            eventBus.$emit('noteUpdate', this.note)

        },
        addTodo() {
            console.log(this.value)
            const newTodo = {
                    txt: this.value,
                    doneAt: null,
                    id: utilService.makeId()
                }
                // console.log(newTodo)
            this.note.info.todos.push(newTodo)
                // console.log(this.note)
            this.value = ''
            eventBus.$emit('noteUpdate', this.note)

        },
        toggleMark() {
            console.log('togglemark')
            console.log(this.note.info.todos)
            eventBus.$emit('noteUpdate', this.note)
        },
        // toggleDark() {
        //     this.isDark = !this.isDark
        // }

    },
    computed: {
        toggleOverlineClass(todo) {
            if (todo.doneAt) return 'overLine'
            return ''
        }
    }
}
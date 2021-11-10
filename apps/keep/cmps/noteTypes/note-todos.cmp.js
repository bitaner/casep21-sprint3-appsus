export default {

    props: ['note'],
    template: `
        <section class="todo-note">
            <h3>
                {{note.info.label}}
            </h3>
            <ul class="todo-list">
            <li>{{note.info.todos[0].txt}}</li>
            <li>{{note.info.todos[1].txt}}</li>
            </ul>
                      
            
        </section>
    `,
    data() {
        return {
            // txt: '',
        };
    },
    methods: {
        // reportVal() {
        //     this.$emit('setInput', this.txt);
        // }
    }
}

// {
//     id: "n105",
//     type: "note-todos",
//     info: {
//         label: "Get my stuff together",
//         todos: [
//             { txt: "Driving liscence", doneAt: null },
//             { txt: "Coding power", doneAt: 187111111 }
//         ]
//     }
// }
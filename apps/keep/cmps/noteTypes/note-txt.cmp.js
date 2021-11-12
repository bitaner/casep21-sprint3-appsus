import { utilService } from '../../../../services/util-service.js'
import { eventBus } from '../../../../services/event-bus-service.js'

// make the change save and update storage

export default {

    props: ['note'],
    template: `
       <section>
           <textarea class="text-note" v-model="note.info.txt"  @input="updateText"></textarea>
        </section> 
    `,
    data() {
        return {}
    },
    methods: {
        updateText() {
            // console.log(this.note)
            eventBus.$emit('noteUpdate', this.note)
        }
    }
}
import { eventBus } from '../../../../services/event-bus-service.js'

// hide edit section

export default {

    props: ['note'],
    template: `
        <section class="img-note">
            <img :src="note.info.url" alt="">
            <h3>
                {{note.info.txt}}
            </h3>
            <label for="changeImg">Change image</label>
                <input id="changeImg" type="text" @change="setImgUrl" v-model="selectedImgUrl" placeholder="Copy Img url path here">
        </section>
    `,
    data() {
        return {
            selectedImg: null,
            selectedImgUrl: null
        }
    },
    methods: {

        setImgUrl() {
            console.log(this.selectedImgUrl)
            this.note.info.url = this.selectedImgUrl
            eventBus.$emit('noteUpdate', this.note)
        }
    }
}
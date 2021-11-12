import { eventBus } from '../../../../services/event-bus-service.js'


export default {

    props: ['note'],
    template: `
        <section class="vid-note">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/530z-_yjdlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img :src="note.info.url" alt="">
            <h3>
                {{note.info.title}}
            </h3>
            <label for="changeVid">Change video</label>
                <input id="changeVid" type="text" @change="setVidUrl" v-model="selectedVidUrl" placeholder="Copy Vid url path here">
        </section>
    `,
    data() {
        return {
            selectedVidUrl: null
        }
    },
    methods: {

        setVidUrl() {
            console.log(this.selectedVidUrl)
            this.note.info.url = this.selectedVidUrl
            eventBus.$emit('noteUpdate', this.note)
        }
    }
}
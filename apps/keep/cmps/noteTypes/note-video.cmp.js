import { eventBus } from '../../../../services/event-bus-service.js'

/// enable opt to add reg youtube links

export default {

    props: ['note'],
    template: `
        <section class="vid-note">
        <iframe width="560" height="315" v-bind:src=this.note.info.url title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>
                {{note.info.txt}}
            </h3>
            <label for="changeVid">Change video</label>
                <input id="changeVid" type="text" @change="setVidUrl" v-model="selectedVidUrl" placeholder="Copy Vid url path here">
        </section>
    `,
    data() {
        return {
            selectedVidUrl: null,
            video: this.note.info.url
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
export default {
    props: ['description'],
    template: `
      <p v-if="description" @click="isExpand=!isExpand" ><span>Descriptuion: </span>{{textForDisplay}}
        <span v-if="!isExpand">...</span>
      </p>

    `,
    created() {
        if (this.description.length < 100) {
            this.isExpand = true
        console.log(this.description.length)
        }
    },
    data() {
        return {
            isExpand: false,

        }
    },
    computed: {
        textForDisplay() {
            if (this.description.length > 100 && !this.isExpand) {
                return this.description.slice(0, 100)
            }
            else if (this.isExpand || this.description.length < 100) return this.description
        
        }
    }

}
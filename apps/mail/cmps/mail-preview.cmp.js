export default {
    props: ['mail'],
    template: `
        <div v-if="mail" class="mail-preview">
            <h3>{{mail.subject}}</h3>
            <p>{{mail.body}}</p>
            <p>{{changeDateFormat}}</p>
        </div>
    `,
    created() {

    },
    computed: {
        changeDateFormat() {
            var date = this.mail.sentAt;
            var date = new Date(+date)
            return date.toDateString().slice(4)
        }

    }
}
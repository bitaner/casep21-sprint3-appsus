export default {
    props: ['mail'],
    template: `
        <div v-if="mail" class="mail-preview">
            <p>{{mail.subject}}</p>
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
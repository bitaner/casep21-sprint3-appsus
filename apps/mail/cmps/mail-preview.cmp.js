export default {
    props: ['mail'],
    template: `
        <div v-if="mail" class="mail-preview">
            <p>{{mail.subject}}</p>
            <p class="mailBody">{{mail.body}}</p>
            <p class="mailDate">{{changeDateFormat}}</p>
        </div>
    `,
    created() {

    },
    computed: {
        changeDateFormat() {
            var date = this.mail.sentAt;
            var date = new Date(+date)
            this.checkIfToday(date)
            if (this.checkIfToday(date)) return date.toString().slice(15,21)
            else return date.toDateString().slice(4)
        }

    },
    methods: {
        checkIfToday(date){
            var ts = date
            var today = new Date().setHours(0, 0, 0, 0);
            var thatDay = new Date(ts).setHours(0, 0, 0, 0);
            if (today === thatDay) return true;

        }
    }
}




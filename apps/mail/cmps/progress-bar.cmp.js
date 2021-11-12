export default {
    props:['mails'],
    template: `
       <div v-if="mails" class="container progress-bar">
           <div class="percent">{{percent}}%</div>
           
           <div class="loading-bar">
                <div class="percentage" :style="{'width': percentage + '%'}">
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            percentage: null,
        }
    },
    created() {
        var interval = setInterval(() => {
            if (this.percentage < 100) {this.percentage += 0.1;}
            else clearInterval(interval)
        }, 1000);
    },
    computed: {
        percent(){
           var unreadMails = this.mails.filter(mail => mail.isRead === false);
           var mails = this.mails
           this.percentage = (unreadMails.length/mails.length*100).toFixed(0)
            return this.percentage
            // return this.percentage.toFixed();
        }
    },
    methods: {

    }
};
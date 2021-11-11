import { mailService } from './services/mail-service.js';
import mailFilter from './cmps/mail-filter.cmp.js';
import mailList from './cmps/mail-list.cmp.js';
import mailAdd from './cmps/mail-add.cmp.js';
import mailNav from './cmps/mail-nav.cmp.js';

// import { eventBus } from '../services/event-bus-service.js';


export default {
    template: `
        <section v-if="mails"class="mail-app app-main">
            <mail-nav :mails="mails" ></mail-nav>
            
            <div v-if="mails">
                <mail-filter @filtered="setFilter"></mail-filter>
                <!-- <mail-add @mailToAdd="loadmails"></mail-add> -->
                <mail-list v-if="filterBy" :mails="mailsToShow"  @remove="removemail"></mail-list>
            </div>
        </section>
    `,
    data() {
        return {
            mails: null,
            selectedmail: null,
            filterBy: null,

            // mailsToShow:null

        };
    },
    created() {
        this.loadMails()
    },
    methods: {
        loadMails() {
            console.log('loading')
            mailService.query()
                .then(mails => this.mails = mails)
        },
        selectmail(mail) {
            this.selectedmail = mail;
        },
        closeDetails() {
            this.selectedmail = null;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        removemail(id) {
            mailService.remove(id)
                .then(() => {
                    const msg = {
                        txt: 'Deleted succesfully',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                    this.mails = this.mails.filter(mail => mail.id !== id)
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });
        }
    },
    computed: {
        mailsToShow() {
            console.log('hi')
            console.log(this.filterBy);
            console.log(this.filterBy.moreFilter)
            const searchStr = this.filterBy.subject.toLowerCase();
            var mailToUser = this.mails.filter(mail => mail.to === "user@appsus.com")
            var mailFiltered = null;
            switch (this.filterBy.moreFilter) {
                case 'all': mailFiltered = this.mails.filter(mail => mail.to === "user@appsus.com");
                    break
                case 'read': mailFiltered = mailToUser.filter(mail => mail.isRead === true);
                    break
                case 'unread': mailFiltered = mailToUser.filter(mail => mail.isRead === false);
                    break
                case 'stared': mailFiltered = mailToUser.filter(mail => mail.stared === true);
            }
            if (searchStr) {
                return mailFiltered.filter(mail => mail.subject.toLowerCase().includes(searchStr))
            } else return mailFiltered;

    }
},
components: {
    mailList,
        mailFilter,
        mailAdd,
        mailNav
}
};


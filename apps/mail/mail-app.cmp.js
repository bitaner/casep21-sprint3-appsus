import { mailService } from './services/mail-service.js';
// import mailFilter from './cmps/mail-filter.cmp.js';
import mailList from './cmps/mail-list.cmp.js';
import mailAdd from './cmps/mail-add.cmp.js';
import mailNav from './cmps/mail-nav.cmp.js';

// import { eventBus } from '../services/event-bus-service.js';


export default {
    template: `
        <section v-if="mails" class="mail-app app-main">
            <mail-nav @filtered="setFilter" @newMail="createNewMail" :mails="mails"></mail-nav>
            <mail-add @closeModal="closingModal" v-if="newMail"></mail-add>

            <div v-if="mails">
            <mail-list v-if="filterBy" :mails="mailsToShow"  @remove="removemail"></mail-list>
            </div>
        </section>
    `,
    data() {
        return {
            mails: null,
            selectedmail: null,
            filterBy: null,
            newMail: null
        };
    },
    created() {
        console.log('loading')
        this.loadMails()
        console.log('loading')
    },
    methods: {
        loadMails() {
            console.log('loading')
            mailService.query()
                .then(mails => {
                    this.mails = mails;
                    console.log('loading')

                })
        },
        selectmail(mail) {
            this.selectedmail = mail;
        },
        closeDetails() {
            this.selectedmail = null;
        },
        setFilter(filterBy) {
            console.log('hi')
            this.filterBy = filterBy;

        },
        createNewMail() {
            console.log('new mail created');
            this.newMail = true;
            console.log(this.newMail)
        },
        removemail(id) {
            mailService.remove(id)
                .then(() => {
                    const msg = {
                        txt: 'Deleted succesfully',
                        type: 'success'
                    };
                    // eventBus.$emit('showMsg', msg);
                    this.mails = this.mails.filter(mail => mail.id !== id)
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    // eventBus.$emit('showMsg', msg);
                });
        },
        closingModal() {
            this.newMail = null;

        }
    },
    computed: {
        mailsToShow() {
            console.log('hi')
            console.log(this.filterBy);
            var mailToUser = this.mails.filter(mail => mail.to === "user@appsus.com")
            const searchStr = this.filterBy.subject
            var mailFiltered = null;
            if (this.filterBy.moreFilter === 'sent') {
                if (!searchStr) {
                    mailFiltered = this.mails.filter(mail => mail.to !== "user@appsus.com")
                    return mailFiltered.sort((a, b) => (b.sentAt - a.sentAt))
                } else {
                    mailFiltered = this.mails.filter(mail => {
                        return (mail.to !== "user@appsus.com" &&
                            (mail.subject.toLowerCase().includes(searchStr) || mail.body.toLowerCase().includes(searchStr)))
                    })
                    return mailFiltered.sort((a, b) => (b.sentAt - a.sentAt))
                };
            }
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
                mailFiltered.filter(mail => {
                    return (mail.subject.toLowerCase().includes(searchStr) || mail.body.toLowerCase().includes(searchStr))
                })
                return mailFiltered.sort((a, b) => (b.sentAt - a.sentAt))
            } else return mailFiltered;

        }
    },
    components: {
        mailList,
        // mailFilter,
        mailAdd,
        mailNav
    },
    
};


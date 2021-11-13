import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

const MAILS_KEY = 'mails';
var gMails
_createMails()

export const mailService = {
    query,
    remove,
    save,
    getEmptyMail,
    getById,
    // saveReview,
};

function query() {
    return storageService.query(MAILS_KEY);
}

function _createMails() {
    storageService.query(MAILS_KEY)
        .then((mails) => {
            gMails = mails
                // console.log(gMails)
            if (!gMails || !gMails.length) {
                gMails = [
                    { id: 'e97', subject: 'How you doin?', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1751133930594, to: 'user@appsus.com' },
                    { id: 'e88', subject: 'Well, maybe I don’t need your money. Wait, wait, I said maybe!!', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1531133330594, to: 'user@appsus.com' },
                    { id: 'e89', subject: 'See? He’s her lobster!', body: 'I got off the plane.', showMore: false, stared: false, isRead: false, sentAt: 1561133930594, to: 'jackie.may@chimpanzee.com' },
                    { id: 'e90', subject: 'Joey doesn’t share food!!', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1551133930594, to: 'user@appsus.com' },
                    { id: 'e91', subject: 'Oh. My. God.', body: 'Come on, Ross, you’re a paleontologist. Dig a little deeper.', showMore: false, stared: false, isRead: false, sentAt: 1551133930594, to: 'user@appsus.com' },
                    { id: 'e92', subject: 'Hi, I’m Chandler. I make jokes when I’m uncomfortable.!', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1551133930594, to: 'user@appsus.com' },
                    { id: 'e93', subject: 'I wish I could, but I don’t want to.!', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1541133930594, to: 'user@appsus.com' },
                    { id: 'e94', subject: 'It tastes like feet!', body: 'Come on, Ross, you’re a paleontologist. Dig a little deeper.', showMore: false, stared: false, isRead: false, sentAt: 1251133930594, to: 'user@appsus.com' },
                    { id: 'e95', subject: 'I don’t even have a ‘pla.’', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1551133930594, to: 'tamera.fuller@seal.com' },
                    { id: 'e96', subject: 'Seven!', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1351133930594, to: 'user@appsus.com' },
                    { id: 'e97', subject: 'our little Harmonica is hammered', body: 'Come on, Ross, you’re a paleontologist. Dig a little deeper.', showMore: false, stared: false, isRead: false, sentAt: 1551133930594, to: 'tamera.fuller@seal.com' },
                    { id: 'e98', subject: 'Oh, come on, Will, just take off your shirt and tell us.', body: 'Come on, Ross, you’re a paleontologist. Dig a little deeper.', showMore: false, stared: false, isRead: false, sentAt: 1551133930594, to: 'user@appsus.com' },
                    { id: 'e99', subject: 'Pivot!!', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1151133930594, to: 'user@appsus.com' },
                    { id: 'e101', subject: 'Could I be wearing any more clothes?!', body: 'You can’t just give up. Is that what a dinosaur would do?', showMore: false, stared: true, isRead: true, sentAt: 1531133930594, to: 'user@appsus.com' },
                    { id: 'e102', subject: 'You are the best!', body: 'Come on, Ross, you’re a paleontologist. Dig a little deeper.', showMore: false, stared: true, isRead: false, sentAt: 1251133920594, to: 'user@appsus.com' },
                    { id: 'e103', subject: 'have a nice day!', body: 'I got off the plane.', showMore: false, stared: true, isRead: true, sentAt: 1211133930594, to: 'user@appsus.com' },
                    { id: 'e104', subject: 'What’s not to like? Custard: good. Jam: good. Meat: good!!', body: 'You can’t just give up. Is that what a dinosaur would do?', showMore: false, stared: false, isRead: false, sentAt: 1551133930594, to: 'user@appsus.com' },
                    { id: 'e105', subject: 'Can’t hold her own head up, but yeah — jumped!', body: 'Would love to catch up sometimes', showMore: false, stared: false, isRead: false, sentAt: 1521133920594, to: 'tamera.fuller@seal.com' },
                    { id: 'e106', subject: 'we were on a break!', body: 'You can’t just give up. Is that what a dinosaur would do?', showMore: false, stared: true, isRead: true, sentAt: 1551133930594, to: 'lenny.pugh@zebra.com' },
                    { id: 'e107', subject: 'hey don’t know that we know they know we know.', body: 'ou don’t own a TV? What’s all your furniture pointed at?', showMore: false, stared: true, isRead: false, sentAt: 1571133930594, to: 'lenny.pugh@zebra.com' },
                    { id: 'e108', subject: 'This is all a moo point!', body: 'ou don’t own a TV? What’s all your furniture pointed at?', showMore: false, stared: true, isRead: true, sentAt: 1521133330594, to: 'lenny.pugh@zebra.com' },
                    { id: 'e109', subject: 'And I have to live with a boy!!', body: 'I got off the plane.', showMore: false, stared: false, isRead: false, sentAt: 1451133930584, to: 'manuela.griffin@fox.com' },
                ]
                utilService.saveToStorage(MAILS_KEY, gMails);
            }
            return gMails;
        })
}




// function saveReview(mailId, currReview) {
//   console.log(currReview);
//   let mail;
//   return getById(mailId).then((res) => {
//     mail= res
//     if (!mail.review) mail.review = [];
//     mail.review.push(currReview)
//     console.log(mail)
//     return storageService.put(mails_KEY, mail)
//   })

// }

function remove(mailId) {
    // return Promise.reject('Big balagan!')
    return storageService.remove(MAILS_KEY, mailId);
}

function save(mail) {
    console.log('mail-service', mail, mail.id)
    if (mail.id) return storageService.put(MAILS_KEY, mail);
    else return storageService.post(MAILS_KEY, mail);
}

function getEmptyMail() {
    return {
        body: '',
        id: utilService.makeId(),
        isRead: true,
        sentAt: '',
        showMore: false,
        stared: false,
        subject: '',
        to: '',
    };
}


function getById(mailId) {
    return storageService.get(MAILS_KEY, mailId);
}
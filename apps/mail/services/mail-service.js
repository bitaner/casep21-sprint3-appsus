import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

const RECIEVED_MAILS_KEY = 'recieved';
const SENT_MAILS_KEY = 'sent';

var gRecievedMails
var gSentMails

_createMailsToSent()
_createMailsToRecieve()

export const mailservice = {
  query,
  remove,
  // save,
  // getEmptymail,
  getById,
  // saveReview,
};

function _createMailsToSent() {
  storageService.query(SENT_MAILS_KEY)
    .then((mails) => {
      gSentMails = mails
      if (!gSentMails || !gSentMails.length) {
        gSentMails = [
          {id: 'e101', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: false, isRead: false, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e102', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: true, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e103', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: false, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e104', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: true, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e105', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: false, isRead: false, sentAt : 1551133930594, to: 'user@appsus.com.com'},
        ]
        utilService.saveToStorage(SENT_MAILS_KEY, gSentMails);
      }
      return gSentMails;
    })
}

function _createMailsToRecieve() {
  storageService.query(RECIEVED_MAILS_KEY)
    .then((mails) => {
      gRecievedMails = mails
      if (!gRecievedMails || !gRecievedMails.length) {
        gRecievedMails = [
          {id: 'e101', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: false, isRead: false, sentAt : 1551133930594, to: 'momo@momo.com'},
          {id: 'e102', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: true, sentAt : 1551133930594, to: 'momo@momo.com'},
          {id: 'e103', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: false, sentAt : 1551133930594, to: 'momo@momo.com'},
          {id: 'e104', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: true, sentAt : 1551133930594, to: 'momo@momo.com'},
          {id: 'e105', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: false, isRead: false, sentAt : 1551133930594, to: 'momo@momo.com'},
        ]
        utilService.saveToStorage(RECIEVED_MAILS_KEY, gRecievedMails);
      }
      return gRecievedMails;
    })
}

function query(key) {
  return storageService.query(key);
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

function remove(mailId, key) {
  // return Promise.reject('Big balagan!')
  return storageService.remove(key, mailId);
}

// function save(mail) {
//   if (mail.id) return storageService.put(mails_KEY, mail);
//   else return storageService.post(mails_KEY, mail);
// }

function getById(mailId, key) {
  return storageService.get(key, mailId);
}


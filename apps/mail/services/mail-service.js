import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

const MAILS_KEY = 'mails';
var gMails
_createMails()

export const mailService = {
  query,
  remove, 
  // save,
  // getEmptymail,
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
      console.log(gMails)
      if (!gMails ||!gMails.length) {
        gMails = [
          {id: 'e101', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: false, isRead: false, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e102', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: true, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e103', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: false, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e104', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: true, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e105', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: false, isRead: false, sentAt : 1551133930594, to: 'user@appsus.com.com'},
          {id: 'e106', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: false, isRead: false, sentAt : 1551133930594, to: 'momo@momo.com'},
          {id: 'e107', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: true, sentAt : 1551133930594, to: 'momo@momo.com'},
          {id: 'e108', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: false, sentAt : 1551133930594, to: 'momo@momo.com'},
          {id: 'e109', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: true, isRead: true, sentAt : 1551133930594, to: 'momo@momo.com'},
          {id: 'e110', subject: 'Miss you!', body: 'Would love to catch up sometimes', stared: false, isRead: false, sentAt : 1551133930594, to: 'momo@momo.com'},
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

// function save(mail) {
//   if (mail.id) return storageService.put(mails_KEY, mail);
//   else return storageService.post(mails_KEY, mail);
// }

function getById(mailId) {
  return storageService.get(MAILS_KEY, mailId);
}


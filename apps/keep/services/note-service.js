import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

const NOTES_KEY = 'notes';
// var gCashe = null
// var KEY = 'googleData'
var gNotes
_createNotes()

export const noteService = {
    query,
    remove,
    save,
    // getEmptybook,
    getById,
    // saveReview,
    // googleSearch,
    // addGoogleBook
};

function query() {
    return storageService.query(NOTES_KEY);
}

// function saveReview(bookId, currReview) {
//   console.log(currReview);
//   let book;
//   return getById(bookId).then((res) => {
//     book = res
//     if (!book.review) book.review = [];
//     book.review.push(currReview)
//     console.log(book)
//     return storageService.put(BOOKS_KEY, book)
//   })

// }

function remove(bookId) {
    // return Promise.reject('Big balagan!')
    return storageService.remove(BOOKS_KEY, bookId);
}

function save(book) {
    if (book.id) return storageService.put(BOOKS_KEY, book);
    else return storageService.post(BOOKS_KEY, book);
}

function getById(bookId) {
    return storageService.get(BOOKS_KEY, bookId);
}

// function getEmptyCar() {
//   return {
//       id: '',
//       vendor: '',
//       maxSpeed: 0
//   };
// }

function _createNotes() {
    storageService.query(NOTES_KEY)
        .then((notes) => {
            gNotes = notes
            if (!gNotes || !gNotes.length) {
                gNotes = [{
                        id: "n101",
                        type: "note-txt",
                        isPinned: true,
                        info: {
                            txt: "Fullstack Me Baby!"
                        }
                    },
                    {
                        id: "n102",
                        type: "note-img",
                        info: {
                            url: "http://some-img/me",
                            title: "Bobi and Me"
                        },
                        style: {
                            backgroundColor: "#00d"
                        }
                    },
                    {
                        id: "n103",
                        type: "note-todos",
                        info: {
                            label: "Get my stuff together",
                            todos: [
                                { txt: "Driving liscence", doneAt: null },
                                { txt: "Coding power", doneAt: 187111111 }
                            ]
                        }
                    }
                ]
                utilService.saveToStorage(NOTES_KEY, gNotes);
            }
            return gNotes;
        })

    // let books = utilService.loadFromStorage(BOOKS_KEY);

}

// function _createCar(vendor, maxSpeed = 250) {
//   const car = {
//       id: utilService.makeId(),
//       vendor,
//       maxSpeed,
//   };
//   return car;
// }


// function googleSearch(txt) {
//   console.log(txt)
//   var result = utilService.loadFromStorage(txt.toLowerCase())
//   if (!result) {
//     console.log('axios')
//     const prm = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${txt}`)
//       .then(res => {
//         console.log('Axios Res:', res.data.items);
//         result = res.data.items;
//         utilService.saveToStorage(txt, result)
//         return res.data.items
//       })
//     return prm;
//   } else {
//     console.log(result);
//     console.log('getting from storage')
//     return Promise.resolve(result);;
//   }
// }



// function addGoogleBook(bookToAdd) {

//   var isBookOnSale = (`${bookToAdd.saleInfo.saleability}` === 'NOT_FOR_SALE') ? 'false' : 'true';
//   if (!bookToAdd.volumeInfo.imageLinks.thumbnail) bookToAdd.volumeInfo.imageLinks.thumbnail='no picture';
//   var book = {
//     authors: bookToAdd.volumeInfo.authors,
//     categories: bookToAdd.volumeInfo.categories,
//     description: bookToAdd.volumeInfo.description,
//     id: bookToAdd.id,
//     language: bookToAdd.volumeInfo.language,
//     listPrice: { amount: bookToAdd.volumeInfo.pageCount + `₪`, currencyCode: bookToAdd.saleInfo.country, isOnSale: isBookOnSale },
//     pageCount: bookToAdd.volumeInfo.pageCount,
//     publishedDate: bookToAdd.volumeInfo.publishedDate,
//     review: [],
//     subtitle: bookToAdd.volumeInfo.subtitle,
//     thumbnail: bookToAdd.volumeInfo.imageLinks.thumbnail,
//     title: bookToAdd.volumeInfo.title,
//   }
//   console.log(book)
//   return save(book)
// }
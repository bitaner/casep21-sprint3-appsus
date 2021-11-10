import { noteService } from '../services/note-service.js';
export default {
    template: `
      <div class="book-add">
      <label>Search Google!
          <input v-model.lazy="txt" type="text" placeholder="Search" @blur="Search">
      </label>
      <div v-if="haveResult" >
            <div class="Results" v-for="(book,idx) in searchResult">
                <h3>{{book.volumeInfo.title}}</h3>
                <button v-on:click="addBook(idx)">+</button>
            </div>
    
      </div>
      </div>
    `,
    data() {
        return {
            txt: null,
            haveResult:false,
            searchResult: null

        };
    },
    methods: {
        Search() {
            if (!this.txt) return;
            bookService.googleSearch(this.txt)
                .then((res => {
                    this.searchResult = res;
                    this.haveResult = true;
                    console.log(res)
                }))

        },
        addBook(idx){
          var bookToAdd = this.searchResult[idx]
          bookService.addGoogleBook(bookToAdd)
            .then((book)=> {this.$emit('bookToAdd', book)})
        }
    },
   

}
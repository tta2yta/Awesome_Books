class Book {
  constructor(author = null, title = null) {
    this.arrBook = [{ author: 'aaa', title: 'book1' }];
  }

  getBooks(){
      this.arrBook=JSON.parse(localStorage.getItem('Books'))
  }

  list(container) {
    this.arrBook.forEach((element, index) => {
      this.createElement(element.title, element.author, index);
    });
    container.appendChild(bookListMain);
  }

  createElement(title, author, index) {
    const btnId = `btn_remove${index}`;
    const bookListSub = document.createElement('div');
    bookListSub.id = index;
    bookListSub.className = 'book_list_sub';
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';

    btnRemove.id = btnId;
    btnRemove.className = 'btn_remove';
    btnRemove.addEventListener('click', this.removeBook.bind(this, index));
    bookListSub.appendChild(bookTitle);
    bookListSub.appendChild(bookAuthor);
    bookListSub.appendChild(btnRemove);
    bookListMain.appendChild(bookListSub);
  }

  addBook(title, author) {
    const book = { title: title, author: author };
    const bookArrSize = this.arrBook.push(book);  
    this.createElement(title, author, bookArrSize);
    localStorage.setItem('Books', JSON.stringify(this.arrBook));
  }

  removeBook(index){
    const books = this.arrBook.filter((book, i) => i !== index);
    localStorage.setItem('Books', JSON.stringify(books));
    const parent = document.getElementById(index);
    parent.parentNode.removeChild(parent);
    
  }
}

let myBook = new Book();
myBook.getBooks()

const bookListMain = document.createElement('div');
bookListMain.className = 'book_list_main';
bookListMain.className = 'book_list_main';

const btn = document.getElementById('save');
const container = document.getElementById('container');

myBook.list(container);
btn.addEventListener('click', ()=>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if(title==='' || author==='')
    alert("Please Provide value for Author and Tiltle")
    else
    myBook.addBook(title, author)
});


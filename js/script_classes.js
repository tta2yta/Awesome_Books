class Book{
    constructor(author=null, title=null){
        this.arrBook=[{author:'aaa', title:'book1'}]
    }

      list(container){
        this.arrBook.forEach((element, index) => {
            this.createElement(element.title, element.author, index);
          });
          container.appendChild(bookListMain);
    }

    createElement (title, author, index){
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
        bookListSub.appendChild(bookTitle);
        bookListSub.appendChild(bookAuthor);
        bookListSub.appendChild(btnRemove);
        bookListMain.appendChild(bookListSub);
    }
}

let myBook=new Book()

const bookListMain = document.createElement('div');
bookListMain.className = 'book_list_main';
bookListMain.className = 'book_list_main';

const btn = document.getElementById('save');
const container = document.getElementById('container');

myBook.list(container)
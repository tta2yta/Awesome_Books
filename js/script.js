const btn = document.getElementById('save');
const container = document.getElementById('container');

const bookArr = JSON.parse(localStorage.getItem('Books')) || [];

const bookListMain = document.createElement('div');
bookListMain.className = 'book_list_main';
bookListMain.className = 'book_list_main';

function removeBook(index) {
  const books = bookArr.filter((book, i) => i !== index);
  localStorage.setItem('Books', JSON.stringify(books));
  const parent = document.getElementById(index);
  parent.parentNode.removeChild(parent);
}

const createElement = (title, author, index) => {
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
  btnRemove.addEventListener('click', removeBook.bind(null, index));
  btnRemove.id = btnId;
  btnRemove.className = 'btn_remove';
  bookListSub.appendChild(bookTitle);
  bookListSub.appendChild(bookAuthor);
  bookListSub.appendChild(btnRemove);
  bookListMain.appendChild(bookListSub);
};

function addBook() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');

  const titleInput = title.value;
  const authorInput = author.value;

  const book = { title: titleInput, author: authorInput };
  const bookArrSize = bookArr.push(book);

  createElement(titleInput, authorInput, bookArrSize);
  localStorage.setItem('Books', JSON.stringify(bookArr));
}

btn.addEventListener('click', addBook);

function list(arr) {
  arr.forEach((element, index) => {
    createElement(element.title, element.author, index);
  });
  container.appendChild(bookListMain);
}
list(bookArr);
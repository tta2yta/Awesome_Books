const bookArr = [
  { title: 'Moving on', author: 'Tedros' },
  { title: 'Microverse', author: 'Nkiruka' },
];
const bookListMain = document.createElement('div');
bookListMain.className = 'book_list_main';

const createElement = function (title, author, index) {
  const bookListSub = document.createElement('div');
  bookListSub.id = index;
  bookListSub.className = 'book_list_sub';
  const bookTtitle = document.createElement('div');
  const bookAuthor = document.createElement('div');
  bookTtitle.textContent = title;
  bookAuthor.textContent = author;
  const btnRemove = document.createElement('button');
  btnRemove.textContent = 'Remove';
  btnRemove.className = 'btn_remove';
  bookListSub.appendChild(bookTtitle);
  bookListSub.appendChild(bookAuthor);
  bookListSub.appendChild(btnRemove);
  bookListMain.appendChild(bookListSub);
};

function list(bookArr) {
  bookArr.forEach((element, index) => {
    createElement(element.title, element.author, index);
  });

  document.getElementById('container').appendChild(bookListMain);
}

list(bookArr);

document.querySelector('#save').addEventListener('click', () => {
  const title1 = document.querySelector('#title').value;
  const author1 = document.querySelector('#author').value;
  if (title1 === '' && author1 === '') {
    alert('Please enter the title and author');
  } else {
    const book = { title: title1, author: author1 };
    const lastIndex = bookArr.push(book);
    createElement(title1, author1, lastIndex);
  }
});
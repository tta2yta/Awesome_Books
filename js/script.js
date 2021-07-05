"use strict";

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

const bookArr = [
  { title: "Moving on", author: "Tedros" },
  { title: "Microverse", author: "Nkiruka" },
];

list(bookArr)

function list(bookArr){
  let book_list_main=document.createElement('div');
  book_list_main.className="book_list_main"
  bookArr.forEach((element, index) => {
   let  book_list_sub= document.createElement('div')
   book_list_sub.id=index
   book_list_sub.className='book_list_sub'
     let book_title= document.createElement('div')
     let book_author= document.createElement('div')
     book_title.textContent=element.title
     book_author.textContent=element.author
     let btn_remove= document.createElement('button')
     btn_remove.textContent="Remove"
     book_list_sub.appendChild(book_title)
     book_list_sub.appendChild(book_author)
     book_list_sub.appendChild(btn_remove)
     book_list_main.appendChild(book_list_sub)

  });

  document.getElementById('main').appendChild(book_list_main)

}

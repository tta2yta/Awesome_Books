"use strict";

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

const bookArr = [
  { title: "Moving on", author: "Tedros" },
  { title: "Microverse", author: "Nkiruka" },
];
const book_list_main = document.createElement("div");
  book_list_main.className = "book_list_main";

  const create_element= function(title, author, index){
    let book_list_sub = document.createElement("div");
    book_list_sub.id = index;
    book_list_sub.className = "book_list_sub";
    let book_title = document.createElement("div");
    let book_author = document.createElement("div");
    book_title.textContent = title;
    book_author.textContent = author;
    let btn_remove = document.createElement("button");
    btn_remove.textContent = "Remove";
    btn_remove.className = "btn_remove";
    book_list_sub.appendChild(book_title);
    book_list_sub.appendChild(book_author);
    book_list_sub.appendChild(btn_remove);
    book_list_main.appendChild(book_list_sub);
  }

list(bookArr);

function list(bookArr) {
  
  bookArr.forEach((element, index) => {
    create_element(element.title, element.author, index)
  });

  document.getElementById("main").appendChild(book_list_main);
}

const addBook = document .querySelector("#save").addEventListener("click", function () {
    const title1 = document.querySelector("#title").value;
    const author1 = document.querySelector("#author").value;
    if (title1 == "" && author1 == "") {
      alert("Please enter the title and author");
    } else {
      const book = { title: title1, author: author1 };
     const last_index=bookArr.push(book);
      console.log(bookArr);
      create_element(title1, author1, last_index)
    }
  });
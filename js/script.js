const btn = document.getElementById("save");
const container = document.getElementById("container");

let bookArr = JSON.parse(localStorage.getItem("Books")) || [];

btn.addEventListener("click", () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");

  const titleInput = title.value;
  const authorInput = author.value;

  const book = { title: titleInput, author: authorInput };
  const bookArrSize = bookArr.push(book);

  createElement(titleInput, authorInput, bookArrSize);
  localStorage.setItem("Books", JSON.stringify(bookArr));
  location.reload();
});

const bookListMain = document.createElement("div");
bookListMain.className = "book_list_main";

const createElement = function (title, author, index) {
  const bookListSub = document.createElement("div");
  bookListSub.id = index;
  bookListSub.className = "book_list_sub";
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Remove";
  var btnId = "btn_remove" + index;
  btnRemove.id = btnId;
  btnRemove.className = "btn_remove";
  bookListSub.appendChild(bookTitle);
  bookListSub.appendChild(bookAuthor);
  bookListSub.appendChild(btnRemove);
  bookListMain.appendChild(bookListSub);
};

function list(arr) {
  arr.forEach((element, index) => {
    createElement(element.title, element.author, index);
  });
  container.appendChild(bookListMain);
}

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("btn_remove")) {
    var btnRemoveId = e.target.id;
    var parentId = btnRemoveId.charAt(btnRemoveId.length - 1);
    var parent = document.getElementById(parentId);
    parent.remove();
    index = Number(parentId) + 1;
  }
});

list(bookArr);

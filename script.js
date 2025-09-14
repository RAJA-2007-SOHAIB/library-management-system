

const bookDetails = function () {
    let book = {};
    const title = document.querySelector("#Book-Title").value;
    const author = document.querySelector("#author").value;
    const type = document.querySelector("#type").value;
    const quantity = document.querySelector("#quantity").value;
    book.title = title;
    book.author = author;
    book.type = type;
    book.quantity = quantity;
    return book;
}

const checkDetails = function (book) {
    if (!book.title) {
        return false;
    } return true;
}


const appendBook = function (book) {
    if (checkDetails(book)) {
        const container = document.querySelector(".book-container");
        let bookList = document.createElement("ul");
        bookList.classList.add("fields");
        for (let detail in book) {
            const li = document.createElement("li");
            li.textContent = book[detail];
            bookList.appendChild(li);
        }
        const li = document.createElement("li");
        const del = document.createElement("button");
        del.classList.add("delete");
        del.textContent = "Delete";
        li.appendChild(del);
        bookList.appendChild(li);
        container.appendChild(bookList);
        deleteListener(del);
    }
}

const addBook = function () {
    const addButton = document.querySelector(".add");
    addButton.addEventListener("click", event => {
        appendBook(bookDetails());
    })
}

const clear = function () {
    const container = document.querySelector(".book-container");
    container.textContent = "";
}

const clearAll = function () {
    const button = document.querySelector(".yellow");
    button.addEventListener("click", event => {
        clear();
    })
}

const deleteListener = function (btn) {
    
    btn.addEventListener("click", event => {
        const ul = event.target.parentElement.parentElement;
        const container = ul.parentElement;
        container.removeChild(ul);
    })
}

addBook();
clearAll();


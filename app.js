const wrapper = document.getElementById("wrapper");
console.log(wrapper)

const title = document.getElementsByClassName("title");
console.log(title)

console.log(Array.isArray(Array.from(title)))

let head = document.getElementsByTagName("header")
console.log(head)

//const bookList = document.querySelector("#book-list")

//const bookList = document.querySelectorAll("#book-list ul li .name")
// bookList.forEach((book) =>{
//     console.log(book.textContent)
// })

//bookList.forEach((book) =>{
    //book.textContent += "(test)";
   // console.log(book.textContent)
//})
//console.log(bookList[0].innerHTML)

const addBook = document.querySelector("#add-book ");
console.log(addBook)
//console.log(addBook.textContent)
//or
console.log(addBook.lastElementChild.textContent)
console.log(addBook.parentElement)
console.log(addBook.previousElementSibling)

const bookList = document.querySelector("#book-list ul")
bookList.addEventListener('click',(e)=>{
    console.log(e)
    let classname = e.target.className
    console.log(classname)
    if(Object.is(classname, "delete")){
        let li = e.target.parentElement
        bookList.removeChild(li)
    }
})

const searchBook = document.forms["search-books"];
const listOfBooks = document.querySelectorAll('#book-list li .name')
console.log(searchBook)
console.log(listOfBooks)
searchBook.addEventListener('keyup', function (e){
    let inputText = e.target.value.toLowerCase()
    console.log(inputText)

    listOfBooks.forEach((book)=> {
        let title = book.textContent.toLowerCase()
        let isIncludeInputText = title.includes(inputText)
        let parentNode  = book.parentNode;
        if (isIncludeInputText){
            parentNode.style.display = "block"
        }
        else {
            parentNode.style.display = "none";
        }
    })
})


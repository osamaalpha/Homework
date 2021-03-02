//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

function createBookList(books) {
  const bookDiv =document.querySelector("#bookList")
  bookDiv.style.padding="20px"
  // your code goes in here, return the ul element
  books.forEach(element => {
    const title=document.createElement("p")
    const text=document.createTextNode( element.title+ ' '+element.author)
    const list =document.createElement("li")
    const unList =document.createElement("ul")
    const image =document.createElement("img")
    if(element.author==="Don Norman"){
    image.src = "assets/the_design_of_everyday_things.jpg"
    image.alt="the design of every things"
    bookDiv.appendChild(image)
    }else if (element.alreadyRead) {
      unList.style.backgroundColor="green"
    }else{
      unList.style.backgroundColor="red"
    }
    if(element.author==="Brian Christian"){
      image.src = "assets/the_most_human_human.jpg"
      image.alt="the most human human"
      bookDiv.appendChild(image)
    }else if (element.alreadyRead) {
      unList.style.backgroundColor="green"
    }else{
      unList.style.backgroundColor="red"
    }
    if(element.author==="Andrew Hunt"){
      image.src = "assets/the_pragmatic_programmer.jpg"
      image.alt ="the pragmatic programmer"
      bookDiv.appendChild(image)
    }else if (element.alreadyRead) {
      unList.style.backgroundColor="green"
    }else{
      unList.style.backgroundColor="red"
    }
    list.appendChild(title)
    unList.appendChild(list)
    title.appendChild(text)
    unList.style.display="inline-grid"
    unList.style.margin="10px"
document.body.appendChild(unList)
   } )
}

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

createBookList(myBooks);


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
  const unList =document.createElement("ul")
  
  for (const ele of books){
    const image =document.createElement("img")
    const list =document.createElement("li")
    const text=document.createTextNode( ele.title+ ' '+ele.author)
    const title=document.createElement("p")
    if(ele.author==="Don Norman"){
      image.src = "assets/the_design_of_everyday_things.jpg"
      image.alt="the design of every things"
      list.appendChild(image)
      }if (ele.alreadyRead) {
        list.style.backgroundColor="green"
      }else{
        list.style.backgroundColor="red"
      }
      if(ele.author==="Brian Christian"){
        image.src = "assets/the_most_human_human.jpg"
        image.alt="the most human human"
        list.appendChild(image)
      } if (ele.alreadyRead) {
        list.style.backgroundColor="green"
      }else{
        list.style.backgroundColor="red"
      }if(ele.author==="Andrew Hunt"){
        image.src = "assets/the_pragmatic_programmer.jpg"
        image.alt ="the pragmatic programmer"
        list.appendChild(image)
      }
      if (ele.alreadyRead) {
        list.style.backgroundColor="green"
      }else{
        list.style.backgroundColor="red"
      }
      title.appendChild(text)
      list.appendChild(title)
      unList.appendChild(list)
      image.style.width="200px"
  }
  unList.style.display="flex"
  unList.style.justifyContent="space-around"
  unList.style.listStyle="none"
 
  return unList 
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
const ulElement=createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);






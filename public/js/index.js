const fetchFunc = {
  listOfBooks: [],

  getBooks: function(){
    return fetch('/api/books')
      .then(
        response => response.json()
      )
      .then( (res)=>{
        this.listOfBooks = res.books.map((book) =>{
          return { 
            title: book.bookTitle, 
            comments: book.comments,
            date: book.dateCreated,
            id: book._id
          }
        })
      })
      .catch( err => console.log(err) );
  },

  addBook: function(bookTitle){

    const options = {
      method: 'POST',
      body: JSON.stringify({bookTitle}),
      headers: {'Content-Type': 'application/json'}
    };

    return fetch('/api/books', options)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
      return data;
      })
      .catch((err)=>{
        console.log(err);
      });
  },

  deleteAllBooks: function(){
    alert('Okay then...');

    const options = {
      method: 'DELETE'
    }

    return fetch('/api/books', options)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
      return data;
      })
      .catch((err)=>{
        console.log(err);
      });
  },
  addComment: function(id, comment){
    const options = {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {'Content-Type': 'application/json'}
    }

    fetch(`/api/books/${id}`, options)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
      return data;
      })
      .catch((err)=>{
        console.log(err);
      });
  }
};

const renderFunc = ()=>{
  const list = fetchFunc.listOfBooks
  console.log(list)
  for (let i = 0; i < list.length; i++){
    const div = document.createElement('div');
    const h3 = document.createElement('h2');
    const p = document.createElement('p');
    const ul = document.createElement('ul');
    const formEl = document.createElement('form');
    const inputField = document.createElement('input');
    const inputSubmit = document.createElement('input');


    const comments = commentRender(list[i]);
    let bookId = list[i].id;

    //getters
    div.setAttribute('class', 'book-container');
    formEl.setAttribute('id', bookId);
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('name', 'commentForm');
    inputField.setAttribute('ref', 'commentForm');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('name', 'commentbutton');

    //event handling
    formEl.setAttribute('onsubmit', 'commentHandler(this)')



    h3.innerText = list[i].title;
    p.innerText = `${list[i].comments.length} comments`;

    formEl.appendChild(inputField);
    formEl.appendChild(inputSubmit);

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(ul);
    // if (comments !== []){
    //   div.appendChild(comments);
    // }
    div.appendChild(formEl);

    document.getElementById('display').appendChild(div);

  }
}

const commentRender = (book)=>{
  let result = [];
  for (let i = 0; i < book.comments.length; i++){
    let li = document.createElement('li')
    li.innerText = book.comments[i];
    result.push(li);
  }
  return result;
};

function commentHandler(id){
  const comment = id.childNodes[0].value;
  const bookId = id.id;
  fetchFunc.addComment(bookId, comment)
}

const form = {   
  addButton: document.getElementById('newBook'),
  addForm: document.getElementById('bookTitleToAdd'),
  deleteAllButton: document.getElementById('deleteAllBooks'),
  commentButton: document.getElementsByName('commentButton'),
  commentForm: document.getElementsByName('commentForm')
};

const init = ()=>{

  fetchFunc.getBooks();
  setTimeout(function(){renderFunc()}, 750)

  form.addButton.addEventListener('click', (e)=>{
    e.preventDefault();
    fetchFunc.addBook(form.addForm.value);
    window.location.reload();
  })

  form.deleteAllButton.addEventListener('click', (e)=>{
    e.preventDefault();
    fetchFunc.deleteAllBooks();
    window.location.reload();
  })

};

init();
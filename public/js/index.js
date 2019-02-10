(function(){
  
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
              date: book.dateCreated
            }
          })
        console.log(this.listOfBooks);
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
        })
    }
  };
  
  const renderFunc = ()=>{
    const list = fetchFunc.listOfBooks
    console.log(list)
    for (let i = 0; i < list.length; i++){
      console.log(fetchFunc.listOfBooks[i])
      const div = document.createElement('div');
      const h3 = document.createElement('h2');
      const p = document.createElement('p');
      
      div.setAttribute('class', 'book-container');
      
      h3.innerText = list[i].title;
      p.innerText = `${list[i].comments.length} comments`;
      
      div.appendChild(h3);
      div.appendChild(p);
      
      document.getElementById('display').appendChild(div);
      
    }
  }
  
  const form = {   
    addButton: document.getElementById('newBook'),
    addForm: document.getElementById('bookTitleToAdd'),
    deleteAllButton: document.getElementById('deleteAllBooks')
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
})()// end iife
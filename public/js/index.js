(function(){
  
  const fetchFunc = {
    listOfBooks: [],
    
    getBooks: function(){
      return fetch('/api/books')
        .then(
          response => response.json()
        )
        .then( (res)=>{
          this.list = res.books.map((book) =>{
            return { 
              title: book.bookTitle, 
              comments: book.comments,
              date: book.dateCreated
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
          console.log(`Line 36 ${data}`);
        })
        .catch((err)=>{
          console.log(`line 39 ${err}`);
        })
      ;
    },
    
    deleteAllBooks: function(){
      alert('Do you really want to do that?');
    }
  };
  
  const form = {   
    addButton: document.getElementById('newBook'),
    addForm: document.getElementById('bookTitleToAdd'),
    deleteAllButton: document.getElementById('deleteAllBooks')
  };

  const init = ()=>{
    
    fetchFunc.getBooks();
    
    form.addButton.addEventListener('click', (e)=>{
      e.preventDefault();
      fetchFunc.addBook(form.addForm.value);
      // window.location.reload();
      form.addForm.value = '';
    })
    
    form.deleteAllButton.addEventListener('click', (e)=>{
      e.preventDefault();
      fetchFunc.deleteAllBooks();
    })
    
  };
  
  init();
})()// end iife
(function(){
  
  const fetchFunc = {
    listOfBooks: [],
    
    getBooks: function(){
      return fetch('/api/books')
        .then(
          function(response){
            if (response.status !== 200){
              console.log(`We could not get in touch with the library. GET-status: ${response.status}`);
            } else {
              console.log('line 13');
              console.log(response);
            }
          }
        )
    },
    
    addBook: function(bookTitle){
      
      const options = {
        method: 'POST',
        body: JSON.stringify({bookTitle}),
        headers: {'Content-Type': 'application/json'}
      };
      return fetch('/api/books', options)
        .then((response)=>{
          if(response !== 200){
            console.log(`We could not connect to the server. Response Status: ${response.status}`)
          } else {
            response.json();
          }
        })
        .then((data)=>{
          console.log(`Line 33 ${data}`);
        })
        .catch((err)=>{
          console.log(`line 36 ${err}`);
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
      window.location.reload();
    })
    
    form.deleteAllButton.addEventListener('click', (e)=>{
      e.preventDefault();
      fetchFunc.deleteAllBooks();
    })
    
  };
  
  init();
})()// end iife
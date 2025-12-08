document.getElementById('bookForm').addEventListener('submit',function(even){
         event.preventDefault();
         const title=document.getElementById('bookTitle').ariaValueMax;
         const author=document.getElementById('bookTitle').ariaValueMax;
         const tableBody=document.querySelector('#bookTable tbody');
         const newRow=tableBody.insertRow();
         const titlecell=newRow.insertcell(0);
         const author=newRow.insertcell(1);
         titlecell.textContent=title;
         authorcell.textContent=author;
         document.getElementById('bookForm').reset();
         document.getElementById('bookTile').focus();

});

This is a comic book store api with all the basic CRUD operation.The api also has a feature to display,sort and filter data.

Guide to use API is as follow.

***1.CRUD operations***

**1.1 Inserting the book data**

Endpoint: localhost:3000/insert

Method: POST

Use JSON body to insert the data via postman


**1.2 Updating the book data**

Endpoint: localhost:3000/update?attribute=price&value=300

Method: POST

Use query to mention attribute and its value that is to be updated.

**1.3 Deleting the book data**

Endpoint: localhost:3000/delete?book_name=Harry Potter

Method: DELETE

Use query to mention the name of the book that is to be deleted

____________________________________________________________________

***2.DISPLAYING AND FILTERING***


 **2.1 Displaying all the books**
 
 Endpoint : localhost:3000/display
 
 Method: GET
 
 **2.2 Displaying books with sorting a attribute**
 
 Endpoint: localhost:3000/display?attribute=price&sort=desc
 
 Method: GET
 
 Use query to mention the attribute and order of sorting
 
 **2.3 Displaying books with filter**
 
 Endpoint: localhost:3000/display/filter?attribute=price&value=350
 
 Method: GET
 
 Use query to describe the attribute and value to filter accordingly
 
_________________________________________________________________________
 
 3. ***Fetching detail about a particular book***
 
 Endpoint : localhost:3000/detail?book_name=Harry Potter
 
Use query to give name of the book whose details are to be fetched


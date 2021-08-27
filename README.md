# UFOs

### Overview 
The purpose of this project was to create a dynamic table with several filters using data stored in a JavaScript array. Bootstrap was used to customize the page. The data comprised of different UFO sightings throughtout the U.S. 

### Results
When the webpage is first loaded, all the data from the dataset is loaded into the table. Users can then change the filters to adjust what data is displayed in the table. In the app.js file, JavaScript event listeners register changes in the filters of date, city, state, country and/or shape, and then compare it to the data:

<img width="646" alt="Screen Shot 2021-08-27 at 3 53 32 PM" src="https://user-images.githubusercontent.com/85901073/131181720-2a3fb65a-a2ba-4908-8647-353bd4cdc283.png">

A user would type in the desired filters into the table on the webpage which would then update the table after pressing the return button:

<img width="256" alt="Screen Shot 2021-08-27 at 3 59 58 PM" src="https://user-images.githubusercontent.com/85901073/131182411-1b079198-63ea-45bd-9b46-7dcf7c49efb3.png">

In order to reset or update the filters, the navigation bar at the top of the page, 'UFO Sightings', needs to be clicked.  

### Summary 
One drawback of this design is that the webpage needs to be reloaded in order to reset the table. A button to reset the page should be added in the filters section so that the user doesn't have to return to the top of the page to click the navigation bar. 





















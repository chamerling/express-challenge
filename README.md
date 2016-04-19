# Express challenge

1. Fork this repository to your github account and then clone it
2. Install dependencies with 'npm install'
3. Start the server with 'npm start'. Check http://localhost:3000

## Challenge 1

Add a route to get a bike from its ID (HTTP GET). The service must return the bike as JSON.

## Challenge 2

Add a query parameter to the /bikes endpoint to only get bikes from a given country. The service must return an array of bikes as JSON or an empty array if the given country is not found in the list of bikes.

## Challenge 3

Add a route to delete a bike from its ID (HTTP DELETE). The service must return a valid HTTP code which means that the resource has been deleted.

## Challenge 4

Add a route to create a bike(HTTP PUT). The route must return an HTTP 201 code. Fill the client in client.js which will be used to call the new endpoint and create a new bike.

## Challenge 5

The bike price saved in Euro in our 'database' but we want to return the price is US dollars. Update the server code to return prices in dollars without changing the database price.

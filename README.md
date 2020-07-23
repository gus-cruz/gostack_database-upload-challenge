<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Challenge 07: Database upload
</h3>

## :rocket: About
In this challenge, I continued to develop a transaction management application, to put into practice what I have learned so far in React.js together with TypeScript, using routes and sending files by form.

### Features
- **`List API transactions`**: The `Dashboard` page displays a listing through a table, with the `title`, `value`, `type` and `category` field of all transactions that are registered in the API.

- **`Display the balance of the API`**: On the `Dashboard` page, it displays the balance that is returned from your backend, containing the grand total, together with the total of inputs and outputs.

- **`Import CSV files`**: On the `Import` page, it allows you to send a file in csv format to the backend, which will import the transactions into the database.

### Challenge test specifications
- **`should be able to list the total balance inside the cards`**: In order for this test to pass, your application must allow cards containing the total `income`, `outcome` and the total subtraction of `income - outcome` that are returned by the balance of your backend

- **`should be able to list the transactions`**: For this test to pass, your application must allow all transactions that are returned from your backend to be listed within a table.

- **`should be able to navigate to the import page`**: For this test to pass, you must allow the page change through the Header, by the button that contains the name `Importar`.

- **`should be able to upload a file`**: For this test to pass, you must allow a file to be uploaded via the drag-n-drop component on the `import` page, and it is possible to display the name of the file sent to the input.

Group 6 Currency Converter

Project Overview

The Group 6 Currency Converter is a web-based application developed as part of our Software Engineering project. The main purpose of the application is to allow users to convert amounts from one currency to another using current exchange rate data.

The application provides a simple interface where a user can enter an amount, select the currency they want to convert from, select the currency they want to convert to, and get the converted amount.

The project also includes features for saving frequently used currency pairs and keeping a record of recent conversions.

Project Information

Department: Software Engineering
Faculty: Faculty of SICT
Project: Group 6
Year: 2026

Main Features

* Currency conversion using exchange rate data
* Support for a large number of international currencies
* Selection of both source and destination currencies
* Currency swap button
* Conversion history
* Favourite currency pairs
* Copy converted result
* Clear conversion history
* Responsive design for phones, tablets and computers
* Local storage for saving favourites and conversion history

Technologies Used

The project was developed using the following technologies:

HTML

HTML was used to create the structure of the application, including the input fields, currency selection boxes, buttons, result section, history section and favourite pairs section.

CSS

CSS was used to design the application and make the interface responsive. Different layouts are used to make the application usable on both desktop and mobile devices.

JavaScript

JavaScript is responsible for the main functionality of the application. It handles currency conversion, API requests, currency selection, swapping currencies, saving favourites and managing conversion history.

Open Exchange Rates API

The application uses the Open Exchange Rates API to obtain exchange rate information and currency data.

How the Application Works

When the application starts, JavaScript requests the available currency information and exchange rates from the API.

The currencies are then loaded into the “From” and “To” selection fields.

For example, if the user selects:

From: USD
To: NGN
Amount: 100

the application uses the available exchange rates to calculate the equivalent amount in Nigerian Naira.

The result is then displayed on the page together with the current conversion rate.

Currency Conversion

The exchange rate data provided by the API uses USD as the base currency. Therefore, the application calculates conversions between two currencies using their respective USD rates.

For example:

Amount ÷ From Currency Rate × To Currency Rate

This allows the user to convert between different currency pairs.

Favourite Pairs

Users can save commonly used currency pairs by clicking the Save Pair button.

For example:

USD → NGN
GBP → NGN
EUR → USD

The saved pairs are stored in the browser’s local storage. This means that the favourite pairs remain available even after the page is refreshed.

Users can also click on a saved pair to select it again.

Conversion History

The application keeps track of recent conversions.

For example:

100 USD → 145,000 NGN
50 GBP → 95,000 NGN
200 EUR → 340,000 NGN

The history is stored using the browser’s localStorage.

The application keeps the most recent conversions and allows the user to clear the history when needed.

Responsive Design

The interface was designed to work on different screen sizes.

On larger screens, the application uses a wider layout and displays the favourite pairs and conversion history beside each other.

On smaller screens, these sections are arranged vertically to make the application easier to use on mobile devices.

Local Storage

Local storage is used for information that does not need to be sent to the server.

The application stores:

* Favourite currency pairs
* Recent conversion history

This makes it possible for the information to remain available after refreshing the browser.

Project Structure

Currency-Converter/
│
├── index.html
├── style.css
├── script.js
├── logo.png
└── README.md

index.html

Contains the structure and content of the application.

style.css

Contains the styling and responsive layout of the application.

script.js

Contains the application logic, API connection, currency conversion, history and favourite pair functionality.

logo.png

Contains the institution/project logo displayed in the header.

README.md

Contains information about the project, its features and how it works.

How to Run the Project

1. Download or clone the project.
2. Open the project folder.
3. Make sure all the files are in the same directory.
4. Open index.html using a local development server such as VS Code Live Server.
5. The currency converter will load the available currency information from the API.
6. Enter an amount and select the currencies to perform a conversion.

Limitations

The application depends on the availability of the Open Exchange Rates API. If the API is unavailable or the API request fails, exchange rates cannot be loaded.

The application also stores favourites and history in the user’s browser, so this information is specific to that browser and device.

Future Improvements

Some possible improvements for future versions include:

* Adding currency flags
* Adding a graphical exchange-rate history
* Adding automatic rate updates
* Adding user accounts
* Storing user data in a database
* Adding more detailed error messages
* Adding a dark mode
* Adding a backend server to handle API requests securely

Conclusion

The Group 6 Currency Converter demonstrates how HTML, CSS and JavaScript can be combined with an external API to build a functional web application.

The project also demonstrates some practical concepts in Software Engineering, including user interface design, API integration, data storage, responsive design and handling user input.
The application provides a simple way for users to perform currency conversions while also allowing them to save frequently used currency pairs and view their recent conversions.

Group 6

Department of Software Engineering
Faculty of SICT
2026
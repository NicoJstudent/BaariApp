# BarApp

Final project for web- and hybrid technologies in mobile programming course from Oulu University of Applied Sciences. (React Native)

BarApp is a mobile application designed to help users explore and contribute to a collection of cocktail recipes. With an intuitive interface, users can browse through a variety of cocktail drinks and also submit existing or their own custom recipes.

## Features

- **Cocktail list (Frontpage):** Access a catalog of different cocktail drinks.
- **Submit Drink:** Contribute to the app by submitting any existing or your own unique cocktail recipes.

## How to review BarApp

1. **Download / Clone:** Download or clone the repository to your local machine.
2. **Install dependencies:** Navigate to the downloaded/cloned directory in your terminal and run the following command to install the required dependencies:
    ```sh
    npm install
3. **Firebase configurations:** Please fill in the following Firebase configuration details in the `firebase/Config.js`    file:

```javascript
  apiKey: "",               // Fill in your Firebase API key
  authDomain: "",           // Fill in your Firebase authentication domain
  projectId: "",            // Fill in your Firebase project ID
  storageBucket: "",        // Fill in your Firebase storage bucket
  messagingSenderId: "",    // Fill in your Firebase messaging sender ID
  appId: ""                 // Fill in your Firebase app ID

4. **Start app:**  Run the following command to start the App:
    ```sh
    npm start
    
5. **Testing:** To test this application, you can either scan the QR code using the Expo Go app or run it in a web browser.

## Technologies Used

BarApp is developed using the following technologies:

- React Native
- Firebase (for database)


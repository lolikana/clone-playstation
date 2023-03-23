# Playstation Website Clone

This is a personal project that I created to learn more about Webpack and front-end web development. The project is a clone of the homepage of Playstation website.

Vercel: https://clone-playstation.vercel.app

In addition to creating a visually similar website, I also wanted to include some functionality to make the website dynamic. To achieve this, I used an API to fetch data about games and display them on the website. This allows users to view information about the latest games.

## Technologies
* TypeScript
* Vanilla JS
* HTML
* SCSS
* Webpack
* Swiper Library

## Features
The Playstation Website Clone includes the following features:

* A responsive layout that works on desktop and mobile devices
* A carousel of featured games using the Swiper library
* A list of games loaded from an API
* Navigation menu that changes on smaller screens

## How to Run the Project
1. Clone the repository to your local machine.
2. Install the dependencies by running npm install in the project directory.
3. Run the development server with `npm run dev'.
4. The browser should automatically open at the address http://localhost:4000.

## API Usage
The project uses the RAWG API (https://rawg.io/apidocs) to load games. You need to get an API key from the website to use it.

Once you have obtained your API key, create a .env file in the project directory and add the following line, replacing YOUR_API_KEY with your actual API key:

``RAWG_KEY=YOUR_API_KEY``

This file is included in the .gitignore file to prevent the API key from being uploaded to version control.

## Credits
This project was created by me, <a href="https://github.com/lolikana/">Thomas Guiart</a>. If you have any questions or comments, please feel free to contact me.

* Swiper library: https://swiperjs.com/
* RAWG API: https://rawg.io/
* Playstation website: https://www.playstation.com/

# PetrFindr

Repo: [https://github.com/spicecat/webjam/](https://github.com/spicecat/webjam/)  
Demo: [https://spicecat.github.io/webjam/](https://spicecat.github.io/webjam/)

## About

PetrFinr is a browser-based game where players guess the location of Petr given an image of him on at UCI.  

## How to Play
- Users will be prompted to start the game 
- They are provided a location image on the left side of the screen 
- The user must drag a pin onto the map on the screen's right side 
- Click the “Guess” button to submit their answer 
- The “Score” will reflect the accuracy of the user’s guess
    - The maximum score per guess is 100 within 30 meters (Petrs)
    - The minimum Score per guess is 0 outside of 230 meters (Petrs)
- Users are encouraged to “Play Again” to get the best score possible

## Run Locally

Clone the repo (`git clone https://github.com/spicecat/webjam.git`) and install the dependencies (`cd webjam && npm install`). Get a free MapTiler API key from [https://docs.maptiler.com/cloud/api/authentication-key/](https://docs.maptiler.com/cloud/api/authentication-key/). Add your MapTiler API key to `.env.example` and rename the file to `.env`.  Run the project with `npm start` and play the game in your browser at `localhost:3000/webjam`.

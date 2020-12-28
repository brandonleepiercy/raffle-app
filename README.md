
# Raffle Manager
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

In the global marketing arms race, giveaways and raffles are becoming more widespread as advertisers compete with each other for the attention of the consumer. The sheer volume of advertising that the average person endures through the consumption of their media of choice, has made it so that the majority of advertisements are entirely ignored and have no chance of ever registering in the consumer's mind. Giveaways give advertisers an advantage because the promise of potentially winning a very valuable item can usually pique the viewer's interest, getting through the filter that other types of advertisements cannot. 

This is a lightweight javascript/mysql application that can help an individual/organization manage a raffle. The application serves two webpages. The landing page, where people who want to enter the giveaway can submit their usernames, and another page where the manager of the raffle can view all of the entries, edit and delete the entries, as needed. Users cannot enter a blank username, and they cannot enter a username that already exists in the mysql database. The server is setup with express and the app follows the MVC paradigm. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    1. Setup the MySQL server. Copy the contents of 'app/db/schema.sql' into MySQL Workbench, and run the code. This will establish the MySQL server on your machine. NOTE: The settings in 'app/config/connection.js' will have to be updated to reflect your settings.

    2. Type "npm i" into CMD to install the neccesary packages for this repository.

    3. Type "node server.js" in into the terminal in the root directory of the repo to spin the server.

    4. Unless PORT altered, it should spin at PORT:7777, locally.

## Usage

For individuals or organizations to handle virtual 'raffle tickets' attached to a person's username. People looking to enter the raffle can enter their usernames, and the manager can view, edit and delete all of the entries from within the browser. 

## Credits

Brandon Lee Piercy

## License

MIT

## Tests

none yet

## Questions

You can contact me at b.piercy567@gmail.com in case you have any questions or concerns about this repository.
You may also reach me or browse my other repositories at my [Github Profile](https://github.com/brandonleepiercy)

<h1 align="center">Animal Quarantine – Pet Pickup Notification</h1>

<div align="center">
	:guide_dog:
</div>
<div align="center">
  <strong>Developed by Team MVP</strong>
</div>

<div align="center">
  <h3>
  	<a href="https://mvp-queue.herokuapp.com/ ">
      Website
    </a>
  	<span> | </span>
    <a href="https://devpost.com/software/pet-pickup">
      Devpost
    </a>
  </h3>
</div>

### Philosophy
Animal Quarantine is looking for a solution to assist with the heavy traffic and long lines of people coming to pick up their Hawaii inbound animals.  COVID-19 has added more complications to an already unwieldy process in that no pet owners can enter the quarantine building.  This causes owners to stand outside waiting to hear their name called on the intercom.  There is no place to wait and there isn’t protection from the sun.  We are hoping for a method to allow owners to use their smartphones to communicate their arrivals and receive a text or alert when their pet is ready to be picked up.

### Overview Solution
Pet owners can register through Google Forms and the Inspectors would match the pet microchip IDs against the owners.
When a batch of pets are ready to be released, the matched owners will receive a text message via Email-To-SMS methods.
When the owners arrive for the pickup, the Quarantine Admins will remove the person from the virtual waiting room.

### Technical Details 
This repository hosts files needed to get the existing Pet Owner Form created from Google Spreadsheets.
The data within the spreadsheet will act as the main database for all pet owner and queue entries.
All HTML forms and javascripts are currently hosted in Heroku, free of charge. But a state-owned system is required for Production.

#### Prerequisites
* Install [Git](https://git-scm.com/downloads)
* Install [Node.js (with npm)](https://nodejs.org/en/download/).

#### Quick Start
* `git clone` this repository

```bash

npm install # Install the required npm modules

npm start
```

#### Advanced Setup Guides
* Setup access to the [Google API Client(s)](docs/sheets/setup.md)
* [Enable email sending using Nodemailer](docs/mailer/setup.md)
* [Enable SMS sending using Twilio](docs/twilio/setup.md)


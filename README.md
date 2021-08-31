<h1 align="center"> Project Tracker </h1>

<h2> Project Description </h2>
<p align="center">A project to help you track your projects on Github.</p>

## Features
* Project Tracker allows you to Log yourself in using two diferent ways: using Github or signing up an email and password.
* It allows you to add your Github projects to the database providing a name, a description and a status which helps you to track if it's currently being developed or not.
* If you're not a common user, you can track down all the different users and their projects on the AdminPage.

## Technologies
* TypeScript - https://www.typescriptlang.org/
* ReactJS - https://pt-br.reactjs.org/
* Styled-Components - https://styled-components.com/
* Material-UI - https://styled-components.com/
* Firebase - https://firebase.google.com/docs
* ReactN - https://firebase.google.com/docs
* React Firebase UI - https://www.npmjs.com/package/react-firebaseui
* React Router DOM - https://reactrouter.com/web/guides/quick-start

## Setup
Before you adventure on tracking your projects, make sure you have what it takes to run this project:

* Yarn or Npm installed (Either one is fine. Depends on your preference.)
* A code editor, like VSCode
* Patience and dedication :)

## How To
<!--ts-->
  * [Clone this Repository](#clone-this-repository)
  * [Install the dependencies](#install-the-dependencies)
  * [Run this project](#start-this-project)
  * [Deploy to Firebase](#deploy-to-firebase)
<!--te-->

# Clone this Repository
First of all, you need to have this project on your local machine. You can clone this repository by open a terminal, navigate to whatever folder you want this project to be and type ```git clone "https://github.com/leohas/project-tracker.git" ```! Done! :)

# Install the dependencies
Once you have cloned this repository, you can open it in whatever code editor you want. However, you need to install all the dependencies of this project, which are written down in ```package.json``` file. To do so, you need to open a terminal and navigate to the root folder of this project. If you're using VSCode, you can use the built-in terminal as well. Type in ```npm install``` or ```yarn install``` depending on which one you're using. After some short moment, it should be all set!

# Run this project
This project has a script defined by ReactJS, - which you can view on ```package.json``` file - ```yarn(or npm) start```. This script can be run by navigating to any folder of this project and typing in this command on a terminal (Native on your OS or built-in on your code editor). By running this script you'll be initiating the server and starting the project on your localhost (default port: 3000).

# Deploy to Firebase
Once you made all the changes you want, you can deploy it to Firebase. To do so, you must first create a build by running another script defined by ReactJS, which is ```yarn(or npm) build```. Running this script will tell ReactJS to compile your code so that the Browser can understand. This will create a folder named "build" in the structure of this project. Next, you simply just need to type "firebase deploy" and the magic will happen!

# Conclusion

Well, that's all folks. Any questions or feedback, please contact me on my e-mail: leohas.dev@gmail.com!




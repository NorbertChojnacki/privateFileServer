# My private multitask server

## Table of contents

* [Introduction](#introduction)
* [Technologies](#technologies)
* [Envisaged design stages](#envisaged-design-stages)
* [Project status](#project-status)
* [Features to be seen](#features-to-be-seen)
## Introduction

My server runs on Rasberry PI 4. Its main task is to be my private file server with video player that saves point where you finished watching your film. It would have ability to create node and apache servers as well. Server would be accesible from network using VPS

## Technologies

**Project \(so far\) requires:**
* nodejs version: 14.17.6
* express4 
* express-session
* express-validator
* mariadb
* multer
* dotenv
* ejs
* argon2

## Envisaged design stages

* Creation of working login and register forms with redirection
* Creation of user's disk space preview
* Creation of working files window with custom "terminal"
* Creation of preview of files with basic text editor
* Creation of CSS styles
* Creation of ability to create node and apache servers
* Creation of management of invited users, disks and servers
* Creation of file sharing mechanism
* Establish connection and come up with procedures between VPS and my private server
* Implement SMPT server

## Project status

**Current project development status**: on finish in creating working login and register forms with redirection

## Features to be seen

* Video player that saves point where you finished watching your film
* Hiding files/folders
* Create private files/folders
* Manage users - assigning servers/disks/own space
* Sharing resources
* Option to create SMTP servers
* Hosting apache/node servers
* Accesable from network
# Endava FE Challenge

## Overview

This challenge will have the intern build a site navigation driven by an AJAX request.

Here are the guidelines for this challenge, please follow closely:

* No javascript frameworks or libraries (e.g. jQuery, Angular, React).
* Only CSS, not pre-Compilers (LESS, SASS) or mixin libraries (Compass, Bourbon, Neat, Foundation, etc.)
* Chrome compliance is all that's required.
* Code must run after the following command.
* Page should look good across desktop devices.

```
$ npm i && npm start
```

Nice to haves:

* Adherence to accessibility standards

## API

* GET /api/nav.json - returns a JSON response representing the items in the nav.

## Get Started

### Requirements
* Node.js and npm (You get both when you <a href="https://docs.npmjs.com/getting-started/installing-node">install Node.js</a>.)

### Install the project locally
```
git clone https://github.com/felipevila/basic-fe-challenge.git
cd basic-fe-challenge
npm install
npm start
```

## Design Specifications

### Prototype
https://invis.io/8AFZRC7Z7DR

### Measurements

Measurements are specified in pixels. Dimensions are fluid unless specified.

### Interactions

* On hover, Primary Navigation reverses color (white/orange).
* On click, if item contains a URL, Primary Navigation navigates to a new page.
* On click, if item contains other items, Secondary Navigation appears
* Menu appears containing Secondary Navigation.
* Translucent mask appears over content, behind menu.
* On click, Secondary navigates to a new page.
* On click outside of menu, menu and mask are hidden.

### Typography

Primary Navigation 21/48 Oswald Bold
Secondary Navigation 16/48 Oswald Semi-Bold
Headline (Desktop) 120/132 Oswald Bold
Body Copy (Desktop) 24/36 Oswald Regular

### Color

* **Endava Orange** #ff3f10
* **Light Gray** #eee
* **Translucent Black** rgba(0, 0, 0, 0.5)


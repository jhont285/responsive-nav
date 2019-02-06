# Endava FE Responsive Nav Challenge

[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)

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

* GET /public/data/nav.json - returns a JSON response representing the items in the nav.

## Get Started

### Requirements
* Node.js and npm (You get both when you <a href="https://docs.npmjs.com/getting-started/installing-node">install Node.js</a>.)

### Install the project locally
```
git clone https://github.com/felipevila/responsive-nav.git
cd responsive-nav
npm install
npm start
```

## Design Specifications

### Assets
<a href="https://github.com/felipevila/responsive-nav/tree/master/assets">Design Assets</a>

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
Font: https://fonts.google.com/specimen/Oswald

#### Desktop

* Primary Navigation: 24/48 Oswald Bold
* Secondary Navigation 17/36 Oswald Regular Italic
* Search Placeholder: 14/24 Oswald Regular Italic
* Headline 94/94 Oswald Regular Italic
* Body Copy 18/24 Arial

#### Mobile

* Primary Navigation: 20/40 Oswald Bold
* Secondary Navigation 14/28 Oswald Regular Italic
* Headline 32/39 Oswald Regular Italic
* Body Copy 14/21 Arial

### Color

* **Endava Orange** #ff3f10
* **Light Gray** #eee
* **Translucent Black** rgba(0, 0, 0, 0.5)


<h1 align="center"> Studio Ghibli Movies </h1>

> Pick a movie to check info about it

<span  align="left">
  <img  src="https://media.giphy.com/media/dEdgB3euossMg/giphy.gif"  height="135" alt="ghibli">
</span>
<br>

## Features 👾
* Toggle Light/Dark mode

## Technologies :mag_right:
* TypeScript
* React
* Css 

## Api Reference
The [Studio Ghibli API](https://ghibliapi.herokuapp.com/) catalogs the people, places, and things found in the worlds of Ghibli.

## Useful resources
* [Toggle Dark/Light Mode](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)
* [classList Property](https://www.w3schools.com/jsref/prop_element_classlist.asp) 
* [Null vs Undefined - Typescript](https://basarat.gitbook.io/typescript/recap/null-undefined)

## Why?
Over the past few years, TypeScript has gain massive popularity among frontend developers.
<br>
At the same time, as an admire of Ghibli movies I really wanted to use the Studio Ghibli API
<br>
in one of my projects, I therefore decided to implement it in this project while exploring
<br>
one more new layer in Javascript world.

## What I learned
* How to add a class to body and how to toggle between classes.

```javascript
document.body.classList.remove("dark-mode")
document.body.classList.add("light-mode")
```
<br>

* TypeScript has a special syntax for removing null and undefined from a type.
* If you are sure that these objects or fields exist, the postfix <strong>!</strong> lets you short circuit the nullability.

```javascript
<img src={ghibliImages[movie?.title!]} alt="img" />
```

## Installing / Getting started 👨‍🏭

Prerequisite to run the following commands <strong>[Node.js](https://nodejs.org/en/download/)</strong>, 
                           <strong>[Git](https://git-scm.com/downloads)</strong>, 
                           <strong>[Yarn](https://yarnpkg.com/)</strong>.
<br>
```
git clone https://github.com/romeiro-bru/typescript-ghibli-movies.git
yarn
```

Run in the project directory ```yarn start```

Open ```http://localhost:3000``` in your browser

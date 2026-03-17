# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Aperçu](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript


### What I learned
This project helped me better understand how to fetch and display dynamic data from a JSON file and update the UI based on user interaction.

```js
fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error loading data");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

I also improved my understanding of:

- DOM manipulation
- Event handling
- Working with datasets (data-* attributes)
- Updating UI dynamically

### Continued development

In future projects, I want to focus on:

- Writing cleaner and more maintainable JavaScript
- Improving performance when updating the DOM
- Using more advanced JavaScript features (like modules and async/await)
- Improving accessibility and responsiveness

## Author

- Frontend Mentor - [@MAXbcv](https://www.frontendmentor.io/profile/MAXbcv)




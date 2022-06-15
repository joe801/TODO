# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](/images/sample.png)

### Links

- Solution URL: [TODO repo](https://your-solution-url.com)
- Live Site URL: [TODO](https://your-live-site-url.com)

## My process

### Built with

- HTML markup
- CSS custom properties
- javascript
- jquery

### What I learned
 
```js
function list_count(){
  let list = todoList.children.length;
  let counts = eval(7 - list);
  document.getElementById("countdown").innerHTML = counts;
}
const task_list_disp = document.createElement("input");
      task_list_disp.classList.add("disp");
      task_list_disp.type = "text";
      task_list_disp.value = task;
      task_list_disp.setAttribute("readonly", "readonly");
const task_list = document.createElement("div")
      task_list.classList.add("list")
```

### Continued development

I want to work on making use of the right html5 markup semantics.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [Joecrypt](https://www.frontendmentor.io/profile/joe801)
- Twitter - [@Joecrypt_](https://www.twitter.com/Joecrypt_)
- Linkedin - [@joecrypt](https://wwww.linkedin.com/in/joecrypt)

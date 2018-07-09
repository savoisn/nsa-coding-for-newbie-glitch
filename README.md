# Atelier Démystification du code

Quick Start : 

First let's Remix this project !
This project is own by me :), so what would be nice is that you work on your own project. And even reuse it after this session :)

Just click on the name of the project (nsa-code-example-cacib), on the top left of the screen, then click "Remix This"

![remix-project](https://cdn.glitch.com/6e6aa932-164a-41d0-b3cc-84581fceab9e%2FSelection_071.png?1529929566534)

Now you should be on your own project, you should see something like this :

![remixed-project](https://cdn.glitch.com/6e6aa932-164a-41d0-b3cc-84581fceab9e%2FSelection_072.png?1529929574164)


# Short Explanation

## What is this tool:
Glitch is an online project manager for javascript application.
You have all eared about javascript, the language of the Web.
Glitch gives us a sandbox to try things, and play with code !

That's exactly what we want to do in this workshop.

## This file
The README.md file is now the defacto source of information about an opensource project.

It's the file where information about how a project work, can be run, can be changed is detailed.

Once again, that's exactly where you want to be to start the workshop. (amazing isn't it?...)

## A small tour
on your left we have the list of file of our project
on your right you have a big code editor pannel,
if you want to 
don't worry, we don't need to know what all those files are... 

## About this project
We are going to build (or finish building) a web application, that can send a mail !

So let's start !

### First : Look the project !

Click on the Show Button 
A new window will open and you will see the webapp as your code describe !
Each time you change something in the code, the webapp will reflect your changes automatically when you change the code.

![show-live](https://cdn.glitch.com/41abed8e-fccc-439a-b1d4-3db061556a3d%2FScreenshot%20from%202018-07-06%2011-39-13.png?1530870026957)

What we see is a skeleton :

![skeleton](https://cdn.glitch.com/41abed8e-fccc-439a-b1d4-3db061556a3d%2FScreenshot%20from%202018-07-06%2011-48-01.png?1530870504699)

If we want to send a mail... we are missing quite a lot of thing !

At least a mail title ! let's add it !

Yeah right... but How !??!

let's look inside the actual code `public/index.html` on the left pannel: 

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="main.css">
  <script src="bundle.js" async></script>
</head>

<body>
  <h2>Let's send a mail with a webapp!</h2>
  <div id="Contact">
    To : <input id="to" name="to" type="text" value=""/>
  </div>
  <input type="button" value="Send" onclick="sendEmail()"/>

</body>
</html>
```
This is an HTML file !
We see 2 big parts: `head` and `body`, and all that inside an `html` tag 

Focus on the `body` for now. (we'll come back to `head` later)
in the `body` - 3 parts : `h2`, `div`, `input` : 

- H2 means Header size 2 we have different size... h1 h2 h3 h4 h5 etc...
- Div means division of the page
  - inside our `div` we have a little `input`
- Input means input...(yeah!) a way for the user to input something and exchange information with the app !

### Next Step : Create an input for the title of the mail :

Based on the the existing code, create the title of the mail!

<details>
  <summary>show answer</summary>
  
  ```html
  <div id="Title">
   Title : <input id="title" name="title" type="text" value="DWARF!"/>  
  </div>
  ```

</details>


### Next Step : Create something for the body :

- first step : use an input 

<details>
  <summary>show answer</summary>

  <pre>
    <div id="Title">
     Title : <input id="title" name="title" type="text" value="DWARF!"/>  
    </div>
  </pre>

</details>

Good but not nice, we want a mail with more than 1 line !

- second step : use a textarea

a `textarea` is nearly (...) like an input
let's look at the `input` definition.

an input has properties : 

- id : it's the technical identifier
- name : the name for us developpers :)
- type : the type of the input... we know 2 : text and button
- value : the default value... it will be changed by the user ! (you can try on an input text if you are completlty crazy !!!!)

the textarea as nearly the property with a few additions  : 
- rows : the number of line of text
- cols : the number of character per line (colons)


<details>
  <summary>show answer</summary>
  
  <div id="Body">
    Body : <textarea  id="body" name="body" type="text" rows="30" cols="100" ></textarea>
  </div>

</details>

body is very strangely placed...
and everything is not really aligned
let's fixe that.

### HTML tables to the rescue

### little bit of styling
change color
vertical align

### what we built so far.
static template with more or less style

### first JavaScript
let's print something with alert
define a variable

explain console.log()
define an object

document.getElememtById

explain rest api
show a swagger

explain api to send mail
show contract 

fetch 

explain promise and asynchronousness

explain if else if else
handle return



---

© 2018 NSA Corps - TalanLabs.

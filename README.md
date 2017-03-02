### Creator: Devin Beliveau

#### Project Name: NYT Bookshelf

#### Client: Brenna

### Deliverables:  

##### Frameworks / Technologies

This app is built with `React` / `Redux`, `Router3`, `localStorage` and `Sass`. Phase two will involve either Firebase or a custom back end.

##### MVP Progress

Currently a user can select one of the popular NYT Bestseller lists and view the title, author, description and book cover (if available). Favorites are saving into localStorage and displaying appropriately.

##### What is on fire/what are you having trouble with?

### Screen Shots of Current State Of App  
[MVP Progress](http://devinmarieb-trends.tumblr.com/image/157615546215)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:8080`  

## Reflection

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?

#### Example:  

This was a week and a half long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

I originallly set out to build an MVP of a NYT Bestseller list app that allowed users to look over the books and save favorites. This goal was met. Phase two is going to utilize web scraping to get prices of books and allow users to set up alerts for when prices drop. I also want to set up `Firebase` for a backend so users can log in, instead of just utilizing their local storage. 

This project was challenging because I didn't have a good handle on `Redux` when I started, but it was a learning goal I had. It took a while to get used to the cycle of logic, but I feel a lot better about `Redux` after this project. 

localStorage was harder to work with than I originally thought. I haven't really worked with localStorage since Mod1 and going back to it was really helpful. I also still have one bug with styling favorites if they are still in localStorage.

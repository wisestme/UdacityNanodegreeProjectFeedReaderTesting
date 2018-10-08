# Title: Feed Reader Tester

## Author: Nwagwu Chijioke

## Project Overview

This project is about a web-based application that reads RSS feeds. This project was actually abandoned after it was started by the original developer. The originator already included [Jasmine](http://jasmine.github.io/) and started writing their first test suite. That is where I am picking up from.

## Purpose: 
* ### Part of the requirements for completing my Nanodegree Google scholarship program at Udacity.

* ### To display my ability to traverse and manipulate the DOM.

* ### To showcase my web development skillset.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they even start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Tests are to make sure future feature development doesn't break existing features, it's an important skill to have!


## Horned skill and benefits.

In the course of this project, i was able to sharpen my ability to write tests against a pre-existing application, testing underlying business logic of the application. I also sharpened my ability to handle events and manipulate the DOM. I also realised that I still have a lot of room for improvement.

As a newbie in coding, I m super excited learning such skills and it is making confident of stepping out as I m already seeing areas where such skill could be applied.


# Method

1. I reviewed the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric).
2. I Reviewed the functionality of the application within my browser.
4. I Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. I Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and reviewed the [Jasmine documentation](http://jasmine.github.io).
6. I Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in my application.
7. I Returned the `allFeeds` variable to a passing state.
8. I wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. I wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. I wrote a new test suite named `"The menu"`.
11. I wrote a test that ensures the menu element is hidden by default.
12. I wrote a test that ensures the menu changes visibility when the menu icon is clicked. I included two expectations to this test to ensure that the menu displays when clicked and hides when clicked again.
13. I wrote a test suite named `"Initial Entries"`.
14. I wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. I wrote a test suite named `"New Feed Selection"`.
16. I wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. I tested all my tests by intentionally introducing errors into my codes to ensure all tests are actually working then i returned the tests to the error free states.

## Acknowledgement
### Feed Reader Walkthrough, Part 3 – Menu Test Suite – Matthew Cranford
### Feed Reader Walkthrough, Part 4 – Async Tests – Matthew Cranford

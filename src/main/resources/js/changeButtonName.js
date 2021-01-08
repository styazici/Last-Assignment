//This is how you get an element with CSS selector, do some js to change text
AJS.$("cssselector here");


// Note: ID of the Create button is create_link in my jira server.

var tag = document.getElementById("create_link");
tag.textContent = "New Button";
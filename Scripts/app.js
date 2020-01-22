"use strict";

/**
 * Lab 1 app.js
 * Author: Evan Palmer
 * Student ID: 100699087
 * Date Completed: 1/22/2020
 */

 //IIFE
 (function(){

    Start();

    function Start()
    {
        console.log("Program started!");
        Main();
    }

    function Main()
    {
       //Section 2
        //Question A
        let navItem = document.getElementById("products"); //create a refrence to the products element
        console.log(navItem);
        navItem.lastChild.lastChild.textContent = " Projects"; //Change the text for products to projects

        //Question B
        let nodeToClone = document.getElementById("contactUs"); //create a refrence to the contactUs element
        let parentNode = nodeToClone.parentNode; //create a refrence to the parent of the nodeToClone
        let newNavItem = nodeToClone.cloneNode(true); //clone the contactUs refrence
        console.log(newNavItem);
        newNavItem.lastChild.lastChild.textContent = " Human Resources"; //change the text content of the new clone
        parentNode.insertBefore(newNavItem, nodeToClone); //insert the new HR node

        //Question C
        let fixedBottom = document.createElement("nav"); //create a new nav element named fixedBottom
        fixedBottom.setAttribute("class", "navbar fixed-bottom navbar-light bg-light"); //set the class attribute
        let anchor = document.createElement("a"); //create a new a element named anchor
        anchor.setAttribute("class", "navbar-brand"); //set the class attribute
        anchor.textContent = "\u00A9CopyRight 2020"; //set the text content
        fixedBottom.appendChild(anchor); //append the a tag to the fixedBottom element
        console.log(fixedBottom); 

        body.appendChild(fixedBottom); //append the new nav bar to the body of the document
    }



 })();
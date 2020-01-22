"use strict";

/**
 * Lab 1 app.js
 * Author: Evan Palmer
 * Date: 1/20/2020
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
        let fixedBottom = document.createElement("nav");
        fixedBottom.setAttribute("class", "navbar fixed-bottom navbar-light bg-light");
        let anchor = document.createElement("a");
        anchor.setAttribute("class", "navbar-brand");
        anchor.textContent = "\u00A9CopyRight 2020";
        fixedBottom.appendChild(anchor);
        console.log(fixedBottom);

        body.appendChild(fixedBottom);
    }



 })();
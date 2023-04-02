// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: March 2023
// This file contains the JS functions for index.html


"use strict";
/**

This function calculates the volume and surface area of a sphere.
*/
function calculatesphere() {
// calculations of the volume and surface area of a sphere
const PI = 3.1416;

let radius = parseFloat(document.getElementById("radius-of-sphere").value);

// calculating the volume of the sphere
let volume = 4/3 * PI * Math.pow(radius, 3);

// calculating the surface area of the sphere
let surfaceArea = 4 * PI * Math.pow(radius, 2);

// display of the volume and surface area of the sphere
document.getElementById("calc").innerHTML = "The volume of the sphere is: " + volume.toFixed(2) + " cm³ and the surface area of the sphere is: " + surfaceArea.toFixed(2) + " cm².";
}
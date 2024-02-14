//import express from "express";
//console.log(express);

import { priceCalculation as getPrice } from "./math.js";
const price = getPrice(200);

console.log(price);

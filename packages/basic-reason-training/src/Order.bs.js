// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';


function stringOfSize(size) {
  switch (size) {
    case 0 : 
        return "small";
    case 1 : 
        return "medium";
    case 2 : 
        return "large";
    case 3 : 
        return "super large";
    
  }
}

function improvedCreateOrder(order) {
  switch (order.tag | 0) {
    case 0 : 
        return "jeans " + stringOfSize(order[0]);
    case 1 : 
        return "shirt " + stringOfSize(order[0]);
    case 2 : 
        return "jacket " + stringOfSize(order[0]);
    
  }
}

exports.stringOfSize = stringOfSize;
exports.improvedCreateOrder = improvedCreateOrder;
/* No side effect */
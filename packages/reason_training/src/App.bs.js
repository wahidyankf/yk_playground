// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var Text$ReactTemplate = require("./Text.bs.js");
var View$ReactTemplate = require("./View.bs.js");

var component = ReasonReact.statelessComponent("App");

function make(textValue, optionalTextValue, clothSize, order, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              var match = textValue > 100;
              var isNumberMoreThanOneHundred = match ? true : false;
              var optionalTextValueAsString = optionalTextValue !== undefined ? optionalTextValue : "there is no text";
              var getClothSizeAsString = function (size) {
                switch (size) {
                  case 0 : 
                      return "small";
                  case 1 : 
                      return "medium";
                  case 2 : 
                      return "large";
                  
                }
              };
              var orderAsString;
              orderAsString = order.tag ? "not jeans" : "Jeans with size: " + getClothSizeAsString(order[0]);
              return ReasonReact.element(undefined, undefined, View$ReactTemplate.make(/* array */[
                              ReasonReact.element(undefined, undefined, Text$ReactTemplate.make("test lagi", /* array */[])),
                              ReasonReact.element(undefined, undefined, Text$ReactTemplate.make(String(textValue), /* array */[])),
                              isNumberMoreThanOneHundred ? ReasonReact.element(undefined, undefined, Text$ReactTemplate.make("more than 100", /* array */[])) : ReasonReact.element(undefined, undefined, Text$ReactTemplate.make("less than or equal 100", /* array */[])),
                              ReasonReact.element(undefined, undefined, Text$ReactTemplate.make(optionalTextValueAsString, /* array */[])),
                              ReasonReact.element(undefined, undefined, Text$ReactTemplate.make("cloth size: " + getClothSizeAsString(clothSize), /* array */[])),
                              ReasonReact.element(undefined, undefined, Text$ReactTemplate.make(orderAsString, /* array */[]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
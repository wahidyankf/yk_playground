// ReactDOMRe.renderToElementWithId(
//   <Component1 message="Hello! Click this text!" />,
//   "index1",
// );

// ReactDOMRe.renderToElementWithId(<Component2 greeting="Hello!" />, "index2");

ReactDOMRe.renderToElementWithId(
  <App
    textValue=100
    optionalTextValue="optional text!"
    clothSize=S
    order={Jeans(L)}
  />,
  "index3",
);
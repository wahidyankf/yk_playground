let component = ReasonReact.statelessComponent("Text");

let make = (~value, _children) => {
  ...component,

  render: _self => {
    <div> {ReasonReact.string(value)} </div>;
  },
};
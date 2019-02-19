let component = ReasonReact.statelessComponent("View");

let make = children => {
  ...component,

  render: _self => <div> ...children </div>,
};
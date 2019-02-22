let component = ReasonReact.statelessComponent("App");

type gender =
  | Male
  | Female;

type orderSize =
  | S
  | M
  | L
  | XL
  | XXL
  | XXXL;

type orderItem =
  | Shirt(orderSize)
  | Jeans(orderSize)
  | Jacket(orderSize)
  | Trousers(orderSize);

type order = list(orderItem);

let make = (~buyerName, ~buyerGender, ~order=?, _children) => {
  ...component,

  render: _self => {
    let honorificTitle =
      switch (buyerGender) {
      | Male => "Mr."
      | Female => "Mrs."
      };

    let getOrderSizeAsString = orderSize => {
      switch (orderSize) {
      | S => "small"
      | M => "medium"
      | L => "large"
      | _ => "very large"
      };
    };

    let orderAndSizeConjunction = " with size ";

    let getOrderSentence = (type_, size) => {
      type_ ++ orderAndSizeConjunction ++ getOrderSizeAsString(size) ++ ", ";
    };

    let getOrderFromList = item =>
      switch (item) {
      | Shirt(sv) => getOrderSentence("shirt", sv)
      | Jeans(sv) => getOrderSentence("jeans", sv)
      | Jacket(sv) => getOrderSentence("jeans", sv)
      | Trousers(sv) => getOrderSentence("jeans", sv)
      };

    let listOfOrders =
      switch (order) {
      | Some(loo) => loo
      | None => []
      };

    Js.log(List.length(listOfOrders));

    <View>
      <Text
        value={
          "Welcome to our online store "
          ++ honorificTitle
          ++ " "
          ++ buyerName
          ++ "!!!"
        }
      />
      <Text value="You order: " />
      {List.length(listOfOrders) > 0 ?
         listOfOrders
         ->List.map(item => ReasonReact.string(getOrderFromList(item)), _)
         ->Array.of_list
         ->ReasonReact.array :
         <Text value="Nothing" />}
    </View>;
  },
};
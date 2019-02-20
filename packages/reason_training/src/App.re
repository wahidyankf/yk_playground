let component = ReasonReact.statelessComponent("App");

type clothSize =
  | S
  | M
  | L;

type clothType =
  | Jeans(clothSize)
  | Shirt(clothSize);

let make =
    (~textValue: int, ~optionalTextValue=?, ~clothSize, ~order, _children) => {
  ...component,

  render: _self => {
    let isNumberMoreThanOneHundred = textValue > 100 ? true : false;

    let optionalTextValueAsString =
      switch (optionalTextValue) {
      | Some(v) => v
      | None => "there is no text"
      };

    let getClothSizeAsString = size =>
      switch (size) {
      | S => "small"
      | M => "medium"
      | L => "large"
      };

    let orderAsString =
      switch (order) {
      | Jeans(v) => "Jeans with size: " ++ getClothSizeAsString(v)
      | _ => "not jeans"
      };

    <View>
      <Text value="test lagi" />
      <Text value={string_of_int(textValue)} />
      {isNumberMoreThanOneHundred ?
         <Text value="more than 100" /> :
         <Text value="less than or equal 100" />}
      <Text value=optionalTextValueAsString />
      <Text value={"cloth size: " ++ getClothSizeAsString(clothSize)} />
      <Text value=orderAsString />
    </View>;
  },
};
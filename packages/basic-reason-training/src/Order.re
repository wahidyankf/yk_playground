type size =
  | S
  | M
  | L
  | XXXL;

type orderType =
  | Jeans(size)
  | Shirt(size)
  | Jacket(size);

let stringOfSize = size => {
  switch (size) {
  | S => "small"
  | M => "medium"
  | L => "large"
  | _ => "super large"
  };
};

let improvedCreateOrder = order => {
  switch (order) {
  | Jeans(v) => "jeans" ++ " " ++ stringOfSize(v)
  | Shirt(v) => "shirt" ++ " " ++ stringOfSize(v)
  | Jacket(v) => "jacket" ++ " " ++ stringOfSize(v)
  };
};
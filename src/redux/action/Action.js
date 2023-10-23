export const Add = (data) => {
  // console.log("data",data)
  return {
    type: "Add-Todo",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const Delete = (num) => {
  // console.log("num", num);

  return {
    type: "delete-Todo",
    payload: num,
  };
};
export const updateValue = (upvalue) => {
  console.log("up",upvalue);

  return {
    type: "UPDATE_ITEM",
    payload: upvalue,
  };
};

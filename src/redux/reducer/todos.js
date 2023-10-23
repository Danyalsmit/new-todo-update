import { removeItemOnce, updateItemOnce } from "../../helper";
const initialData = {
  list: [],
};

export const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "Add-Todo":
      const { id, data } = action.payload;
      //  console.log("action.payload",action.payload)
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "delete-Todo":
      const dlt = removeItemOnce(state.list, action.payload);

      return {
        ...state,
        list: dlt,
      };
    case "UPDATE_ITEM":
      const uarray = updateItemOnce(state.list, action.payload);

      return {
        ...state,
        list: uarray,
      };

    default:
      return state;
  }
};

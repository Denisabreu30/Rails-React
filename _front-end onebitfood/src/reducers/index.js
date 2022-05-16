import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReducer";
import orderReducer from "./orderReducer";
import ModalReducer from "./modalReducer";
import addressReducer from "./addressReducer";
import newOrderReducer from "./newOrderReducer";

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  orderState: orderReducer,
  modalState: ModalReducer,
  addressState: addressReducer,
  newOrderState: newOrderReducer
})
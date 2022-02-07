import { createStore } from "redux";
import { GlobalReducer } from "../State/GlobalReducer";

export const store = createStore(GlobalReducer);
import createDataConstext from "./createDataConstext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import trackApi from "../../Api/api";
import Navigation from "../../NavigationRef";
import { useNavigation } from "@react-navigation/native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "add_token":
      return { errorMessage: "", token: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "signin":
      return { ...state, token: action.payload };
    case "signOut":
      return { token: null };
    default:
      return state;
  }
};

//create action for signUp
const signup = (dispatch) => {
  return async ({ email, password }) => {
    //1-save email and password using API requset
    try {
      const respone = await trackApi.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("@token", respone.data.token);
      dispatch({
        type: "add_token",
        payload: respone.data.token,
      });
      Navigation("TrackList");
    } catch (err) {
      //2-handle the success and the failer of the requset
      dispatch({
        type: "add_error",
        payload: "Something Went Wrong with Sign Up , Try again ",
      });
    }
  };
};

// create signin action
const signIn = (dispatch) => {
  return ({ email, password }) => {
    //1-try signin using api request
    // 2-handle the success and falier of the request
  };
};

// create signOut action
const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem("@token");
  dispatch({ type: "signOut" });
  Navigation("signUp");
};

//create clrear error message
const clearErrorMessage = (dispatch) => () => {
  dispatch({
    type: "clear_error",
  });
};

// create action automatic login
const autologin = (dispatch) => async () => {
  const navigation = useNavigation();
  const token = await AsyncStorage.getItem("@token", (err) => {
    console.log(err);
  });
  console.log(token);
  if (token === null) {
    navigation.navigate("auto", { screen: "signUp" });
    dispatch({ type: "signin", payload: token });
  } else {
    Navigation("signUp");
  }
};

export const { Context, Provider } = createDataConstext(
  authReducer,
  { signIn, signup, signOut, clearErrorMessage, autologin },
  { token: null, errorMessage: "" }
);

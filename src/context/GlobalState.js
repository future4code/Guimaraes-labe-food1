import  UserInfosContext from "./UserInfosContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/Urls"

const GlobalState = (props) => {
  const [restaurants, getRestaurants, isLoading, error] = useRequestData(
    [],
    `${BASE_URL}/restaurants`
  );

  const data = {
    restaurants,
    getRestaurants,
    isLoading,
    error
  };

  return (
    <UserInfosContext.Provider value={data}>
      {props.children}
    </UserInfosContext.Provider>
  );
};

export default GlobalState;


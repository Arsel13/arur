import React from "react";
import { AuthCheck } from "./AuthCheck";

export default function ProtectedRoute(props) {
  AuthCheck();
  const { Component } = props;
  return <Component />;
}

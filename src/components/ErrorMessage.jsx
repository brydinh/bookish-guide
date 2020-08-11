import React from "react";

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className="errorMessage">⚠This is required</p>;
      case "pattern":
         return <p className="errorMessage">⚠Enter a valid value</p>;
      default:
        return null;
    }
  }

  return null;
}

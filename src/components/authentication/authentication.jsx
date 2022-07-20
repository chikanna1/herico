import React from "react";

import "./sign-in.styles.scss";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../firebase/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};

export default Authentication;

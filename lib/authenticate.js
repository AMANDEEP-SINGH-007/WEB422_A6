/*********************************************************************************
*  WEB422 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: - Amandeep Singh Student ID: 145041208 Date: April 1, 2023
*
*  Vercel App (Deployed) Link: https://web-422-a6-beryl.vercel.app
*
********************************************************************************/ 
import jwt_decode from "jwt-decode";

function setToken(token) {
  localStorage.setItem("access_token", token);
}

export function getToken() {
  try {
    return localStorage.getItem("access_token");
  } catch (err) {
    return null;
  }
}

export function removeToken() {
  localStorage.removeItem("access_token");
}

export function readToken() {
  try {
    const token = getToken();
    return token ? jwt_decode(token) : null;
  } catch (err) {
    return null;
  }
}

export function isAuthenticated() {
  const token = readToken();
  return token ? true : false;
}

export async function authenticateUser(user, password) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ userName: user, password: password }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await res.json();

  if (res.status === 200) {
    setToken(data.token);
    return true;
  } else {
    throw new Error(data.message);
  }
}

export async function registerUser(user, password, password2) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
    method: "POST",
    body: JSON.stringify({userName: user, password: password, password2: password2,}),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await res.json();

  if (res.status === 200) {
    return true;
  } else {
    throw new Error(data.message);
  }
}
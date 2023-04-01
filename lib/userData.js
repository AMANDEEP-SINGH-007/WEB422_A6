/*********************************************************************************
*  WEB422 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: - Amandeep Singh Student ID: 145041208 Date: April 1, 2023
*
*  Vercel App (Deployed) Link: https://web-422-a6-cuhgjilwn-amandeep-singh-007.vercel.app
*
********************************************************************************/ 
import { getToken } from "../lib/authenticate";

export async function addToFavourites(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,{
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${getToken()}`,
      },
    }
  );

  const data = await res.json();

  if (res.status === 200) {
    return data;
  } else {
    return [];
  }
}

export async function removeFromFavourites(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,{
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${getToken()}`,
      },
    }
  );

  const data = await res.json();

  if (res.status === 200) {
    return data;
  } else {
    return [];
  }
}

export async function getFavourites() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
    method: "GET",
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });

  const data = await res.json();

  if (res.status === 200) {
    console.log(data);
    return data;
  } else {
    return [];
  }
}

export async function addToHistory(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `JWT ${getToken()}`,
    },
  });

  const data = await res.json();

  if (res.status === 200) {
    return data;
  } else {
    return [];
  }
}

export async function removeFromHistory(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `JWT ${getToken()}`,
    },
  });

  const data = await res.json();

  if (res.status === 200) {
    return data;
  } else {
    return [];
  }
}

export async function getHistory() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history`, {
    method: "GET",
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });

  const data = await res.json();

  if (res.status === 200) {
    return data;
  } else {
    return [];
  }
}
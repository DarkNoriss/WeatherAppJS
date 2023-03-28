export const getForm = () => document.querySelector(".form-location");

export const getId = (text) => text.match(/\d+(?=\.png$)/)[0];

export const getTime = (text) => (text.includes("day") ? "day" : "night");

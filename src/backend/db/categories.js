import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Board games",
    categoryImg:
      "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9hcmQlMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Books",
    categoryImg:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Films",
    categoryImg:
      "https://images.unsplash.com/photo-1542204625-ca960ca44635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlsbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60s",
  },
  {
    _id: uuid(),
    categoryName: "Comics",
    categoryImg:
      "https://images.unsplash.com/photo-1620928572438-075c466c48da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbWljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Music",
    categoryImg:
      "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "History",
    categoryImg:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGlzdG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
];

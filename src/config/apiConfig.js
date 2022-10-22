import Axios from "axios";

export const api = Axios.create({
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

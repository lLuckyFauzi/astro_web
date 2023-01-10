import Axios from "axios";

export async function getIssPosition() {
  const API = "http://api.open-notify.org/iss-now.json";
  return await Axios.get(API)
    .then((results) => {
      return results.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

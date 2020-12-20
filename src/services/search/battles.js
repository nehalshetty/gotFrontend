import axios from "axios";

const searchBattles = async (query) => {
  let url = "https://thawing-meadow-51034.herokuapp.com" + "/search" + query;

  let result = {
    error: null,
    value: null,
    status: null,
  };

  try {
    let battleResult = await axios(url, {
      validateStatus: (status) => status === 200,
    });

    result.status = "success";
    result.value = battleResult.data.items;
  } catch (err) {
    result.status = "error";
    result.error = err;
  }

  return result;
};

export default searchBattles;

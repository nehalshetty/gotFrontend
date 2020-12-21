import axios from "axios";

const getBattleCount = async () => {
  let url = process.env.REACT_APP_API_BASE_URL + "/count";

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
    result.value = battleResult.data;
  } catch (err) {
    result.status = "error";
    result.error = err;
  }

  return result;
};

export default getBattleCount;

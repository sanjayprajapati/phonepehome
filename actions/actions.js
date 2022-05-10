import axios from 'axios';
export const login = async (email, password) => {
  try {
    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.post(
      `http://origin8solutions.com/api/v1/index.php`,
      {email, password},
      config,
    );

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

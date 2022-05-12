import axios from 'axios';
export const login = async (email, password) => {
  try {
    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.post(
      `http://origin8solutions.com/loginapi.php?email=${email}&password=${password}`,
      {email, password},
      config,
    );

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

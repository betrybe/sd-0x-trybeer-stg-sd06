const URL = 'http://localhost:3001/login';

const fetchUserData = async (userData) => {
  return await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then((response) => response.json());
};

export default fetchUserData;

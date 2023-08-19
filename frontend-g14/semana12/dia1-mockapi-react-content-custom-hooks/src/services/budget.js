
export const getUser = async (userId) => {

    const url = `https://64de5d21825d19d9bfb283e7.mockapi.io/api/v1/users/${userId}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.budget
  }
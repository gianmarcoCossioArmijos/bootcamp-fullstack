export const createExpense = async (name, amount) => {

    const url = `https://64de5d21825d19d9bfb283e7.mockapi.io/api/v1/expenses`;
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ name, amount })
    }

    const response = await fetch(url, options);
    const data = await response.json();

    return data.budget;
  }

  export const getExpenses = async () => {

    const url = `https://64de5d21825d19d9bfb283e7.mockapi.io/api/v1/expenses`;
    const response = await fetch(url);
    const data = await response.json();

    return data
  }

  export const deleteExpense = async (id) => {

    const url = `https://64de5d21825d19d9bfb283e7.mockapi.io/api/v1/expenses/${id}`;
    
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  }
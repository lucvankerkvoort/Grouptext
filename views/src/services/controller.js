export default {
  getUsers: () =>
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((json) => json),
};

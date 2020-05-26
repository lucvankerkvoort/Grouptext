export default {
  getUsers: () =>
    fetch("https://grouptext-django.dreamstate-4-all.org/TextGroups/")
      .then((res) => res.json())
      .then((json) => json),
};

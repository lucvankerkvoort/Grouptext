export default {
  getGroups: () =>
    fetch("https://grouptext-django.dreamstate-4-all.org/TextGroups/")
      .then((res) => res.json())
      .then((json) => json),
  setMembers: (data) =>
    fetch("https://grouptext-django.dreamstate-4-all.org/TextGroups/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }),
};

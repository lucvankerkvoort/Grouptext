const url = "https://grouptext-django.dreamstate-4-all.org/TextGroups/";
export default {
  getGroups: () =>
    fetch(url)
      .then((res) => res.json())
      .then((json) => json),
  setGroups: (data) =>
    fetch(url, {
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
  getMembers: (id) =>
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(id),
    }),
};

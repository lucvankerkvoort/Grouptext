const groups = "https://grouptext-django.dreamstate-4-all.org/TextGroups/";
const members =
  "https://grouptext-django.dreamstate-4-all.org/TextGroupMember/";

export default {
  getGroups: () =>
    fetch(groups)
      .then((res) => res.json())
      .then((json) => json),
  setGroups: (data) =>
    fetch(groups, {
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
  setGroups: (data) =>
    fetch(members, {
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

const groups =
  "https://grouptext-django.dreamstate-4-all.org/view_groups_members/";
const members =
  "https://grouptext-django.dreamstate-4-all.org/add_group_member/";

export default {
  getGroups: () =>
    fetch(groups)
      .then((res) => res.json())
      .then((json) => json),
  addGroups: (data) =>
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
  addMemberToGroup: (id, data) =>
    fetch(members + id, {
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
  remobeMemberFromGroup: (data) =>
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

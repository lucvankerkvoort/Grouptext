const url = {
  getGroups:
    "https://grouptext-django.dreamstate-4-all.org/view_groups_members/",
  addMember: "https://grouptext-django.dreamstate-4-all.org/add_group_member/",
  groups: "https://grouptext-django.dreamstate-4-all.org/TextGroups/",
  deleteMember:
    "https://grouptext-django.dreamstate-4-all.org/TextGroupMember/",
};

export default {
  getGroups: () =>
    fetch(url.getGroups)
      .then((res) => res.json())
      .then((json) => json),
  addGroups: (data) =>
    fetch(url.groups, {
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
    })
      .then((res) => res.json())
      .then((json) => console.log(json)),
  removeGroup: (id) =>
    fetch(url.groups + id + "/", {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }).then((res) => console.log(res)),
  addMemberToGroup: (id, data) =>
    fetch(url.addMember + id + "/", {
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
    })
      .then((res) => res.json())
      .then((json) => json),
  removeMemberFromGroup: (id) =>
    fetch(url.deleteMember + id + "/", {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }),
};

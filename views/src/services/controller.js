const url = {
  getGroups:
    "https://grouptext-django.dreamstate-4-all.org/view_groups_members/",
  addMember: "https://grouptext-django.dreamstate-4-all.org/add_group_member/",
  groups: "https://grouptext-django.dreamstate-4-all.org/TextGroups/",
  deleteMember:
    "https://grouptext-django.dreamstate-4-all.org/TextGroupMember/",
  addQuestion:
    "https://grouptext-django.dreamstate-4-all.org/ask_group_question/",
  getQuestion: "https://grouptext-django.dreamstate-4-all.org/TextQuestion/ ",
};

export default {
  getGroups: () =>
    fetch(url.getGroups, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }),
  updateQuestion: (id, data) =>
    fetch(url.addQuestion + id + "/", {
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
    }).then((res) => res.json()),
  getQuestion: () =>
    fetch(url.getQuestion, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }),
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
    }).then((res) => res.json()),
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
    }),
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
    }).then((res) => res.json()),
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

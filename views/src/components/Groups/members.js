import React, { useContext } from "react";
import { store } from "../../services/Store";
import API from "../../services/controller";

const Members = ({ members }) => {
  const userData = useContext(store);
  const { dispatch } = userData;
  return (
    <div className="members">
      <table>
        {(members || []).length < 1 ? null : (
          <thead>
            <tr>
              <th>Name</th>
              <th>Tel</th>
              <th>Remove</th>
            </tr>
          </thead>
        )}
        <tbody>
          {(members || []).map((element, i) => {
            console.log(element);
            return (
              <tr key={i} className={element + i}>
                <td>{element.member_name}</td>
                <td>{element.member_phone}</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    API.removeMemberFromGroup(element.member_id).then((res) =>
                      dispatch({
                        type: "check",
                        payload: !userData.state.check,
                      })
                    )
                  }
                >
                  X
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Members;

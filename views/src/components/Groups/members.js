import React from "react";

const Members = ({ members }) => {
  console.log(members);
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
                  // onClick={() => props.remove(i)}
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

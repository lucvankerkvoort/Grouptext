import React from "react";

const Members = ({ members }) => {
  return (
    <>
      <table>
        {members.length < 1 ? null : (
          <thead>
            <tr>
              <th>Name</th>
              <th>Tel</th>
              <th>Remove</th>
            </tr>
          </thead>
        )}
        <tbody>
          {members.map((element, i) => {
            console.log(element);
            return (
              <tr key={i} className={element + i}>
                <td>{element.memberName}</td>
                <td>{element.telephoneNumber}</td>
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
    </>
  );
};

export default Members;

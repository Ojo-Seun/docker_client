import React from "react";
import usersProps from "../utils";

function RenderUsers({ data }: usersProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map((x, index) => (
            <tr data-testid="testId" key={index}>
              <td>{x.name}</td>
              <td>{x.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default React.memo(RenderUsers);

export function renderTableRows(rows) {
  console.log(rows);
  let sum = "";
  rows.forEach(function (row) {
    sum += `<tr>
    <td>${row[0]}</td>
    <td>${row[1]}</td>
  </tr> `;
  });
  return sum;
}

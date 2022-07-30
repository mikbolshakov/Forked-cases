export function renderTableRows(rows) {
  console.log(rows);
  return rows
    .map(
      (row) => `<tr>
  <td>${row[0]}</td>
  <td>${row[1]}</td>
</tr> `
    )
    .join("");
}

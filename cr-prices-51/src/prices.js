export function renderTableRow(details) {
  console.log(details);
  return `<tr>
  <td>${details.title}</td>
  <td>${details.price}</td>
</tr> `;
}

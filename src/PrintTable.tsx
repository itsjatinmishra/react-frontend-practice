function PrintTable({ tableData }) {
  return (
    <>
      {tableData.map((item, index) => (
        <tr key={index}>
          <td>{item.company}</td>
          <td>{item.contact}</td>
          <td>{item.country}</td>
        </tr>
      ))}
    </>
  );
}

export default PrintTable;

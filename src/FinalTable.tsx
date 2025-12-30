import PrintTable from "./PrintTable";

function FinalTable() {
  const tableData = [
    {
      company: "Google",
      contact: "Sundar Pichai",
      country: "USA",
    },
    {
      company: "Microsoft",
      contact: "Satya Nadella",
      country: "USA",
    },
    {
      company: "TCS",
      contact: "Rajesh Gopinathan",
      country: "India",
    },
    {
      company: "Infosys",
      contact: "Salil Parekh",
      country: "India",
    },
    {
      company: "BMW",
      contact: "Oliver Zipse",
      country: "Germany",
    },
  ];

  return (
    <div>
      <h2>Personal Details</h2>

      <table style={{ backgroundColor: "cyan" }}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <PrintTable tableData={tableData} />
        </tbody>
      </table>
    </div>
  );
}

export default FinalTable;

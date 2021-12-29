import { useEffect, useState } from "react";
import CompanyService from "./services/CompanyService";

export default function Company() {
  const [company, setCompany] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = () => {
    CompanyService.getCompany().then((response) => {
      const items = response.data.items;
      setCompany(items);
      setLoading(false);
    });
  };
  const handleDeleteCompany = (id) => {
    setLoading(true);
    CompanyService.deleteCompany(id).then(() => getCompanies());
  };
  if (isLoading) return <p>Loading . . .</p>;
  return (
    <>
      <div className="Company__title">
        <h1>Company</h1>
      </div>
      <div className="Company__main">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {company.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.size}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDeleteCompany(c.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

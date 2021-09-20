import React from "react";

function Table() {
  return (
    <div className="container mx-auto ">
      <table className="table-auto border-2 ">
        
        <thead>
          <tr>
            <th className="px-12">Country/Region</th>
            <th className="px-2 border-2">Confirmed cases</th>

            <th className="px-12 border-2">Death</th>
            <th className="px-12 border-2">Recovered</th>
            <th className="px-12 border-2">Active cases</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 p-2">Amarica</td>
            <td className="px-12 border-2">34,035,318</td>
            <td className="px-12 border-2">4,035,318</td>
            <td className="px-12 border-2">74,035,31</td>
            <td className="px-12 border-2">4,035,318</td>
          </tr>
          <tr className="bg-emerald-200">
            <td className="border-2 p-2">Bangladesh</td>
            <td className="px-12 border-2">24,035,318</td>
            <td className="px-12 border-2">35,318</td>
            <td className="px-12 border-2">74,035,318</td>
            <td className="px-12 border-2">35,318</td>
          </tr>
          <tr>
            <td className="border-2 p-2">South Africa</td>
            <td className="px-12 border-2">56,035,245</td>
            <td className="px-12 border-2">78,035,345</td>
            <td className="px-12 border-2">29,035,278</td>
            <td className="px-12 border-2">78,035,345</td>
          </tr>
          <tr>
            <td className="border-2 p-2">India</td>
            <td className="px-12 border-2">89,035,318</td>
            <td className="px-12 border-2">34,035,318</td>
            <td className="px-12 border-2">135,318</td>
            <td className="px-12 border-2">34035,318</td>
          </tr>
          <tr>
            <td className="border-2 p-2">Brazil</td>
            <td className="px-12 border-2">34,035,318</td>
            <td className="px-12 border-2">135,318</td>
            <td className="px-12 border-2">6,035,318</td>
            <td className="px-12 border-2">135,318</td>
          </tr>
          <tr>
            <td className="border-2 p-2">China</td>
            <td className="px-12 border-2">35,035,318</td>
            <td className="px-12 border-2">6,035,890</td>
            <td className="px-12 border-2">35,035,390</td>
            <td className="px-12 border-2">6,035,890</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

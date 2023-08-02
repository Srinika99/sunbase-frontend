import React, { useState, useEffect } from "react";
import { getCustomerList } from "../Apis/list";
import { deleteCustomer } from "../Apis/delete";

export default function CustomerList() {
  const [isLoading, setIsLoading] = useState(true);
  const [customerList, setCustomerList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCustomerList = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const list = await getCustomerList(accessToken);
        setCustomerList(list);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch customer list:", error);
        setError("Failed to fetch customer list. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchCustomerList();
  }, []);

  const handleDelete = async (uuid) => {
    try {
      const accessToken = localStorage.getItem("access_token");
      await deleteCustomer(uuid, accessToken);

      window.location.reload();
    } catch (error) {
      console.error("Failed to delete customer:", error);
    }
  };

  return (
    <div className="min-h-full flex flex-col justify-center px-6 py-12 lg:px-8">
      <button
        onClick={() => {window.location.href = "/new-user"}}
        disabled={isLoading}
        className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isLoading ? "Creating..." : "New User"}
      </button>
      <h2 className="text-2xl font-bold leading-9 text-gray-900">Customer List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          {customerList.length > 0 ? (
            <table className="w-full table-auto border-collapse">
              <thead className="text-xs text-gray-700 bg-gray-50">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">First Name</th>
                  <th className="px-4 py-2">Last Name</th>
                  <th className="px-4 py-2">Street</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">State</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {customerList.map((customer) => (
                  <tr key={customer.uuid} className="border-t border-gray-200">
                    <td className="px-4 py-2">{customer.id}</td>
                    <td className="px-4 py-2">{customer.first_name}</td>
                    <td className="px-4 py-2">{customer.last_name}</td>
                    <td className="px-4 py-2">{customer.street}</td>
                    <td className="px-4 py-2">{customer.address}</td>
                    <td className="px-4 py-2">{customer.city}</td>
                    <td className="px-4 py-2">{customer.state}</td>
                    <td className="px-4 py-2">{customer.email}</td>
                    <td className="px-4 py-2">{customer.phone}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(customer.uuid)}
                        className="text-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No customer data available.</p>
          )}
        </div>
      )}
    </div>
  );
}

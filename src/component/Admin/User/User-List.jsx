import React, { useEffect, useState } from "react";
import UserCard from "./User-Card";
import { toast } from "react-toastify";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Admin login required");
      return;
    }

    try {
      const response = await fetch(
        "https://anil-jaiswal.onrender.com/api/admin/users",
        // "http://127.0.0.1:8000/api/admin/users",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUsers(data);
        console.log(data)
      } else {
        toast.error(data.message || "Failed to load users");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading users...</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        All Users
      </h2>
       <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>mobile Number</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((all) => (
                <tr key={all.id} className="border-t">
                  <td className="p-4">{all.name}</td>
                  <td>{all.email}</td>
                  <td>{all.phone}</td>
                  <td>{all.role}</td>
                  <td>
                    <button
                      onClick={() => deleteUser(all.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
  </div>
  )
};

export default UserList;

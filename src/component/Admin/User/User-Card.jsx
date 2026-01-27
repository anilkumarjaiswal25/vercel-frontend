import React, { useEffect, useState } from "react";
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
        "http://127.0.0.1:8000/api/admin/users",
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

  const deleteUser = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/admin/users/${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("User deleted successfully");
        setUsers(users.filter((user) => user.id !== id));
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading users...</p>;
  }

  return (
    <div className="space-y-6">

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4">Name</th>
              <th>Email</th>
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
              users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-4">{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        user.role === "admin"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td>
                    {user.role !== "admin" && (
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Admin login required");
      return;
    }

    try {
      const response = await fetch(
      `https://anil-jaiswal.onrender.com/api/admin/messages`,
        // "http://127.0.0.1:8000/api/admin/messages",
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
        setMessages(data);
      } else {
        toast.error(data.message || "Failed to load messages");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading messages...</p>;
  }
  const deleteMessage = async (id) => {
  const token = localStorage.getItem("token");

  if (!window.confirm("Are you sure you want to delete this message?")) {
    return;
  }

  try {
    const response = await fetch(
     `https://anil-jaiswal.onrender.com/api/admin/messages/${id}`,
      // `http://127.0.0.1:8000/api/admin/messages/${id}`,
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
      toast.success("Message deleted successfully");
      setMessages(messages.filter((msg) => msg.id !== id)); // UI update
    } else {
      toast.error(data.message || "Delete failed");
    }
  } catch (error) {
    console.error(error);
    toast.error("Server error");
  }
};


  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Contact Messages
      </h2>

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No messages found
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id} className="border-t">
                  <td className="p-4">{msg.username}</td>
                  <td>{msg.email}</td>
                  <td>{msg.subject}</td>
                  <td>
                    <NavLink
                      to={`/admin/messages/${msg.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </NavLink>
                    <button
                      onClick={() => deleteMessage(msg.id)}
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
  );
};

export default MessageList;

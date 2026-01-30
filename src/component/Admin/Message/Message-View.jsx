import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MessageView = () => {
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessage();
  }, [id]);

  const fetchMessage = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Admin login required");
      return;
    }

    try {
      const response = await fetch(
        `https://anil-jaiswal.onrender.com/api/admin/messages/${id}`,
        // `http://127.0.0.1:8000/api/admin/messages/${id}`,
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
        setMessage(data);
      } else {
        toast.error(data.message || "Failed to load message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading message...</p>;
  }

  if (!message) {
    return <p className="text-red-500">Message not found</p>;
  }

  return (
    <div className="bg-white shadow rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        Message Details
      </h2>

      <div>
        <p className="text-gray-500">Name</p>
        <p className="font-medium">{message.username}</p>
      </div>

      <div>
        <p className="text-gray-500">Email</p>
        <p className="font-medium">{message.email}</p>
      </div>

      <div>
        <p className="text-gray-500">Subject</p>
        <p className="font-medium">{message.subject}</p>
      </div>

    </div>
  );
};

export default MessageView;

import React, { useEffect, useState } from "react";
import { MdPeople, MdMail, MdWork } from "react-icons/md";
import { useAuth } from "../../Authentication/Auth";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/admin/dashboard-stats",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setStats(data);
      } else {
        toast.error(data.message || "Failed to load stats");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  if (!stats) {
    return <p className="text-gray-500">Loading dashboard...</p>;
  }

  const cards = [
    {
      title: "Total Users",
      count: stats.users,
      icon: <MdPeople className="text-3xl text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Messages",
      count: stats.messages,
      icon: <MdMail className="text-3xl text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "Projects",
      count: stats.projects,
      icon: <MdWork className="text-3xl text-purple-600" />,
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome, {user?.name} 👋
        </h2>
        <p className="text-gray-500 mt-1">
          Manage your portfolio users and messages from here.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item) => (
          <div
            key={item.title}
            className="bg-white shadow rounded-xl p-6 flex items-center gap-5"
          >
            <div className={`p-4 rounded-full ${item.bg}`}>
              {item.icon}
            </div>

            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {item.count}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>

        <div className="flex flex-wrap gap-4">
          <a
            href="/admin/users"
            className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            View Users
          </a>

          <a
            href="/admin/messages"
            className="px-5 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            View Messages
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

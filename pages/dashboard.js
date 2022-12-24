import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <h2>loading...</h2>;
  return (
    <div>
      <h2>Dashboard</h2>
      <p>posts - {dashboardData.posts}</p>
      <p>likes - {dashboardData.likes}</p>
      <p>followers - {dashboardData.followers}</p>
      <p>following - {dashboardData.following}</p>
    </div>
  );
};

export default Dashboard;

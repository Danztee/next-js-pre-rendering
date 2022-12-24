import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading";

  return (
    <div>
      <h2>Dashboard</h2>
      <p>posts - {data.posts}</p>
      <p>likes - {data.likes}</p>
      <p>followers - {data.followers}</p>
      <p>following - {data.following}</p>
    </div>
  );
};

export default DashboardSWR;

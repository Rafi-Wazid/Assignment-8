import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Qul 12", price: 100, rating: 60 },
    { name: "Qul 13", price: 80, rating: 90 },
    { name: "Qul 14", price: 40, rating: 30 },
    { name: "Qul 15", price: 70, rating: 50 },
    { name: "Qul 16", price: 90, rating: 80 },
    { name: "Qul 17", price: 60, rating: 70 },
    { name: "Qul 18", price: 110, rating: 95 },
    { name: "Qul 19", price: 50, rating: 40 },
  ];

  return (
    <div>
      <div className="bg-purple-600 text-white text-center py-6 rounded-b-lg">
        <h2 className="text-5xl font-bold py-2">Statistics</h2>
        <p className="text-xl font-semibold md:max-w-3/4 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <div>
        <div className="mx-auto w-full max-w-4xl p-4 my-12">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" /> 
              <Bar dataKey="rating" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

import DashboardLayout from "@/app/components/dashboard-layout";

export default function Home() {

  const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="mb-4">
        This is your dashboard content. You can add any components or content
        here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            {item}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

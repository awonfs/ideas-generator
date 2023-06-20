import UserDataTable from "@/components/UserDataTable";

function DashboardPage() {
  return (
    <main className="container flex h-screen">
      <section className="flex flex-col mx-auto gap-8 items-start">
        <h1 className="font-semibold text-xl">Your dashboard</h1>
        <UserDataTable />
      </section>
    </main>
  );
}

export default DashboardPage;

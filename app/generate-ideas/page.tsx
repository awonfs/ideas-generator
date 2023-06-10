import IdeasForm from "@/components/IdeasForm";

function page() {
  return (
    <main className="flex h-screen flex-col items-center mt-10">
      <h1 className="text-2xl">Generate ideas</h1>
      <IdeasForm
        label="Write your ideas here"
        placeholder="Ideas for new recipes, hobbies etc..."
      />
    </main>
  );
}

export default page;

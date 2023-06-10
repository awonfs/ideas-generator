import IdeasForm from "@/components/IdeasForm";

function page() {
  return (
    <main className="flex h-screen flex-col items-center mt-10 gap-4">
      <h1 className="text-2xl font-medium">Generate ideas</h1>
      <IdeasForm
        label="Write your ideas down here &darr;"
        placeholder="Ideas for new recipes, hobbies etc..."
      />
    </main>
  );
}

export default page;

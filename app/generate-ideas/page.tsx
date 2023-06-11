import IdeasForm from "@/components/IdeasForm";

function page() {
  return (
    <main className="flex h-screen flex-col items-center mt-10 gap-4">
      <h1 className="text-2xl font-medium">Generate ideas</h1>
      <IdeasForm
        label="Write your ideas down here &darr;"
        placeholder="Ideas for new recipes, hobbies etc..."
      />
      <div className="flex flex-col gap-2">
        <h2>Prompt response will be here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          consequatur porro, repudiandae, vitae et blanditiis illo tempore
          aperiam atque vel corrupti deleniti distinctio hic voluptatum est
          doloribus nisi ex temporibus quas vero tenetur eius. Mollitia eius,
          est adipisci quae unde nulla assumenda vel aliquid. Incidunt tenetur
          soluta accusantium modi vero!
        </p>
      </div>
    </main>
  );
}

export default page;

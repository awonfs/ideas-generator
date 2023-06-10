import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Need new{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          ideas?
        </span>
      </h1>

      <Link
        href="/generate-ideas"
        className="inline-flex items-center justify-center px-12 py-4 text-base font-medium rounded-xl text-white bg-gray-800 hover:bg-gray-700 hover:text-white"
      >
        <span className="w-full">Start now!</span>
      </Link>

      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Here at IdeaGenerator we focus on bringing you with the power of AI help
        find you new hobbies, ideas, recipes and so much more!
      </p>
    </main>
  );
}

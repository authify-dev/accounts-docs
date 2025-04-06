// components/ApiDocumentation.tsx
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b dark:text-white  px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <section className="space-y-6">
          <h1 className="text-3xl font-bold">API Documentation</h1>
          <p className=" max-w-2xl">
            Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly
            integrate your product into the workflows of dozens of devoted Protocol users.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-full transition">
              Quickstart →
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-full transition">
              Explore SDKs
            </button>
          </div>
        </section>

        {/* Getting started */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Getting started</h2>
          <p className=" max-w-3xl">
            To get started, create a new application in your{" "}
            <Link href="#" className="text-blue-400 hover:underline">
              developer settings
            </Link>
            , then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated
            client SDKs. When your integration is ready to go live, publish it to our{" "}
            <Link href="#" className="text-blue-400 hover:underline">
              integrations directory
            </Link>{" "}
            to reach the Protocol community.
          </p>
          <Link href="#" className="text-blue-400 hover:underline font-medium">
            Get your API key →
          </Link>
        </section>

        {/* Guides */}
        <section className="space-y-8">
          <h2 className="text-xl font-semibold">Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Authentication",
                description: "Learn how to authenticate your API requests.",
              },
              {
                title: "Pagination",
                description: "Understand how to work with paginated responses.",
              },
              {
                title: "Errors",
                description: "Read about the different types of errors returned by the API.",
              },
              {
                title: "Webhooks",
                description: "Learn how to programmatically configure webhooks for your app.",
              },
            ].map((guide) => (
              <div key={guide.title}>
                <h3 className="font-semibold">{guide.title}</h3>
                <p className="text-sm">{guide.description}</p>
                <Link href="#" className="text-blue-400 hover:underline text-sm inline-block mt-2">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

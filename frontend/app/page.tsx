export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-6">
        SubPilot AI
      </h1>

      <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
        Connect Wallet
      </button>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Active Subscriptions
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-700 p-4 rounded-xl">
            Netflix - $10/month
          </div>

          <div className="border border-gray-700 p-4 rounded-xl">
            Spotify - $5/month
          </div>

          <div className="border border-gray-700 p-4 rounded-xl">
            Canva - $12/month
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          AI Recommendations
        </h2>

        <div className="border border-green-500 p-4 rounded-xl">
          Cancel Canva to save $12/month
        </div>
      </div>
    </main>
  );
}

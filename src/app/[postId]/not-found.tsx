import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-black mb-4">404</h1>
        <p className="text-gray-600 text-lg mb-8">
          Page not found , Wrong Post ID was used
        </p>
        <Link
          href="/"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

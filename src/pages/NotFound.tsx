import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 text-white">
      <div className="max-w-lg text-center">
        {/* 404 Text */}
        <h1 className="animate-pulse bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium shadow-lg transition hover:scale-105 hover:bg-blue-700"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}

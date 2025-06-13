import Link from "next/link"
import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      
      {/* 🔳 Basic Header */}
      <header className="w-full bg-gray-900 text-white py-4">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h1 className="text-xl font-semibold">MySite</h1>
        </div>
      </header>

      {/* 🔴 Login Section */}
      <section className="relative w-full text-black py-30 overflow-hidden bg-white bg-[url('/images/bg-pattern.png')] bg-no-repeat bg-cover bg-center">

        {/* Background image covering the right half */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-1/2 bg-[url('/images/header.png')] bg-no-repeat bg-cover bg-left"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 flex flex-col md:flex-row gap-15 items-center justify-center">
          
          {/* Left form */}
          <div className="flex-1 min-w-[300px] max-w-md">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-center">Unlock Your Business Potential</h1>
            </div>
            <LoginForm />
          </div>

          {/* Right Spacer */}
          <div className="flex-1 min-w-[300px] max-w-md"></div>
        </div>
      </section>

      {/* ⚪ About Section */}
      <section className="w-full bg-white py-12">
        <div className="w-full max-w-6xl mx-auto px-4 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-gray-700 text-xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-700">
              We’re a team dedicated to helping users manage their accounts and explore awesome features. This section is just a placeholder.
            </p>
          </div>

          <div className="flex-1">
            <img
              src="/images/cat.webp"
              alt="cat"
              className="w-full rounded-lg border-2 border-solid border-gray-400"
            />
          </div>
        </div>
      </section>

      {/* 🟦 Boxes Section */}
      <section className="w-full bg-[#001f3f] py-12">
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-6 bg-gray-800 rounded shadow text-center">Box 1</div>
          <div className="flex-1 p-6 bg-gray-700 rounded shadow text-center">Box 2</div>
          <div className="flex-1 p-6 bg-gray-600 rounded shadow text-center">Box 3</div>
        </div>
      </section>

      {/* ⚫ Footer Section */}
      <footer className="w-full bg-gray-100 text-gray-700 py-6 mt-auto">
        <div className="w-full max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}

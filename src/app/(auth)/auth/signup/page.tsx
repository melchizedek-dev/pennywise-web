"use client";
import { ArrowRight } from "lucide-react";
import { showToast } from "nextjs-toast-notify";
export default function SignupPage() {
 const handleClick = () => {
    showToast.error("Operation complete! 🎉", {
      duration: 4000, // 4 seconds
      position: "top-right",
      transition: "bounceIn",
      sound: true,
      progress: true
    });
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100">
      <div className="min-w-300 border-neutral-200 bg-neutral-200 flex flex-row rounded-md shadow-lg overflow-hidden w-full max-w-4xl">

        <div className="min-h-full bg-primary flex flex-col items-center justify-center flex-1 p-10 rounded-r-md">
          <div className="">
            <h1 className="text-2xl font-bold text-white mb-4">PennyWise</h1>
            <p className="text-gray-300 text-md">Experience the next generation of personal finance.</p>
            <p className="text-gray-300 text-md">Secure, intuitive, and designed for your growth.</p>
            <div className="mt-6 overflow-hidden rounded-md h-80 w-full">
              <img className="w-full object-cover" src="/dashboard-alaysis.png"/>
            </div>
          </div>
        </div>

        <div className="min-h-full bg-neutral-200 flex flex-col items-center justify-center flex-1 p-10">
          <div className="w-full flex flex-col max-w-sm">
            <h2 className="text-2xl font-bold mb-4 ">Create Your Account</h2>
            <p className="mb-4 text-md ">Start your journey to financial freedom today.</p>
          </div>

          <form className="w-full max-w-sm">
            
            <div className="mb-4">
              <label className="block text-secondary text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="border border-neutral-300 bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-secondary text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="border border-neutral-300 bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-4">
              <label className="block text-secondary text-sm font-bold mb-2" htmlFor="pasword">
                Password
              </label>
              <input
                className="border border-neutral-300 bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />

            </div>

            <div className="mb-4 flex items-center justify-start ">
              <input type="checkbox" id="terms" className="mr-2 leading-tight" required/>
              <p className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div className="flex items-center justify-center mb-7">
              <button
                onClick={handleClick}
                className="w-full text-md bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center justify-center gap-3"
                type="submit"
              >
                Create Account
                 <ArrowRight size={20} />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 text-center">
                Already have an account? <a href="/auth/login" className="text-primary hover:underline">Sign In</a>.
              </p>
            </div>
            
          </form>

        </div>

      </div>
    </main>
  );
}
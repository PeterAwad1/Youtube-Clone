import Button from "../sharedCommpenets/Button";
import Line from "../sharedCommpenets/Line";
function Signin() {
  return (
    <div className="text-white flex items-center justify-center h-[calc(100vh-70px)] overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col justify-center items-center p-5 bg-gray-900 gap-4 rounded-3xl ">
        <div className="flex flex-col justify-center items-center gap-4 w-[300px] sm:w-[500px]">
          <p className="text-3xl font-semibold">Sign In </p>

          <input
            type="username"
            name="username"
            placeholder="Username..."
            className="bg-inherit w-full px-4 py-2  rounded-xl border-gray-600 border-[1px] focus:outline-none text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="bg-inherit w-full px-4 py-2  rounded-xl border-gray-600 border-[1px] focus:outline-none text-white mb-4"
          />
          <Button>Sign in </Button>
        </div>
        <Line className="hover:bg-black" />
        <div className="flex flex-col w-[300px] sm:w-[500px] justify-center items-center gap-2">
          <p className="text-3xl font-semibold">Sign Up </p>
          <input
            type="username"
            name="username"
            placeholder="Username..."
            className="bg-inherit w-full px-4 py-2  rounded-xl border-gray-600 border-[1px] focus:outline-none text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            className="bg-inherit w-full px-4 py-2  rounded-xl border-gray-600 border-[1px] focus:outline-none text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="bg-inherit w-full px-4 py-2  rounded-xl border-gray-600 border-[1px] focus:outline-none text-white mb-4"
          />
          <Button>Sign up </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Signin;

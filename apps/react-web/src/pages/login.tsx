const Login = () => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center">
      <form
        className="mb-4 w-full max-w-sm rounded-lg bg-white p-4 shadow-md"
        method="post"
      >
        <div className="flex flex-col gap-4">
          <label
            htmlFor="email"
            className="flex flex-col text-sm font-semibold text-gray-700"
          >
            Email
            <input
              className="mt-1 rounded-md border border-gray-300 p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="email@site.com"
              id="email"
              type="email"
              required
            />
          </label>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

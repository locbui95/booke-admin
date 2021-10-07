import logo from "assets/logo.png";
import Button from "components/button";
import Input from "components/input";

function LoginForm() {
  return (
    <div className="bg-gray-100 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-1/4 bg-white sm:mx-0">
          <div className="flex flex-col w-full p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <div className="flex justify-center py-5">
                <img className="w-40" src={logo} alt="" />
              </div>
              <h1 className="text-4xl text-center font-thin">
                Sign in to Booke Admin
              </h1>
              <div className="w-full mt-4">
                <form className="form-horizontal ml-16 mx-auto">
                  <div className="flex flex-col mt-4">
                    <Input
                      id="email"
                      type="text"
                      name="email"
                      required
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <Input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-2"
                    />{" "}
                    <label
                      htmlFor="remember"
                      className="text-sm text-grey-dark"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="flex flex-col mt-8 w-4/5">
                    <Button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Sign in
                    </Button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a
                    className="no-underline hover:underline text-blue-dark text-xs"
                    href=""
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

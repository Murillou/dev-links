import infinityLogo from '../assets/infinity.png';
import devLinksLogo from '../assets/devlinks.png';
import { Input } from '../Commons/Input';

export function Login() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mx-auto min-h-screen">
        <div className="flex gap-1 mb-[50px]">
          <img src={infinityLogo} alt="" />
          <img src={devLinksLogo} alt="" className="w-[130px]" />
        </div>

        <div className="flex flex-col gap-2 mt-[40px]">
          <h1 className="text-3xl font-bold text-dark-gray">Login</h1>
          <p className="text-base text-grey">
            Add your details below to get back into the app
          </p>
        </div>

        <form action="" className="flex flex-col w-full p-1 mt-[40px]">
          <label htmlFor="email">Email address</label>
          <Input type="email" id="email" placeholder="e.g.alex@email.com" />

          <label className="mt-[24px]" htmlFor="password">
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <Input
            type="submit"
            value="Login"
            className="font-semibold bg-bg-submit rounded-lg text-white mt-[24px]"
          />
        </form>

        <p className="text-grey">
          Don't have an account?{' '}
          <a href="#" className="text-bg-submit">
            Create account
          </a>
        </p>
      </section>
    </>
  );
}

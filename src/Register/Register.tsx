import infinityLogo from '../assets/infinity.png';
import devLinksLogo from '../assets/devlinks.png';
import { Input } from '../Commons/Input';

export function Register() {
  return (
    <>
      <section className="flex flex-col mx-auto min-h-screen">
        <div className="flex items-center justify-center gap-1 mt-[10px] mb-[10px]">
          <img src={infinityLogo} alt="" />
          <img src={devLinksLogo} alt="" className="w-[130px]" />
        </div>

        <div className="flex flex-col text-left p-2 gap-2 mt-[20px]">
          <h1 className="text-3xl font-bold text-dark-gray">Create account</h1>
          <p className="text-base text-grey">
            Let's get you started sharing your links!
          </p>
        </div>

        <form action="" className="flex flex-col w-full p-2 mt-[20px]">
          <label htmlFor="email">Email address</label>
          <Input type="email" id="email" placeholder="e.g.alex@email.com" />

          <label className="mt-[24px]" htmlFor="password">
            Create password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="At least 8 characters"
          />

          <label className="mt-[24px]" htmlFor="password">
            Confirm password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="At least 8 characters"
          />
          <p>Passwordmust contain at least 8 characters</p>
          <Input
            type="submit"
            value="Create new account"
            className="font-semibold bg-bg-submit rounded-lg text-white mt-[20px]"
          />
        </form>

        <p className="text-grey text-center mb-[20px]">
          Already have an account?
          <a href="#" className="text-bg-submit">
            Login
          </a>
        </p>
      </section>
    </>
  );
}

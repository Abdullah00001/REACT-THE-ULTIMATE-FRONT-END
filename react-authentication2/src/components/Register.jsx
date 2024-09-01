import { data } from "autoprefixer";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    const password2 = target.repassword.value;
    console.log(email, password, password2);
    const userData = { email, password };
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.code === 303) {
          alert(data.message);
        } else if (data.code === 301) {
          alert(data.message);
        }
      });
  };
  return (
    <>
      <div className="w-[1144px] mx-auto mt-[100px]">
        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              name="password"
              type="password"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              name="repassword"
              type="password"
              required
              shadow
            />
          </div>
          {/* <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div> */}
          <Button type="submit">Register new account</Button>
        </form>
      </div>
    </>
  );
}

export default Register;

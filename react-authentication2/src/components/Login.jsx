import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    console.log(email, password);
    const userData = { email, password };
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.code === 302) {
          alert(data.message);
          localStorage.setItem("user", JSON.parse(data.userData));
        } else if (data.code === 301) {
          alert(data.message);
        }
      });
  };
  return (
    <>
      <div className="w-[1144px] mx-auto">
        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              name="email"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              name="password"
              type="password"
              required
            />
          </div>
          {/* <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div> */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default Login;

import Button from "../components/Button";

function Team() {
  return (
    <div className="text-white flex justify-center items-center  ">
      <div className="max-w-screen-xl">
        <div className="grid grid-cols-2 my-16 ">
          <div className="space-y-8">
            <h1 className="font-bold text-5xl">
              It takes a{" "}
              <span className="text-[#2B2F3A] line-through">village</span> team
              🙌Meet with yours_
            </h1>
            <Button text={"Schedule a Chat"} />
          </div>
          <div className="flex items-end justify-end">
            <h2 className="font-bold">
              Or Sign Up For Our Weekly Newsletter —{" "}
              <span className="text-3advance">What’s Appening</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

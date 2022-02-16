import React from "react";
import Button from "../../shared/Button";
import TextField from "../../shared/TextField/TextField";

export default function UserInfoCard() {
  return (
    <section className="flex bg-white rounded-md shadow-md">
      <div className="flex flex-col items-center gap-5 py-12 px-16 border-r-1">
        <div className="border-1 border-gray-300 rounded-full h-36 w-36 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-700 text-lg font-medium">Username</h1>
          <div className="flex items-center gap-1 text-blue-1000 font-light">
            <i className="ri-map-pin-line"></i>
            <span>Tehran, Iran</span>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-8 w-full text-left py-6 px-12">
        <h1 className="text-lg text-blue-1000 font-medium">Account Info</h1>
        <div className="grid grid-cols-2 gap-8">
          <TextField id="username" label="Username" />
          <TextField id="email" label="Email Address" type="email" />
          <TextField id="password" label="Password" type="password" />
          <TextField id="confirm" label="Confirm Passowrd" type="password" />
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant="greenish" custom="px-4">
            Save changes
          </Button>
        </div>
      </form>
    </section>
  );
}

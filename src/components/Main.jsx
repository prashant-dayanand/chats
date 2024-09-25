import React from "react";
import { FaRobot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Main = () => {
  return (
    <div className="flex-grow p-6">
      <div className="border rounded-xl">
        <div className="p-3">
          <p>Hi, whats bring you here today? we will be happy to assist you.</p>
        </div>
        <div className="flex w-full rounded-b-xl bg-blue-900 p-3">
          <div className="flex items-center w-full gap-3">
            <FaRobot className="text-blue-300 text-2xl" />
            <h3 className="text-white font-bold text-md">Start Conversation</h3>
          </div>
          <FaArrowRight className="text-white text-xl" />
        </div>
      </div>

      <div className="border rounded-xl mt-5">
        <div className="p-3">
          <p className="font-bold">Recent Messages</p>
        </div>
        <div className="flex w-full rounded-b-xl p-3 items-center justify-between">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-8">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-8">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="badge badge-primary badge-md">28</div>
        </div>
      </div>
    </div>
  );
};

export default Main;

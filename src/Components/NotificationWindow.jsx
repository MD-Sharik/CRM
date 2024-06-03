import React from "react";

function NotificationWindow() {
  return (
    <div className="absolute right-0 top-10 z-10 p-2 h-[20rem] w-[18rem] sm:min-w-[28rem] text-black font-bold rounded-lg shadow-lg  bg-yellow-200 ">
      Notification Center
      <hr className="my-3 border-black" />
    </div>
  );
}

export default NotificationWindow;

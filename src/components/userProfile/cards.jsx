// import React from "react";

const Cards = () => {
  return (
    <div className="flex w-screen flex-col lg:flex-row">
      <div className="bg-secondary w-screen lg:w-1/5 h-[500px] lg:h-screen"></div>
      <div className=" w-screen lg:w-4/5 h-screen">
        <div className="mx-20">
          <div className="grid grid-cols-3 bg-white w-9/10 h-9/10 gap-y-10 gap-x-16">
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              <div className="">
                <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
              </div>
              Card 1
            </div>
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              Card 2
              <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
            </div>
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              Card 3
              <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
            </div>
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              Card 1
              <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
            </div>
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              Card 2
              <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
            </div>
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              Card 3
              <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
            </div>
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              Card 1
              <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
            </div>
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              Card 2
              <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
            </div>
            <div className=" h-96 shadow-md rounded-md border border-grey-500">
              Card 3
              <img src="https://cdn.pixabay.com/photo/2017/09/07/10/09/triangle-2724449_1280.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;


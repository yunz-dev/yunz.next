import {logos} from "../data/technologies"

//change linear gradient to right rgba for gradient
export const InfiniteSlider = () => {
  return (
    <div className="relative m-auto overflow-hidden bg-black before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,rgba(0,0,0,100)_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(0,0, 0,0)_0%,rgba(0,0,0,0)_100%)] after:content-[''] pb-6 pt-6">
      <h2 className="text-center text-3xl font-semibold"> Technologies </h2>
      <br></br>
      <div className="animate-infinite-slider flex w-[calc(250px*50)]">
        {logos.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

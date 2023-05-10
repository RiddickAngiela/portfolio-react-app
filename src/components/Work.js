import React from 'react'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* Work Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card Container */}
          <div
            style={{
              backgroundImage: `url(${"https://i.pinimg.com/564x/f5/58/0e/f5580e9911bf1422813176182af2d359.jpg"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Ayattollah Eats
              </span>
              <div className="pt-8 text-center ">
                <a href="https://ayattollaheats.netlify.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>

                <a href="https://github.com/RiddickAngiela/my-uber-eats">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://i.pinimg.com/564x/b7/c6/ed/b7c6ed8c46582df42a407462e4e68baa.jpg"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                City Bikes
              </span>
              <div className="pt-8 text-center ">
                <a href="https://magnificent-cassata-c64519.netlify.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>

                <a href="https://github.com/RiddickAngiela/city-bike-project">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://i.pinimg.com/564x/8d/82/d8/8d82d830aa82beff63163e4c35c7ebba.jpg"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Movie Hub
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/RiddickAngiela/movie-hub">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>

                <a href="https://github.com/RiddickAngiela/movie-hub">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://i.pinimg.com/564x/04/82/f0/0482f0af373b59f5f4892794cf3ec21d.jpg"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                MaThree Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/RiddickAngiela/MaThree">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>

                <a href="https://github.com/RiddickAngiela/MaThree">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://i.pinimg.com/564x/e5/e3/41/e5e341f2a439353f38c30fc1c007c96e.jpg"})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Comrades Restaurant
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/RiddickAngiela/comrades_restaurant_backend">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>

                <a href="https://github.com/RiddickAngiela/comrades_restaurant">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work
import React from "react";

const Social = ({ name, icon, url, color, text }) => {
  return (
    <a
      className={`p-2 lg:w-1/3 md:w-1/2 w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className={` h-full flex items-center border-gray-300 border p-4 rounded-lg text-${text} bg-${color}`}
      >
        <div
          className={`flex-shrink-0 w-16 h-16 bg-indigo-500 rounded-full inline-flex items-center justify-center mr-4 `}
        >
          {icon}
        </div>

        <div className="flex-grow">
          <h2 className="title-font font-medium ">{name}</h2>
        </div>
      </div>
    </a>
  );
};

function Contact() {
  return (
    <section className="text-gray-700 body-font relative" id="contact">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full mb-8 items-start">
          <div className="lg:w-1/2 w-full  mb-6 lg:mb-0 pr-3">
            <h1 className="sm:text-3xl text-2xl font-semibold mb-2 text-gray-900">
              Let's Connect
              <span role="img" aria-label="design">
                🚀
              </span>
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"> </div>
          </div>
        </div>
        <div class="flex flex-wrap -m-2">
          <Social
            name="Twitter"
            url="https://twitter.com/XavierOp28"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            }
          />

          <Social
            name="Linkedin"
            url="https://www.linkedin.com/in/abhishek877/"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            }
          />
          <Social
            name="Medium"
            url="https://medium.com/@web3wizard"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.3 12.94c-.1-.05-.15-.2-.15-.301V8.006c0-.1.05-.25.15-.351l.955-1.105V6.5H14.84l-2.56 6.478L9.366 6.5H5.852v.05l.903 1.256c.201.2.251.502.251.753v5.523c.05.302 0 .653-.15.954L5.5 16.894v.05h3.616v-.05L7.76 15.087c-.15-.302-.201-.603-.15-.954V9.11c.05.1.1.1.15.301l3.414 7.633h.05L14.54 8.76c-.05.3-.05.652-.05.904v5.925c0 .15-.05.25-.15.351l-1.005.954v.05h4.921v-.05l-.954-.954z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            }
          />
          <Social
            name="Email"
            color="indigo-500"
            text="white"
            url="mailto:tripathiabhishek877@gmail.com"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;

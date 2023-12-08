import React from 'react';

const AddLinkModal = ({ onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-700 bg-opacity-70 z-50">
      <div className="bg-white rounded-lg shadow dark:bg-gray-700 max-w-md w-full p-4 md:p-5">
        {/* Modal header */}
        <div className="flex items-center justify-between border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add a New Link
          </h3>
          <button
            onClick={onClose}
            type="button"
            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="link"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Link
              </label>
              <input
                type="text"
                name="link"
                id="link"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="https://tailwindui.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="topic"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Topic
              </label>
              <input
                type="text"
                name="topic"
                id="topic"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Tailwind website"
                required
              />
            </div>
            <div>
              <label
                htmlFor="tags"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tags
              </label>
              <input
                type="text"
                name="tags"
                id="tags"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="css,web,frontend"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add
            </button>
            {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{' '}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );

};

export default AddLinkModal;






function AlertSuccess(){
    return (
        <div
        className="flex justify-between bg-white rounded overflow-hidden px-3 py-1  space-x-2"
      >
      <div className="flex items-baseline">
        <span className="bg-green-300 bg-opacity-50 rounded-full p-1">
          <svg
            className="h-6 w-auto text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div className="flex flex-grow items-center">
        <p className="leading-tight text-xs md:text-sm">
          Your account is
            <strong className="text-green-400">  verified</strong>, thank
          you for choose Tailwind CSS Design.
        </p>
      </div>
      <div>
        <button
          type="button"
          className="bg-indigo-300 bg-opacity-25 text-gray-700 rounded overflow-hidden p-1 lg:p-2 focus:outline-none"
        >
          <svg
            NName="h-4 w-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    
    )
}


export default AlertSuccess
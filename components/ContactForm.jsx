import React from 'react';


const ContactForm = () => {

  


   
    
  return (
    <div className="my-6 mx-auto max-w-xl bg-white font-[sans-serif] "  >
<h1 className="text-3xl text-gray-500 font-extrabold text-center hover:text-gray-700">Contact</h1>
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
        ></textarea>
        <button
          type="button"
          className="text-white bg-gray-500 hover:bg-gray-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

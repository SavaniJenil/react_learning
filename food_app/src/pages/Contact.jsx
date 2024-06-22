import { useState } from "react";

const details = {
  name: "Jenil Savani",
  bio: "Frontend Developer",
  contact: {
    email: "jenilpatel7048@gmail.com",
    github: "https://github.com/SavaniJenil",
    linkedin: "https://www.linkedin.com/in/jenil-savani-043667202/",
    number: "7048494970",
  },
};

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  function handleClick(event) {
    event.preventDefault();
    setFullName('');
    setEmailAddress('');
    setMobileNumber('');
    setMessage('');
    window.alert("Thank you for your valuable feedback");
  }

  return (
    <div className="container-max md:mt-14 min-h-screen mt-5 flex flex-col w-full">
      <div className="w-full flex justify-center relative">
        <img
          className="w-5/6 mx-auto md:w-[97%] h-28 md:h-44 object-cover rounded-2xl mb-5"
          src="https://static.vecteezy.com/system/resources/previews/030/637/457/non_2x/dark-fast-food-8k-free-photo.jpg"
          alt="food_img"
        />
        <div className="absolute top-0 md:p-4 w-5/6 mx-auto md:mx-auto md:w-[97%] h-28 md:h-44 bg-black bg-opacity-20 text-white rounded-2xl flex items-center justify-center">
          <p className="text-[10px] md:text-2xl mx-auto lg:text-4xl font-semibold">
            We're eager to hear from you – drop us a message!
          </p>
        </div>
      </div>
      <div className="w-full mb-12 flex flex-col md:flex-row">
        <div className="mx-auto w-5/6 md:w-[50%]">
          <form className="max-w-md w-full md:w-[80%] mx-auto">
            <div className="mb-8">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow w-full"
                required
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow w-full"
                required
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number (optional)"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow w-full"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow w-full"
                required
              />
            </div>
            <div className="text-center">
              <button
              onClick={handleClick}
                type="submit"
                className="w-3/4 mx-auto md:w-full block mt-4 uppercase font-bold text-base md:text-lg bg-green-600 text-white text-center p-2 md:p-4 rounded-md"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
        <div className="h-56 mt-4 md:mt-0 w-5/6 md:w-[40%] m-auto shadow-md bg-gray-50 bg-opacity-70 rounded-lg">
          <div className="h-12 w-full border-b border-gray-600 flex justify-center items-center">
            <p className="text-lg font-semibold">CONTACT US</p>
          </div>
          <div className="flex flex-col justify-between mb-3 text-xs md:text-base">
            <div className="mx-8 my-4 grid grid-cols-12">
              <img
                className="h-6 w-7 col-span-2"
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
              />
              <a href={details.contact.email} className="col-span-10">
                {details.contact.email}
              </a>
            </div>
            <div className="mx-8 my-4 grid grid-cols-12">
              <img
                className="h-6 w-6 col-span-2"
                src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-call-icon.png"
              />
              <a href={details.contact.number} className="col-span-10">
                {details.contact.number}
              </a>
            </div>
            <div className="mx-8 my-4 grid grid-cols-12">
              <img
                className="h-7 w-7 col-span-2"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png"
              />
              <a href={details.contact.linkedin} className="col-span-10">
                {details.contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

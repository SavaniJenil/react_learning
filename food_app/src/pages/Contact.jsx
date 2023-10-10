import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const details = {
  name: 'Jenil Savani',
  bio: 'Frontend Developer',
  contact: {
    email: 'jenilpatel9913@gmail.com',
    github: 'https://github.com/SavaniJenil',
    linkedin: 'https://www.linkedin.com/in/jenil-savani-043667202/',
    number: '7048494970'
  },
};

const Contact = () => {
  return (
    <div className='container-max min-h-screen mt-5 flex flex-col w-full'>
      <div className='w-full relative'>
        <img className='w-full h-44 object-cover rounded-2xl mb-5' src='https://c4.wallpaperflare.com/wallpaper/837/898/423/food-fruit-healthy-acorn-wallpaper-preview.jpg' alt='food_img' />
        <div className="absolute top-0 left-0 bg-black bg-opacity-20 text-white p-4 w-full h-44 rounded-2xl flex items-center justify-center">
            <p className="text-4xl font-semibold">We're eager to hear from you – drop us a message!</p>
        </div>
      </div>
      <div className='mx-5 w-full mb-12 flex flex-row'>
        <div className='w-[50%]'>
        <form className="max-w-md w-[80%] mx-auto">
        <div className="mb-8">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">    
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder='Full Name'
            className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow w-full"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">   
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder='Email Address'
            className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow w-full"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder='Mobile Number (optional)'
            className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow w-full"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder='Type text'
            className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow w-full"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
          >
            Submit Feedback
          </button>
        </div>
      </form>
      </div>
      <div className='h-56 w-[45%] m-auto shadow-md bg-gray-50 bg-opacity-70 rounded-lg'>
        <div className='h-12 w-full border-b border-gray-600 flex justify-center items-center'>
        <p className='text-lg font-semibold'>CONTACT US</p>
        </div>
        <div className='flex flex-col justify-between mb-3'>
        <div className='mx-8 my-4 grid grid-cols-12'>
          <img className='h-6 w-7 col-span-2' src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' />
          <a href={details.contact.email} className='col-span-10'>
              {details.contact.email}
            </a>
        </div>
        <div className='mx-8 my-4 grid grid-cols-12'>
          <img className='h-6 w-6 col-span-2' src='https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-call-icon.png' />
          <a href={details.contact.number} className='col-span-10'>
              {details.contact.number}
            </a>
        </div>
        <div className='mx-8 my-4 grid grid-cols-12'>
          <img className='h-7 w-7 col-span-2' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png' />
          <a href={details.contact.linkedin} className='col-span-10'>
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

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact Us Page</h1>
      <form>
        <input
            type="text"
            className="username-box text-base p-2 m-2 leading-5 w-2/12 h-10 outline-0 text-start overflow-hidden text-ellipsis align-middle font-450 rounded-2xl border border-solid border-gray-500"
            placeholder="Username"
          />
          <input
            type="text"
            className="message-box text-base leading-5 w-2/12 h-10 p-2 m-2 outline-0 text-start overflow-hidden text-ellipsis align-middle font-450 rounded-2xl border border-solid border-gray-500"
            placeholder="Message to us"
          />
        <button className="submit-btn m-2 bg-green-700 text-white w-auto cursor-pointer py-2 px-4 border border-slate-400 rgb(226, 226, 231) rounded-3xl shadow hover:shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

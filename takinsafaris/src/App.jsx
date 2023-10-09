import './App.css'
import  { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("Please all field are required fill,Email not sent!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      emailjs
        .sendForm(
          "service_abzd5cf",
          "template_ncd937d",
          form.current,
          "cea2TAaV7fu3Aqtyp"
        )
        .then(
          () => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setTimeout(() => {
              toast.success("Email Sent, Will contact you as soon as Possible", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className=" bg-[#082f49] container mx-auto  flex-col-reverse md:flex-row  flex justify-between py-12 md:p-24">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-[20px]">
          <input
            type="text"
            placeholder="Name"
            value={name}
            name="clientname "
            onChange={(e) =>  setName(e.target.value)}
            className="md:w-[299px]  w-[315px] mx-auto placeholder-dark h-[42px] focus:outline-white  p-2 bg-[#000000]/50   rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            name="clientemail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-[299px]  w-[315px] mx-auto placeholder-dark  focus:outline-white bg-[#000000]/50 h-[42px] p-2   rounded-md"
          />
        </div>
        <div className="flex flex-col ">
          <input
            type="text"
            name="usersubject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject....."
            className="md:w-[633px] w-[315px] mx-auto placeholder-dark bg-[#000000]/50 h-[42px] p-2  focus:outline-white   rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            id=""
            cols="30"
            value={message}
            name="usermessage"
            onChange={(e) => setMessage(e.target.value)}
            rows="10"
            placeholder="Message......"
            className="md:w-[633px] w-[315px] mx-auto  bg-[#000000]/50 h-[200px] p-2 focus:outline-white placeholder-dark   rounded-md"
          ></textarea>
        </div>
        <div className="flex w-[315px] mx-auto md:w-[633px] items-center  ">
          <input
            type="checkbox"
            name="checkboxx"
            className="mr-2  h-6 w-6 bg-[#FFD230]"
          />
          <p className="md:text-[15px] leading-[15px]  w-[584px] text-sm">
            Would love to receive information on newsletters and more?
          </p>
        </div>
        <div className="flex md:justify-start justify-center">
          <button
            className=" bg-[#22c55e]/75 md:mr-24 hover:scale-95 duration-1000 transition-all text-white uppercase text-center py-4 px-8 justify-start  shadow-gray-100 rounded-md shadow-xl"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="flex flex-col font-bold font-mono text-center md:text-end gap-4 justify-center  ">
        <h1 className="text-7xl text-black/70 ">Want to make </h1>
        <h1 className="text-6xl  text-black/60 ">
          Inquiry <span className="quicksand-700">?</span>
        </h1>
        <p className="font-mono quicksand-700  text-xl md:text-3xl ">
          Get to know more about TakinSafaris services
        </p>
        <p className="font-sans quicksand-700 md:mb-0 mb-4   text-2xl">
          24 hour customer service!
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};




export default App

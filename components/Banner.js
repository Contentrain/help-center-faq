import Image from "next/image";
import peopleImage from "../public/people.png";
export default function Banner() {
  return (
    <div className="mb-32 mt-12 max-w-3xl mx-auto bg-slate-50 p-8 md:p-16 rounded-xl">
      <div className="flex flex-wrap justify-between">
        <div className="content">
          <Image
            width={140}
            height={72}
            src={peopleImage}
            alt=" Faq Template People"
          />
          <h5 className="font-semibold text-lg mb-2 mt-3">
            Can’t find what you are looking for?
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="banner-button flex items-end justify-end">
          <button className="text-white bg-indigo-500 px-6 py-3 rounded-xl hover:text-indigo-500 hover:bg-indigo-100 transition-colors mt-6 md:mt-0">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

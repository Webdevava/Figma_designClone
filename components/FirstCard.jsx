import { Diamond } from "lucide-react";
import image from "@/assets/download.png";
import Image from "next/image";

const FirstCard = ({
  title,
  no,
  titlepara,
  compliment,
  imageTitle,
  ratingCompliment,
  rating,
}) => {
  return (
    <div className="flex gap-0 justify-between mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="z-10 justify-center items-center self-end px-6 mt-8 text-xl leading-7 text-gray-500 whitespace-nowrap bg-white rounded-full border border-solid aspect-[1.05] border-zinc-200 border-opacity-0 h-[45px] max-md:pr-5">
        {no}
      </div>
      <div className="pr-7 pb-2.5 bg-white rounded-xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-0 max-md:mt-2.5">
              {compliment && (
                <div className="flex gap-2 justify-between px-3 py-2 text-base leading-6 text-white bg-orange-500 rounded-none">
                  <Diamond />
                  <div className="flex-auto my-auto">{compliment}</div>
                </div>
              )}
              <div className="flex flex-col items-center pl-14 mt-14 text-sm leading-5 text-center text-gray-500 whitespace-nowrap max-md:pl-5 max-md:mt-10">
                <Image
                  height={141}
                  width={141}
                  alt="img"
                  loading="lazy"
                  src={image}
                  className="aspect-[1.37] w-[141px]"
                />
                <div className="mt-4">{imageTitle}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-7 text-base leading-6 text-gray-600 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <span className="font-bold">{title}</span>
                {titlepara}
              </div>
              <div className="mt-3.5 font-bold leading-[150%] text-slate-700 max-md:max-w-full">
                Main highlights
              </div>
              <div className="self-start mt-5 ml-5 max-md:max-w-full">
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </div>
              <div className="flex gap-1 self-start px-px mt-8 text-blue-500 whitespace-nowrap leading-[150%]">
                <div className="grow">Show more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c5e3f938376029e2d95dee3aaef4f65da86dfa20d582dcccbe39315bea454c1?apiKey=0e620ac0d5f1430eb5e1af24d198e517&"
                  className="w-4 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col whitespace-nowrap max-md:mt-6">
              <div className="flex flex-col self-center px-8 pt-1 pb-5 max-w-full text-sky-800 bg-sky-50 rounded-none w-[145px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b67fc7c08b212551cc213225deecfe9759be310a0ab0bb6bbd5e06256095317?apiKey=0e620ac0d5f1430eb5e1af24d198e517&"
                  className="self-end w-2.5 aspect-square"
                />
                <div className="self-center mt-1.5 text-3xl leading-10">
                  {rating}
                </div>
                <div className="mt-6 text-sm leading-5">{ratingCompliment}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccea4ee86b3e418b817a6a2ae5b70f50f5f6365308d207784ac2e7bff2c67d0f?apiKey=0e620ac0d5f1430eb5e1af24d198e517&"
                  className="self-center mt-2.5 w-full aspect-[7.69]"
                />
              </div>
              <div className="justify-center items-center px-16 py-5 mt-20 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
                View
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;

import image from "@/assets/download.png";
import FirstCard from "./FirstCard";
import Image from "next/image";

const TopCards = () => {
  return (
    <div>
      <FirstCard
      no={1}
        title="  WixPro 72-Inch Responsive Website Builder"
        titlepara="- Comprehensive Digital Platform Creation Tool,
Streamlined Design Interface for Professional Websites
and Online Stores (Black/Blue)"
        compliment="Best Choice"
        imageTitle="Builder 1"
        ratingCompliment="Exceptional"
        rating="9.8"
      />
      <FirstCard

      no={2}
        title="SiteCraft 68-Inch Ultimate Web Design Studio"
        titlepara="- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
        compliment="Best Value"
        imageTitle="Builder"
        ratingCompliment="Excelent"
        rating="9.5"
      />
      <FirstCard
      no={3}
        title="  WixPro 72-Inch Responsive Website Builder"
        titlepara="- Comprehensive Digital Platform Creation Tool,
Streamlined Design Interface for Professional Websites
and Online Stores (Black/Blue)"
        compliment=""
        imageTitle="Builder 1"
        ratingCompliment="Exceptional"
        rating="9.1"
      />
      <div className="flex gap-0 justify-between mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="z-10 justify-center items-center self-end px-5 mt-8 text-xl leading-7 text-gray-500 whitespace-nowrap bg-white rounded-full border border-solid aspect-[1.02] border-zinc-200 h-[45px]">
          4
        </div>
        <div className="px-11 pt-2.5 pb-7 bg-white rounded-xl border border-solid border-black border-opacity-0 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center self-stretch my-auto text-sm leading-5 text-center text-gray-500 whitespace-nowrap max-md:mt-10">
                <Image
                height={141}
                width={141}
                  loading="lazy"
                  src={image}
                  className="aspect-[1.37] w-[141px]"
                />
                <div className="mt-12 max-md:mt-10">CDK</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-7 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="text-base leading-6 text-gray-600 max-md:max-w-full">
                    <span className="font-bold">CDK Resposive Builder:</span> An
                    extensive library of widgets and apps, and detailed
                    step-by-step guides
                  </div>
                  <div className="self-start px-1 pt-1.5 pb-3 mt-3 text-sm leading-5 text-sky-800 whitespace-nowrap bg-gray-100 rounded">
                    26% Off
                  </div>
                  <div className="mt-1 text-base font-bold leading-6 text-slate-700 max-md:max-w-full">
                    Main highlights
                  </div>
                  <div className="flex flex-col items-start py-2 pr-20 pl-3.5 mt-2 bg-orange-50 rounded-xl max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-2">
                      <div className="justify-center px-2.5 py-2 text-base leading-6 text-center text-blue-500 whitespace-nowrap bg-white rounded aspect-[1.43]">
                        9.9
                      </div>
                      <div className="flex-auto my-auto text-base leading-6 text-gray-600 capitalize">
                        building responsive
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2 text-base leading-6 whitespace-nowrap">
                      <div className="justify-center px-2.5 py-2 text-center text-blue-500 bg-white rounded aspect-[1.43]">
                        8.9
                      </div>
                      <div className="flex-auto my-auto text-gray-600 capitalize">
                        Cool
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2 text-base leading-6 whitespace-nowrap">
                      <div className="justify-center px-2.5 py-2 text-center text-blue-500 bg-white rounded aspect-[1.43]">
                        8.9
                      </div>
                      <div className="flex-auto my-auto text-gray-600 capitalize">
                        Docs
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-base leading-6 text-slate-700 max-md:max-w-full">
                    Why we love it
                  </div>
                  <div className="flex gap-2 self-start mt-3 text-base leading-6 text-gray-600 capitalize whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b26fd3f1bb4962ae14a61c575e4399f87d529d46d3cb8625556ad05fe471f0e0?apiKey=0e620ac0d5f1430eb5e1af24d198e517&"
                      className="w-6 aspect-square"
                    />
                    <div className="flex-auto my-auto">Documentation</div>
                  </div>
                  <div className="flex gap-2 self-start mt-1 text-base leading-6 text-gray-600 capitalize">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b26fd3f1bb4962ae14a61c575e4399f87d529d46d3cb8625556ad05fe471f0e0?apiKey=0e620ac0d5f1430eb5e1af24d198e517&"
                      className="w-6 aspect-square"
                    />
                    <div className="self-start mt-2">Easy Use</div>
                  </div>
                  <div className="flex gap-2 self-start mt-1 text-base leading-6 text-gray-600 capitalize">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b26fd3f1bb4962ae14a61c575e4399f87d529d46d3cb8625556ad05fe471f0e0?apiKey=0e620ac0d5f1430eb5e1af24d198e517&"
                      className="w-6 aspect-square"
                    />
                    <div className="my-auto">Out of box</div>
                  </div>
                </div>
                <div className="mt-3 text-base leading-6 text-blue-500 max-md:max-w-full">
                  Show more
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center whitespace-nowrap max-md:mt-8">
                <div className="flex flex-col items-center px-8 py-4 max-w-full text-sky-800 bg-sky-50 rounded-none w-[135px] max-md:px-5">
                  <div className="text-3xl leading-10">9.1</div>
                  <div className="self-stretch mt-7 text-sm leading-5">
                    Very Good
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7848b00d243cb3388f87b63915ddda63eb5b717d422a2200a0fc03c3c6b8f822?apiKey=0e620ac0d5f1430eb5e1af24d198e517&"
                    className="mt-2.5 w-full aspect-[6.67]"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f24f79ae1dbeb1b69187f659ee0d033b7b9daae23cde004458a26f65a6f197e4?apiKey=0e620ac0d5f1430eb5e1af24d198e517&"
                  className="mt-40 w-2.5 aspect-square max-md:mt-10"
                />
                <div className="justify-center items-center self-stretch px-16 py-5 mt-16 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
                  View
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;

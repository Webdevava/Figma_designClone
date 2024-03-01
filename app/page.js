import Bottomcards from "@/components/Bottomcards";
import FirstCard from "@/components/FirstCard";
import TopCards from "@/components/TopCards";
import { CheckCircle, ChevronDown, ChevronRight, Info } from "lucide-react";

function Home(props) {
  return (

      <div className="flex flex-col pb-4 w-full bg-white max-md:max-w-full">
       
        <div className="flex justify-center items-center px-16 mx-3 mt-6 bg-gray-50 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex z-10 flex-col mt-0 max-w-full w-[1090px]">
            <div className="flex flex-col px-7 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col pt-12 pb-2.5 ml-3 bg-gray-50 max-md:max-w-full">
                <div className="text-5xl text-slate-700 max-md:max-w-full max-md:text-4xl">
                  Best Website builders in the US
                </div>
                <div className="shrink-0 mt-6 h-px bg-zinc-200 max-md:max-w-full" />
                <div className="flex gap-5 justify-between items-start mt-2.5 w-full text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-0.5 mt-1.5 text-gray-600 max-md:flex-wrap max-md:max-w-full">
                    <CheckCircle/>
                    <div>Last Updated</div>
                    <div className="my-auto">-</div>
                    <div className="flex-auto text-sm leading-5">
                      February 22, 2020
                    </div>
                   <Info/>
                    <div className="grow whitespace-nowrap">
                      Advertising Disclosure
                    </div>
                  </div>
                  <div className="flex gap-1.5 text-center text-gray-500 whitespace-nowrap">
                    <div className="grow">Top Relevant</div>
                    <ChevronDown/>
                  </div>
                </div>
              </div>
              <div className="ml-3 max-w-full h-px bg-zinc-200 w-[1023px]" />
              <div className="flex gap-5 justify-between pr-20 mt-4 text-sm leading-5 text-gray-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="grow justify-center py-3.5 pr-14 pl-4 text-sm leading-5 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                  Tools
                </div>
                <div className="grow justify-center py-3.5 pr-12 pl-4 bg-white rounded-xl max-md:pr-5">
                  AWS Builder
                </div>
                <div className="grow justify-center px-4 py-3.5 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                  Start Build
                </div>
                <div className="grow justify-center py-3 pr-8 pl-4 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                  Build Supplies
                </div>
                <div className="grow justify-center items-start py-3 pr-16 pl-4 text-sm leading-5 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                  Tooling
                </div>
                <div className="grow justify-center py-3 pr-14 pl-4 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                  BlueHosting
                </div>
              </div>
              <div className="flex gap-2.5 items-center self-start mt-5 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto text-sm leading-5 text-gray-500">
                  Home
                </div>
                <ChevronRight/>
                <div className="self-stretch">Hosting for all</div>
                <ChevronRight/>
                <div className="self-stretch text-gray-500">Hosting</div>
                <ChevronRight/>
                <div className="self-stretch">Hosting6</div>
                <ChevronRight/>
                <div className="grow self-stretch">Hosting5</div>
              </div>
            </div>
<TopCards/>
            <div className="self-start mt-24 ml-8 text-3xl leading-10 text-slate-700 max-md:mt-10 max-md:max-w-full">
              Related deals you might like for
            </div>
            
            <div className="flex flex-col mt-3.5 max-md:max-w-full">
<Bottomcards/>
              <div className="self-end py-12 pr-5 pl-2.5 mt-9 max-w-full bg-gray-50 w-[1052px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="text-3xl leading-10 text-gray-500 max-md:mt-10">
                      Sign up and get exclusive special deals
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex gap-0 text-sm tracking-wider leading-5 text-center text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                      
                      <input type="text" className="border border-gray-400 text-xl h-12 rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
  );
}

export default Home;

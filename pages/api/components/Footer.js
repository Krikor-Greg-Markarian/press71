import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaGooglePlusG,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    // <div className="bg-black">
    //   <div className="p-20">
    //     <div className="grid grid-cols-4">
    //       <div className="col-span-1 ">
    //         <div className="text-center ">
    //           <p className="inline font-bold text-white">PRESS</p>
    //           <p className="inline text-red-400 font-bold">71</p>

    //           <div>
    //             <FaTwitter className="text-white inline" />
    //             <FaFacebook className="text-white inline ml-3" />
    //             <FaYoutube className="text-white inline ml-3" />
    //             <FaGooglePlusG className="text-white inline ml-3" />
    //             <FaInstagram className="text-white inline ml-3" />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-span-1">
    //         <p className="text-white">RECENT POSTS</p>
    //         <div class="flex">
    //           <div class="flex-grow w-16 h-16">
    //             <div className="small2"></div>
    //           </div>
    //           <div class="flex-shrink w-96 h-16 ...">
    //             <p className="text-white text-sm">
    //               {" "}
    //               Health This is What physical Therapy Can Actually Solve
    //             </p>
    //           </div>
    //         </div>
    //         <div class="flex pt-4">
    //           <div class="flex-grow w-16 h-16">
    //             <div className="small2"></div>
    //           </div>
    //           <div class="flex-shrink w-96 h-16 ...">
    //             <p className="text-white text-sm">
    //               {" "}
    //               Health This is What physical Therapy Can Actually Solve
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-span-1 ">
    //         <div className="">
    //           <p className="text-white">POPULAR CATEGORIES</p>

    //           <p className="text-gray-400 text-sm">
    //             Stories{" "}
    //             <span className="text-sm text-gray-400 float-right">23</span>{" "}
    //           </p>
    //           <p className="text-gray-400 text-sm">
    //             Health{" "}
    //             <span className="text-sm text-gray-400 float-right">45</span>{" "}
    //           </p>
    //           <p className="text-gray-400 text-sm">
    //             Local news{" "}
    //             <span className="text-sm text-gray-400 float-right">67</span>{" "}
    //           </p>
    //           <p className="text-gray-400 text-sm">
    //             Video{" "}
    //             <span className="text-sm text-gray-400 float-right">98</span>{" "}
    //           </p>
    //           <p className="text-gray-400 text-sm">
    //             Education{" "}
    //             <span className="text-sm text-gray-400 float-right">23</span>{" "}
    //           </p>
    //           <p className="text-gray-400 text-sm">
    //             Coronavirus{" "}
    //             <span className="text-sm text-gray-400 float-right">56</span>{" "}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col-span-1 ">
    //         <div className=" pl-12">
    //           <p className="text-white">TWITTER FEEDS</p>
    //           <p className="text-sm text-gray-400">
    //             carsafe-#Gutenbergts,Car Dealer available on @website{" "}
    //             <span className="text-white"> https://website.net</span>
    //           </p>
    //           <p>june 22,2021</p>
    //         </div>
    //         <div className=" pl-12">
    //           <p className="text-white">TWITTER FEEDS</p>
    //           <p className="text-sm text-gray-400">
    //             carsafe-#Gutenbergts,Car Dealer available on @website{" "}
    //             <span className="text-white"> https://website.net</span>
    //           </p>
    //           <p>june 22,2021</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center border-t-2 p-6">
    //     <p className="text-sm text-white">
    //       News71 &copy; 2021. Allrights reserved
    //     </p>
    //   </div>
    // </div>

    <div className="pt-8">
      <div className="bg-black ">
        <div className="grid grid-cols-4">
          <div className="col-span-1 pt-16 border-r-2 border-b-2">
            <div className="flex justify-center items-center">
              <p className="font-bold text-white ">
                PRESS <span className="text-red-500">71</span>{" "}
                <div className="pt-4">
                  <FaTwitter className="text-white inline" />
                  <FaFacebook className="text-white inline ml-3" />
                  <FaYoutube className="text-white inline ml-3" />
                  <FaGooglePlusG className="text-white inline ml-3" />
                  <FaInstagram className="text-white inline ml-3" />
                </div>{" "}
              </p>
            </div>
          </div>
          <div className="col-span-1 border-r-2 border-b-2 p-4">
            <div className="flex justify-center items-center">
              <p className="text-white text-sm ">
                RECENT POSTS{" "}
                <div>
                  <div class="flex pt-2">
                    <div class="flex-grow">
                      <div className="small2"></div>
                    </div>
                    <div class="flex-shrink">
                      <p className="text-sm pl-2">
                        Health This is what physical Therapy Can Actually Solve
                      </p>
                      <p className="text-sm text-gray-400 pl-2">
                        DECEMBER 30-2020
                      </p>
                    </div>
                    <div class="flex-grow"></div>
                  </div>
                  <div class="flex pt-2">
                    <div class="flex-grow">
                      <div className="small2"></div>
                    </div>
                    <div class="flex-shrink">
                      <p className="text-sm pl-2">
                        Health This is what physical Therapy Can Actually Solve
                      </p>
                      <p className="text-sm text-gray-400 pl-2">
                        DECEMBER 30-2020
                      </p>
                    </div>
                    <div class="flex-grow"></div>
                  </div>
                </div>{" "}
              </p>
            </div>
          </div>

          <div className="pl-8 border-r-2 border-b-2 p-4">
            <p className="text-sm font-bold text-white">POPULAR CATEGORIES</p>
            <p className="text-gray-400 text-sm pt-2">
              Stories{" "}
              <span className="text-gray-400 text-sm  float-right pt-2">
                23
              </span>{" "}
            </p>
            <p className="text-gray-400 text-sm pt-2">
              Health{" "}
              <span className="text-gray-400 text-sm  float-right pt-2">
                45
              </span>{" "}
            </p>
            <p className="text-gray-400 text-sm pt-2">
              Local news{" "}
              <span className="text-gray-400 text-sm  float-right pt-2">
                67
              </span>{" "}
            </p>
            <p className="text-gray-400 text-sm pt-2">
              Video{" "}
              <span className="text-gray-400 text-sm  float-right pt-2">
                98
              </span>{" "}
            </p>
            <p className="text-gray-400 text-sm pt-2">
              Education{" "}
              <span className="text-gray-400 text-sm  float-right pt-2">
                23
              </span>{" "}
            </p>
            <p className="text-gray-400 text-sm pt-2">
              Coronavirus{" "}
              <span className="text-gray-400 text-sm  float-right pt-2">
                56
              </span>{" "}
            </p>
          </div>

          <div className="pl-12 border-r-2 border-b-2 p-4">
            <p className="font-bold text-sm text-white">TWITTER FEEDS</p>
            <div>
              <p className="text-sm text-gray-400 pt-4">
                {" "}
                <FaTwitter className="text-red-400 inline" />
                carsafe-#Gutenbergts,Car Dealer available on @website{" "}
                <span className="text-white"> https://website.net</span>
              </p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                {" "}
                <FaTwitter className="text-red-400 inline" />
                carsafe-#Gutenbergts,Car Dealer available on @website{" "}
                <span className="text-white"> https://website.net</span>
              </p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="flex justify-center items-center">
            <p className="text-white text-sm">
              News &copy; 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

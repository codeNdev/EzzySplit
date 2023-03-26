import React, { useEffect, useState } from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { LastGroupMember } from "../../data/LastGroupMember";

export default function LastGroupModify(props) {

    const [toggleDesc, FtoggleDesc] = useState(false);

    const callToggle = (e) => {
        e.preventDefault();
        FtoggleDesc(!toggleDesc);
    }

    // const displayFirstGroup =()=>{
    //     console.log(`Displau: ${props.id}`);
    //     console.log(`toggle1 : ${toggleDesc}`);
    //     if(props.id === 1){
    //         console.log(`toggle2 : ${toggleDesc}`);
    //         FtoggleDesc(true);
    //     }
    //     console.log(`toggle3 : ${toggleDesc}`);
    // }

    // useEffect(()=>{
    //     displayFirstGroup();
    // },[])
    return (
        <>
            <div className="bg-gray-200 h-15 rounded-xl m-3 p-2 hover:bg-primary hover:text-white flex justify-between ">
                <div className="flex text-lg">
                    <span className="pl-2 pr-2">{props.id}.</span>
                    <p className="pl-2 hover:cursor-pointer">{props.name}</p>
                    <p className="pl-2  text-[13px] font-light hover:cursor-pointer">Created on: {props.created}</p>
                </div>
                <div>
                    <button className="text-xl rounded-xl p-1 hover:cursor-pointer" onClick={callToggle} >
                        <BiChevronDown />
                    </button>
                </div>
            </div>
            {toggleDesc && <div className="flex justify-between">
                <div class="max-w-md bg-white   h-52 rounded-xl w-full  m-3 bg-no-repeat bg-cover bg-center ">

                    <div class="px-6 py-4 ">
                        <div class="font-semibold text-blue-900 text-sm mb-2 justify-between flex">
                            <div>Group Member </div>
                            <div> Amount Paid</div>
                            <div>Join Date</div>
                        </div>
                        {/* <div className="bg-gray-200 h-15 rounded-xl w-full   flex space-x-24 overflow-x-visible"> */}
                            {LastGroupMember.map((item) => (
                                <div className="bg-gray-200 h-15 rounded-xl w-full mt-2  flex justify-between overflow-x-visible">
                                    <div>{item.name}</div>
                                    <div>{item.expenses}</div>
                                    <div className="pl-0">{item.created}</div>
                                </div>
                            ))}



                        {/* </div> */}
                        {/* <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p> */}
                    </div>
                    {/* <div class="px-4 pt-2 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
                </div>
                <div class="max-w-sm bg-white dark:text-gray-200  h-52 rounded-xl w-full  m-3 bg-no-repeat bg-cover bg-center ">

                    <div class="px-6 py-2 mt-10">
                        <div class="font-semibold flex justify-between  mb-2">
                            <div className="">Group Created on :</div>
                            <div className="">12/03/2022</div>
                        </div>
                    </div>
                    <div class="px-6 py-2">
                    <div class="font-semibold flex justify-between  mb-2">
                            <div className="">Group Created By :</div>
                            <div className="">ncslc</div>
                        </div>
                    </div>
                    <div className="font-bold  items-center">Expenses settle</div>
                </div>
                
            </div>}
        </>
    )
}

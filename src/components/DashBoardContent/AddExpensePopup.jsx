import React, { useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import AddDatePopup from './AddDatePopup';
import AddNotePopup from './AddNotePopup';
import SplitPopup from './SplitPopup';
import PaidByPopup from './PaidByPopup';
import AddCurrencyPopup from './AddCurrencyPopup';
import axios from 'axios';

const AddExpensePopup = (props) => {
    
    const [addon, Caddon] = useState(0);
    const [inputData, FinputData] = useState({
        amount: "",
        description: "",
        groupId: "63e28d86e007610a77e259da"
    });

    const InputEvent = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        FinputData({...inputData,[name]:value});

    }

    const paidBy = (e) => {
        e.preventDefault();
        Caddon(1);
    }
    const split = (e) => {
        e.preventDefault();
        Caddon(2);
    }
    const addDate = (e) => {
        e.preventDefault();
        Caddon(3);
    }
    const addNote = (e) => {
        e.preventDefault();
        Caddon(4);
    }
    const addCurrency = (e) => {
        e.preventDefault();
        Caddon(6);
    }

    const closeAdd = () => {
        Caddon(0)
    }


    const addExp = async (e) => {
        e.preventDefault();
        try {
            
            const { amount, description, groupId } = inputData;
            const res = await fetch("http://localhost:8000/expense/addExpense", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount, description, groupId
                })
            })
            const data =await res.json();
            console.log(data);
            alert("Expenses added successfullt");
            FinputData({
                amount: "",
                description: "",
                groupId: "63e28d86e007610a77e259da"
            })

        } catch (error) {
            console.log("Error in Adding Expenses");
        }
    }

    return (
        <>
            <div className='bg-neutral-200 opacity-90 fixed inset-0 z-50 flex-col '>

                <form method='POST' >
                    <div className=' h-3/5 flex justify-center mt-16'>
                        <div className='border-2 border-primary rounded-xl w-[425px] my-auto bg-white'>
                            <div className='bg-primary rounded-lg p-2 px-3 flex justify-between'>
                                <h5 className=' text-white font-semibold text-lg'>Add an expenses</h5>
                                <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
                                    <VscClose />
                                </button>
                            </div>
                            <div className='flex justify-start items-center px-3 py-1'>
                                <div>
                                    <h5>With <span className='font-semibold'>you</span>  and <span className='font-semibold'>{props.groupDetails.groupName}</span></h5>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center mt-3'>
                                    <div className='w-2/6 '>
                                        <div className='w-2/5 m-auto py-3 '>

                                            <img src='../images/grocery.png' alt='Loading' />
                                        </div>
                                    </div>
                                    <div className='w-3/5  '>
                                        <div className='border-b-[1px] border-dotted border-emerald-500'>
                                            <input type="text" 
                                            placeholder='Enter description'
                                             className='rounded-lg h-7 w-full border-none focus:ring-0'
                                             name='description'
                                             value={inputData.description}
                                             onChange={InputEvent}
                                             />
                                        </div>
                                        <div className='mt-1 flex items-center border-b-[1px] border-dotted border-emerald-500'>
                                            <button className='font-medium hover:text-slate-500' onClick={addCurrency}>INR</button>
                                            <input type="text" 
                                            placeholder='Amount'
                                             className='rounded-lg h-7 w-52 border-none focus:ring-0'
                                             name='amount'
                                             value={inputData.amount}
                                             onChange={InputEvent}
                                             />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <div>
                                        <span>Paid by </span>
                                        <span><button className=' text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid' onClick={paidBy}>
                                            You
                                        </button></span>
                                        <span> and split </span>
                                        <span><button
                                            className='text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid'
                                            onClick={split}
                                        >equilly</button></span>
                                    </div>
                                </div>


                                <div className='m-2'>
                                    <p>(20$/person)</p>
                                </div>

                                {/* Buttond */}
                                <div className='flex justify-evenly mt-6 mb-10'>
                                    <div className='py-1 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700  '>
                                        <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' onClick={addDate}>
                                            25 Dec 2022
                                        </button>
                                    </div>
                                    <div className='py-1 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700 '>
                                        <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' onClick={addNote} >
                                            Add Image/Note
                                        </button>
                                    </div>
                                </div>

                                <hr />


                                <div className='flex justify-end py-3'>
                                    <div className='py-1 px-4 mr-3 text-base font-normal bg-slate-500 text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-600  '>
                                        <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' >
                                            Cancel
                                        </button>
                                    </div>
                                    <div className='py-1 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700 border-2 border-emerald-300 '>
                                        <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full'
                                        onClick={addExp}  >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* Add seconaadry popup */}
                        {/* <div className='border-2 border-emerald-600 w-[28%] my-auto rounded-xl mx-2'> */}

                        {addon === 1 && <PaidByPopup closeAdd={closeAdd} groupDetails={props.groupDetails} />}
                        {addon === 2 && <SplitPopup closeAdd={closeAdd} groupDetails={props.groupDetails} />}
                        {addon === 3 && <AddDatePopup />}
                        {addon === 4 && <AddNotePopup closeAdd={closeAdd} />}
                        {addon === 6 && <AddCurrencyPopup closeAdd={closeAdd} />}
                        {/* </div> */}
                    </div>



                </form>
            </div>
        </>
    )
}

export default AddExpensePopup
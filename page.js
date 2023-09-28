"use client";
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler = (e)=>{
    e.preventDefault()
    setmaintask([...maintask, { title, desc}]);
    settitle("")
    setdesc("")
    console.log(maintask)
  };
  const deleteHandler = (i)=>{
   let copytask = [...maintask]
   copytask.splice(i,1)
   setmaintask(copytask)
  }
  let rendertask = <h2 className='font-bold text-5xl'>no task available</h2>


 if(maintask.length>0){
  rendertask =  maintask.map((t, i)=>{
    return(
      <li key={i} className='flex items-center justify-between'>
      <div className='flex justify-between mb-7 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-xl font-medium'>{t.desc}</h6>
      </div>
      <button  
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400 text-white px-4 py-2 text-2xl
                        font-bold rounded m-5'>DELETE</button>
      </li>
    );

  });
 }

  return (
    <>
    <h1 className='bg-black text-white
    p-5 text-5xl text-bold 
    text-center'>dishant's ToDo list</h1>



    <form onSubmit={submithandler}>
      <input type='text' className='text-2xl border-zinc-800 
      border-2 m-5 px-4 py-2'
      placeholder='Enter Title Here'
      value={title}
      onChange={(e)=>{
         settitle(e.target.value)
      }}/>


      <input type='text' className='text-2xl border-zinc-800 
      border-2 m-5 px-4 py-2'
      placeholder='Enter Description Here'
      value={desc}
      onChange={(e)=>{
         setdesc(e.target.value)
      }}/>

      <button className='bg-black text-white px-4 py-2 text-2xl
                        font-bold rounded m-5' >add task</button>
      
    </form>
    <hr/>
    <div className='p-5 bg-slate-200'>
      <ul>{rendertask}</ul>
    </div>
    </>
  )
  
}

export default page
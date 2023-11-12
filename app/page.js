"use client"
import React, { useState } from 'react'
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])


  const submithandler = (e)=>{
    e.preventDefault()
    setmaintask([...maintask, {title,desc}])
    settitle("")
    setdesc("")
  }

  const deletehandler = (i)=>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  let rendertask = <h2>No Task Available</h2>

  if (maintask.length>0) {
    rendertask = maintask.map((t,i)=>{
      return (
        <li key={i}>
        <div className='main'>
        <h5> {t.title} </h5>
        <h6> {t.desc} </h6>
        <button className='del' onClick = {()=>{deletehandler(i)}}
        >delete</button>
      </div>
      </li>
      );
    })
  }
  return (
    <div>
      <>
        <h1 className='heading'>To Do List</h1>

        <div className='form'>

          <form onSubmit={submithandler}>

            <input placeholder='Enter Title'
              value={title}
              onChange={(e)=>
                settitle(e.target.value)
              }>
            </input>

            <input placeholder='Enter Description'
              value={desc}
              onChange={(e)=>
              setdesc(e.target.value)
              }>
            </input>

            <button>Add Task</button>

            <div className='bottom'>
              <ul>
                {rendertask}
              </ul>
            </div>

          </form>
          
        </div>
        
      </>
    </div>
  )
}

export default page
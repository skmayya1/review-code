import { auth, signIn } from '@/auth'
import React from 'react'
import { redirect } from 'next/navigation'
import { FaGithub } from "react-icons/fa";
import { metadata } from '@/app/layout';
import { FcGoogle } from "react-icons/fc";


metadata.title = "Signin "
metadata.description = "Signin to your account"

const page = async () => {
  const session = await auth()
  if(session){
    redirect("/");
  }
  return (
    <div className='bg-[#141414] h-screen w-full flex justify-center items-center gap-3 text-zinc-300 flex-col'>
     <form className='w-[22vw] font-mono flex flex-col gap-3 justify-center items-center'
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className='bg-[#2c2c2c] hover:bg-[#3b3b3b] transition-all duration-300 px-4 py-3 rounded-lg w-full flex items-center justify-center gap-3 font-semibold'
       type="submit"><FaGithub size={25} color='white'/> Signin with GitHub</button>
    </form>
    or
     <form className='w-[22vw] font-mono flex flex-col gap-3 justify-center items-center'
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button className=' bg-[#2c2c2c] hover:bg-[#3b3b3b] transition-all duration-300 px-4 py-3 rounded-lg w-full flex items-center justify-center gap-3 font-semibold'
       type="submit"><FcGoogle size={25} /> Signin with Google</button>
    </form>
    </div>
  )
}

export default page
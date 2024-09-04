import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page =  async () => {
  const session = await auth()
  if(!session){
    return redirect("/oauth/signin")
  }
  return (
    <div>
       Data
    </div>
  )
}

export default page
import { UserProfile } from "@clerk/nextjs"

const setting = () => {
  return (
    <div className="flex items-center justify-center h-full p-5 m-5">
      <UserProfile/>
    </div>
  )
}

export default setting
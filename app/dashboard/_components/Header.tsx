import { Search } from "lucide-react"

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
      <div className="flex gap-2 border rounded-md p-2 max-w-lg bg-white">
        <Search/>
        <input placeholder="Search ......." className="outline-none"/>
      </div>
      <div>
        <h2 className="bg-primary text-white p-1 rounded-full text-xs px-2">🔥 Join Membership for just $9.9/Month </h2>
      </div>
    </div>
  )
}

export default Header

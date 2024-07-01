import { Search } from "lucide-react"

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 
    flex justify-center items-center text-white flex-col">
      <h2 className="font-bold text-3xl">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 p-2 border rounded-md items-center bg-white my-5 w-[50%]">
            <Search className="text-primary"/>
            <input placeholder="Search" className="bg-transparent outline-none w-full text-black"
             onChange={(event) => onSearchInput(event.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default SearchSection

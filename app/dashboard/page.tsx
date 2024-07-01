'use client'
import { useState } from "react";
import SearchSection from './_components/SearchSection'
import TemplateListsSection from './_components/TemplateListsSection'

const Dashboard = () => {
  const [usersearchInput, setUserSearchInput] = useState<string>();

  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      <TemplateListsSection usersearchInput={usersearchInput}/>
    </div>
  )
}

export default Dashboard

import { useExpenses } from "../store/Expenses"
import "../style/Ecran.css"
import { CreateExpand } from "./CreateExpand/CreateExpand"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ListSpent } from "./ListSpent"
import { Spent } from "./Spent"

export const Ecran = () => {
  const isCreate = useExpenses(state => state.isCreate)
  
  return <>
    <div className="ecran">
      <Header />
      {isCreate ? (
        <CreateExpand />
        ) : (
          <>
            <Spent />
            <ListSpent />
          </>
        )}

      <Footer />
    </div>
  </>
}
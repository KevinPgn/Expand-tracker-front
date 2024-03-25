import "../style/Ecran.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ListSpent } from "./ListSpent"
import { Spent } from "./Spent"

export const Ecran = () => {
  return <>
    <div className="ecran">
      <Header />
      <Spent />
      <ListSpent />
      <Footer />
    </div>
  </>
}
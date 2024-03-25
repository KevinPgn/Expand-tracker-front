import { useExpenses } from '../store/Expenses';
import '../style/Footer.css'
import { IoAddSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";

export const Footer = () => {
  const setIsCreate = useExpenses(state => state.setCreate);
  const isCreate = useExpenses(state => state.isCreate);

  return <>
    <footer>
      <div>
        {!isCreate ? (
          <div className="add" onClick={() => setIsCreate(true)}>
            <IoAddSharp />
          </div>
        ): (
          <div className="add" onClick={() => setIsCreate(false)}>
            <FaMinus />
          </div>
        )}
      </div>
    </footer>
  </>
}
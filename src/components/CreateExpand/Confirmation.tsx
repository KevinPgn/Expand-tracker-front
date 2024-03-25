import { FaLongArrowAltRight } from "react-icons/fa";
import { useExpenses } from "../../store/Expenses";

interface ConfirmationProps {
  spent: number;
  tag: string;
  emoji: string;
  confirmationOpenModal: () => void;
}

export const Confirmation = ({spent, tag, emoji, confirmationOpenModal}: ConfirmationProps) => {
  const addExpense = useExpenses((state) => state.addExpense)
  
  const addToExpenses = (spent: number, tag: string, emoji: string) => {
    let date = new Date()
    addExpense({id: date.getTime(), amount: spent, tag: `${emoji} ${tag}`, createAt: `${date.getHours()}:${date.getMinutes()}h`})
    confirmationOpenModal()
  }
  return <>
    <div className="filer">
      <div className="confirmation">
        <h2>Confirm</h2>

        <p>You cant edit it later, please, confirm with the confirm button or 
            cancel to go back to the previous screen.</p>

        <div className="infos">
          <span className="amount">${spent}</span>
          <FaLongArrowAltRight />
          <span className="emoji">{emoji}</span>
          <span className="tag">{tag}</span>
        </div>

        <div className="btn-content">
          <button className="cancel" onClick={confirmationOpenModal}>Cancel</button>
          <button className="confirm"
            onClick={() => addToExpenses(spent, tag, emoji)}
          >Confirm</button>
        </div>
      </div>
    </div>
  </>
}
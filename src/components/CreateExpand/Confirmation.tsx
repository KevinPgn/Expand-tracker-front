import { FaLongArrowAltRight } from "react-icons/fa";

interface ConfirmationProps {
  spent: number;
  tag: string;
  emoji: string;
  confirmationOpenModal: () => void;
}

export const Confirmation = ({spent, tag, emoji, confirmationOpenModal}: ConfirmationProps) => {
  return <>
    <div className="filer">
      <div className="confirmation">
        <h2>Confirm</h2>

        <p>You cant edit it later, please, confirm with the confirm button or 
            cancel to go back to the previous screen.</p>

        <div className="infos">
          <span>${spent}</span>
          <FaLongArrowAltRight />
          <span>{emoji}</span>
          <span>{tag}</span>
        </div>

        <div className="btn-content">
          <button className="cancel" onClick={confirmationOpenModal}>Cancel</button>
          <button className="confirm">Confirm</button>
        </div>
      </div>
    </div>
  </>
}
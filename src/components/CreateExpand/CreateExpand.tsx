import { useState } from "react"
import "./CreateExpand.css"
import { FaArrowDownLong } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { useExpenses } from "../../store/Expenses";
import { TagsList } from "./TagsList";
import { Confirmation } from "./Confirmation";

export const CreateExpand = () => {
  const tag = useExpenses((state) => state.tag)
  const amount = useExpenses((state) => state.amount)

  const setIsCreate = useExpenses((state) => state.setCreate)
  const setTag = useExpenses((state) => state.setTag)
  const setEmoji = useExpenses((state) => state.setEmoji)
  const setAmount = useExpenses((state) => state.setAmount)

  const [tabOpenModal, setTabOpenModal] = useState<boolean>(false)
  const [confirmationOpenModal, setConfirmationOpenModal] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 0) {
      setAmount(0)
    } else {
      setAmount(parseInt(e.target.value))
    }
  }

  return <>
    <div className="create-expand">
      <input type="number" placeholder="0" value={amount} onChange={(e) => handleChange(e)}/>
      <FaArrowDownLong className="arrow-down"/>
      <div className="tags-content" onClick={() => setTabOpenModal(!tabOpenModal)}>
        <FaTags />
        <span>Select your tag...</span>
      </div>

      {tabOpenModal && <TagsList 
      setTag={setTag} 
      setEmoji={setEmoji}
      tabOpenModal={() => setTabOpenModal(!tabOpenModal)}/>}

      <div className="btn-content">
        <button className="cancel" onClick={() => setIsCreate(false)}>Cancel</button>
        <button className="next" disabled={amount === 0 || tag === ""} onClick={() => setConfirmationOpenModal(true)}>Next</button>
      </div>

      {confirmationOpenModal && <Confirmation confirmationOpenModal={() => setConfirmationOpenModal(!confirmationOpenModal)}/>}
    </div>
  </>
}
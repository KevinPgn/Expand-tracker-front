import { useState } from "react"
import "./CreateExpand.css"
import { FaArrowDownLong } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { useExpenses } from "../../store/Expenses";
import { TagsList } from "./TagsList";
import { Confirmation } from "./Confirmation";

export const CreateExpand = () => {
  const setIsCreate = useExpenses((state) => state.setCreate)

  const [spent, setSpent] = useState<number>(0)
  const [tag, setTag] = useState<string>("")
  const [tabOpenModal, setTabOpenModal] = useState<boolean>(false)
  const [confirmationOpenModal, setConfirmationOpenModal] = useState<boolean>(false)
  const [emoji, setEmoji] = useState<string>("")  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 0) {
      setSpent(0)
    } else {
      setSpent(parseInt(e.target.value))
    }
  }

  return <>
    <div className="create-expand">
      <input type="number" placeholder="0" value={spent} onChange={(e) => handleChange(e)}/>
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
        <button className="next" disabled={spent === 0 || tag === ""} onClick={() => setConfirmationOpenModal(true)}>Next</button>
      </div>

      {confirmationOpenModal && <Confirmation 
      spent={spent}
      tag={tag}
      emoji={emoji}
      confirmationOpenModal={() => setConfirmationOpenModal(!confirmationOpenModal)}
      />}
    </div>
  </>
}
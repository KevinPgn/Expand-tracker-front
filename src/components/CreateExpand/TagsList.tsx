import { useExpenses } from "../../store/Expenses"
import "./CreateExpand.css"
import { FaPlus } from "react-icons/fa";

export const TagsList = ({tabOpenModal}: any) => {
  const tags = useExpenses((state) => state.tags)
  const setEmoji = useExpenses((state) => state.setEmoji)
  const setTag = useExpenses((state) => state.setTag)
  
  const handleClick = (emoji: string, tag: string) => {
    tabOpenModal()
    setEmoji(emoji)
    setTag(tag)
  }

  return <>
  <div className="filter">
    <div className="tag-list">
      <div className="addtag">
        <FaPlus />
      </div>
      {
        tags.map((tag) => (
          <div key={tag.id} className="tag" onClick={() => handleClick(tag.emoji, tag.tag)}>
            <span className="emoji">{tag.emoji}</span>
            <span>{tag.tag}</span>
          </div>
        ))
      }
    </div>
  </div>
  </>
}
import { CountButton } from "~features/count-button"
import { PlateEditor } from "@/components/editor/plate-editor"


import "~style.css"

function IndexPopup() {
  return (
    <div className="h-[500px] w-[500px]">
      <PlateEditor />
    </div>
  )
}

export default IndexPopup

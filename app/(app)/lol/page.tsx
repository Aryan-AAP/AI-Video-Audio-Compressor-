'use client'
import { CldUploadButton, CldUploadWidget } from "next-cloudinary"

type Props = {}
const lol = (props: Props) => {
  return (
    <div>
        <h1>Trying</h1>
        <CldUploadButton uploadPreset="<Upload Preset>" />
       

    </div>
  )
}
export default lol
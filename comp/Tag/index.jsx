import { TagWrapper,TagText } from "./tag.style"


const Tag =({tagName="tagName",id})=>{

   return <TagWrapper id={id} >
       <TagText>{tagName}</TagText> 
       
       </TagWrapper>
}

export default Tag
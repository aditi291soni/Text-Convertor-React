import React from 'react'
import { useState } from 'react';
const TextConvertor = () => {
    const [text, settext] = useState();
    const UppercaseConvertor=()=>{
const upper=text.toUpperCase()
settext(upper)
console.log(upper);
console.log(text);
    }
  
  return (
    <div className='container mt-5'>
      
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Enter your text here</label>
  <textarea name='text' value={text} onChange={(e)=>{settext(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" cols='5' rows="3"></textarea>
</div>
<button onClick={UppercaseConvertor} className='btn btn-primary' >Uppercase</button>
    </div>
  )
}

export default TextConvertor

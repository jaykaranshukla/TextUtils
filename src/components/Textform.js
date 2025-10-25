import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    //console.log("Uppercase was clicked"+ text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case!", "success");
  }

  const handleLoClick=()=>{
    //console.log("Uppercase was clicked"+ text);
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case!", "success");
  }

  const handleclearClick=()=>{
    //console.log("Uppercase was clicked"+ text);
    let newtext=" ";
    setText(newtext);
    props.showAlert("Text cleared!", "success");
  }
  
  const handleOnChange=(event)=>{
    //console.log("onChange");
    setText(event.target.value)
    // props.showAlert("New Event!", "success");
  }

    const handleCopyClick=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipbiard!", "success");
  }

  const handleSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

   const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#072a47ff'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
         id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to uppercase</button>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}> Convert to lowercaase</button>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleclearClick}> Clear Text</button>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}> Copy text</button>
        <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleSpace}> Remove Extra Space</button>
         </div>
         <div className='container my-3' style={{color:props.mode==='dark'?'white':'#072a47ff'}}>
           <h2>Your text summary</h2>
           <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
           <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Nothing to preview."}</p>
         </div>
         </>
  )
}


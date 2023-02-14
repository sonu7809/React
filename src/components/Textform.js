import React, {useState} from 'react'

export default function Textform(props) {
  const handleupclck =()=>{
    // console.log('Uppercase was clicked' + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to UpperCase",'success')
  }
  const handledownclick =()=>{
    // console.log('Uppercase was clicked' + text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to LowerCase",'success')
  }
  const handleclearclick =()=>{
    // console.log('Uppercase was clicked' + text);
    let newtext = '';
    setText(newtext)
    props.showAlert("Text Cleared",'success')
  }
  const handleonchange =(event)=>{
    // console.log('on change');
    setText(event.target.value);
  }
  const  handlecopy =() =>{
    var text =document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces =() =>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  
  const[text,setText] = useState('');

    return(
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
       
        <textarea className="form-control" value ={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="Mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclck}>Convert to upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handledownclick}>Convert to lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter Something'}</p>
    </div>
    </>
  )
}

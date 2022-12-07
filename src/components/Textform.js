import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked. ' + text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked the uppercase button.");

        props.showAlert('everything is converted to uppercase.', 'success');
    }

    const handleLoClick = () => {
        // console.log('Uppercase was clicked. ' + text);
        let newText = text.toLowerCase();
        setText(newText);
        // setText("You have clicked the uppercase button.");

        props.showAlert('everything is converted to lowercase.', 'success');
    }

    const handleOnChange = (eventTyping) => {
        // console.log('OnChange happened. ');
        setText(eventTyping.target.value);
        // props.showAlert('you are typing something..', 'primary');
    }

    const handleCapClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert('first letter is capital now.', 'success');
    }

    const handleClr = () => {
        let newText = '';
        setText(newText);
        props.showAlert('everything is cleared.', 'success');
    }

    const handleRevClick = () => {
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
        props.showAlert('words have been reversed.', 'success');
    }

    const handleCopy = () => {
        var text = document.getElementById("mytextbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('text has been copied to clipboard.', 'success');
    }

    const handleCapWord = () => {
        let textArr = text.split(" ");
        // console.log(textArr.length);

        for (let i=0; i<textArr.length; i++) {
            textArr[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
        }

        let newText = textArr.join(" ");

        setText(newText);
        props.showAlert('Words have been capitalized.', 'primary');
    }

    const handleXtrSpc = () => {
        let newText = text.split(" ").join(" ").trim();
        setText(newText);
        props.showAlert('Extra spaces have been removed.', 'success');
    }

    const [text, setText] = useState("");

    // setText(0);
    return (
        <div className='container my-3'>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#000000':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mytextbox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Cap first letter</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClr}>Clear All</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleRevClick}>Reverse Words</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCapWord}>Cap Every Word</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleXtrSpc}>Remove Extra Spaces</button>
            </div>

            <div className="container">
                <h3 className='my-3'>You have typed this-- </h3>
                <p>{text.split("").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes approx to read.</p> {/* to count the approx time to read what's written */}
                <h2>Preview</h2>
                <p style={{backgroundColor: props.mode==='dark'?'#0000ff82':'white' ,height:'200px', border:'1px solid', borderColor: props.mode==='dark'?'blue':'#b5b5b5', borderRadius:'5px', padding:'10px'}}>{text.length>0?text:'*Type something above to preview here*'}</p>
            </div>
        </div>
    )
}

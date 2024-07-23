// import React, { useState } from 'react'

export default function AboutUs(props) {
    
  // const [myStyle, setMyStyle] = useState({
  //   color : 'black',
  //   backgroundColor : 'white',
    
  // })
  // const [btnText, setBtnText] = useState("Enable dark mode");
  
  // const toggleStyle = () => {
  //   if(myStyle.backgroundColor === 'white'){
  //     setMyStyle({
  //       color : 'white',
  //       backgroundColor : 'black',
  //       border : '1px solid black'
        
  //     })
  //     setBtnText("Enable light mode");
  //   }
  //   else{
  //     setMyStyle({
  //       color : 'black',
  //       backgroundColor : 'white'
  //     })
  //     setBtnText("Enable dark mode");
  //   }
  // }

  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'black':'white',
    // border: '1px solid'
  };




  return (
    <div className='container' style={myStyle}>
        <h2 className='my-2'>About us</h2>
        <div className="accordion"  id="accordionExample">
            <div className="accordion-item"  >
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                    </div>
                </div>
            </div>
            <div className="accordion-item"  >
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                     </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" 
                    style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web Browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, Blog, books, Excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
        {/* <button type = "button" onClick={toggleStyle} className='btn btn-outline-primary my-2 mx-2'>{btnText}</button> */}
    </div>
  )
}

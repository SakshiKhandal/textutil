import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function AboutUs() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  const [btnText, setBtnText] = useState('Enable dark mode');

  const toggleStyle = () => {
    if (myStyle.backgroundColor === 'white') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid black',
      });
      setBtnText('Enable light mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Enable dark mode');
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2">About us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong>
            </div>
          </div>
        </div>
        {/* Other accordion items go here */}
      </div>
      <Link to="/" className="btn btn-outline-primary my-2 mx-2">
        {btnText}
      </Link>
    </div>
  );
}

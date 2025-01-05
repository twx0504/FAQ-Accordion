import { useState, useEffect } from "react";
import { faqsData } from "./data/faqs";
import "./App.css";
import starIcon from "./assets/images/icon-star.svg";
function App() {
  /* Track only the currently open item index, -1 means all closed */
  const [openIndex, setOpenIndex] = useState(-1);

  /* Just to track the updated openIndex */
  useEffect(() => {
    console.log("Updated openIndex:", openIndex);
  }, [openIndex]); /* dep as openIndex */


  return (
    <div className="backdrop">
      <div className="card">
        <div className="card-title">
          <img src={starIcon} alt="A star icon." width={40} height={40} />
          <h1 className="card-heading">FAQs</h1>
        </div>
        <div className="card-content">
          {faqsData.map((item, index) => {
            return (
              <details
                className="card-details"
                key={index}
                onClick={(e) => {
                  e.preventDefault(); /* Prevent default toggle behaviour. */
                  
                  /* Note: Update is asynchronous. */
                  // console.log("Current openIndex:", openIndex);
                  // console.log("Clicked index:", index);
                  // console.log("Are they equal?", openIndex === index);

                  /* When the details element is already opened, and you click it again... */
                  /* the openIndex is same as index, then openIndex is set to -1, indicating closing of that details element. */
                  /* Otherwise, when the openIndex and index is different, openIndex will be set to that index, and the details element with that index is opened. */
                  setOpenIndex(openIndex === index ? -1 : index);
                }}
                /* Initially, openIndex is -1, and each details element is given different index, ranging from 0 to 3. */
                /* Thus, in this case, open for all the details will be false. */
                
                open={openIndex === index} /* Only when openIndex === index, it will be in opened state. */
              >
                <summary className="card-question">{item.question}</summary>
                <p className="card-answer">{item.answer}</p>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
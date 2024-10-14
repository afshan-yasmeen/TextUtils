import React,{useState} from 'react'
export default function About(props) {

  // let myDarkStyle={
  //   color:"white",
  //   backgroundColor:"black"
  // }

  // let myLightStyle={
  //   color:"black",
  //   backgroundColor:"white"
  // }

  // const [setMode, setsetMode] = useState(myLightStyle)

  return (
    <div className={`accordion p-5  
    text-${props.colorMode==="light" ? "dark" :"light"}`} id="accordionExample" 
     >
      <h1 className='my-3'>About Us</h1>
    <div className={`accordion-item`}  
     style={{backgroundColor: props.colorMode==="light" ? "light": props.colorMode }} 
   >
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`accordion-button  text-${props.colorMode==="light" ? "dark" :"light"}`}
           style={{backgroundColor: props.colorMode==="light" ? "light": props.colorMode }} 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Accordion Item #1 {props.colorMode}
        </button>
      </h2>
      <div
        id="collapseOne"
        className={`accordion-collapse collapse show 
        text-${props.colorMode==="light" ? "dark" :"light"}`}
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by
          default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify
          any of this with custom CSS or overriding our default variables. It's
          also worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div 
      className={`accordion-item  text-${props.colorMode==="light" ? "dark" :"light"}`}
     style={{backgroundColor: props.colorMode==="light" ? "light": props.colorMode }} 
    >
      <h2 className="accordion-header" id="headingTwo">
        <button
          className={`accordion-button  collapsed text-${props.colorMode==="light" ? "dark" :"light"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          style={{backgroundColor: props.colorMode==="light" ? "light": props.colorMode }} 
        >
          Accordion Item #2
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that
          we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit
          overflow.
        </div>
      </div>
    </div>
    <div  
    className={`accordion-item  text-${props.colorMode==="light" ? "dark" :"light"}`}
     style={{backgroundColor: props.colorMode==="light" ? "light": props.colorMode }} 
    >
      <h2 className="accordion-header" id="headingThree">
        <button
          className={`accordion-button collapsed  text-${props.colorMode==="light" ? "dark" :"light"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          style={{backgroundColor: props.colorMode==="light" ? "light": props.colorMode }} 
        >
          Accordion Item #3
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that
          we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit
          overflow.
        </div>
      </div>
    </div>
    {/* <div className="container my-3">
      <button className="btn btn-dark my-3" onClick={()=>setsetMode(myDarkStyle)}>Enable Dark Mode</button>
      
    <button type="button" className="btn btn-light mx-3 my-3" onClick={()=>setsetMode(myLightStyle)}>Enable Light Mode</button>
    </div> */}
  </div>
  
  )
}


import React from "react";
import SliderTool from "../UI/SliderTool";


const NewItems = () => {
  
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <SliderTool />
        </div>
      </div>
    </section>
  );
};

export default NewItems;

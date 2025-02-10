"use client";
import "./interestFormAction.css";
import { useState } from "react";

export default function InterestFormAction() {
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex tabs-menu">
        <div className="tabs-container">
          <div
            className={`tab ${activeTab === "buy" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("buy")}
          >
            Buy
          </div>
          <div
            className={`tab ${activeTab === "sell" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("sell")}
          >
            Sell
          </div>
        </div>
      </div>
      <div className="form-action-container">
        <div className="h5">A close up of a flag with a lion on it</div>
        <div className="sec-text">
          {activeTab === "buy" ? "₹ 188" : "*Best In Industry"}
        </div>
        <div>
          {/* <div> */}
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="text" placeholder="081632 579465" />
        </div>
        <div>
          <input type="number" placeholder="Quantity" />
        </div>
        <div>
          <textarea maxLength={5000} placeholder="Message" />
        </div>
        {/* </div> */}
        {/* <div> */}
        <div>
          <button className="buy-btn">
            {activeTab === "buy" ? "Buy" : "Sell"}
          </button>
        </div>
        <div>
          <button className="connect-btn">
            <div className="flex justify-center gap-2 place-items-center">
              <div>
                <img
                  className="whatsapp-img"
                  src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/678b78d87140ff853f2c831c_whatsapp-logo-webflow-cloneable-template-brix-templates.svg"
                />
              </div>
              <div>Get Connected Now</div>
            </div>
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
       <div className="py-2 text-center footer-style">Manuel schuppisser &nbsp; {new Date().getFullYear()}
        <div className="text-center author"><p >Based on the &nbsp;<a  href="https://github.com/akjha96/ReactifolioBs4_Akj">source code of ANAND KUMAR JHA</a>   
        </p>
        </div>
       </div>
    </div>
  );
};

export default FooterPanel;

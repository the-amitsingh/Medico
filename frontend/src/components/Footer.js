import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
  return (
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink exact to="#">Medicines</NavLink></li>
                            <li><NavLink exact to="#">Orders</NavLink></li>
                            <li><NavLink exact to="#">Hosting</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><NavLink exact to="#">Company</NavLink></li>
                            <li><NavLink exact to="#">Team</NavLink></li>
                            <li><NavLink exact to="#">Careers</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Medico</h3>
                        <p>When it comes to medicines, most of us do not want to take a chance. This is why most of us prefer going to a store physically to get medicines. But you know what happens at the stores. First, you need to go there physically which means you have to drive/walk/ride for at least 10-15 minutes. Second, you need to wait for your turn which may come after 10-15 minutes. Third, you can only buy the products you are sure about. What if you want to buy an FMCG product but are not sure which one? You cannot expect the pharmacist to give you too many options.

Apollo Pharmacy is the solution to all these. We deliver the medicines to you without you having to step out or wait in the queue to buy medicines. And we give you the option to browse through a variety of non-pharma products to choose from.

Are we missing something here? Yes, the time we take to deliver your order. We understand that you may sometimes require medicines in urgency and that is why we assure you the fastest home delivery of your medicines. Also, depending on the city you reside in, medicines can be delivered in as less as 1 hour.</p>
                    </div>
                   
                </div>
                <p className="copyright">Medico © 2024</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;

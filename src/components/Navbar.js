import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav-bar">
                <div className="left">
                    <Link to="/"><img src="/Amazon logo.png" /></Link>
                    <div className="dropdown">
                        <select id="State">
                            <option value={0}>Select State</option>
                            <option value={1}>Bihar</option>
                            <option value={2}>Bengal</option>
                            <option value={3}>Delhi</option>
                            <option value={4}>Gujarat</option>
                            <option value={5}>Chennai</option>
                            <option value={6}>Bangalore</option>
                            <option value={7}>Assam</option>
                            <option value={8}>Keral</option>
                            <option value={9}>Goa</option>
                            <option value={10}>Bombay</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        placeholder="  Search Amazon.in                                                                                                                                               🔍  "
                    />
                </div>
                <div className="right">
                    <select class="form-select" id="languages" name="languages">
                        <option>languages</option>
                        <option value="bn">Bengali - (বাংলা)</option>
                        <option value="en">English</option>
                        <option value="gu">Gujarati - (ગુજરાતી)</option>
                        <option value="hi">Hindi - (हिन्दी)</option>
                        <option value="ur">Urdu - (اردو)</option>
                    </select>
                    <div className="Sign">
                        <button>Sign In</button>
                    </div>
                </div>
                <Link to={'/cart'} className="orders">
                    <button>Return & orders</button>
                </Link>
            </nav>


        );
    }
}

export default Navbar;
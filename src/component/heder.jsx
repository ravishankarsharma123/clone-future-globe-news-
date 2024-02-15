import './header.css'
import logo from '/Future-Globe-News.png';
import sIcon from '/vector6.svg'
import { NavLink } from 'react-router-dom';
function Heder(){
    return(
        <header>
            <div>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="nav">
                    <ul>
                        <li><NavLink className={({ isActive, isPending })=>{return isActive?'active':'link'}} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive, isPending })=>{return isActive?'active':'link'}} to='/latest'>Latest News</NavLink></li>
                        <li><NavLink className={({ isActive, isPending })=>{return isActive?'active':'link'}} to='/education'>Educaton</NavLink></li>
                        <li><NavLink className={({ isActive, isPending })=>{return isActive?'active':'link'}} to='/india'>India</NavLink></li>
                        <li><NavLink className={({ isActive, isPending })=>{return isActive?'active':'link'}} to='/entertainment'>Entertainment</NavLink></li>
                        <li><NavLink className={({ isActive, isPending })=>{return isActive?'active':'link'}} to='/technology'>Technology</NavLink></li>
                        <li><NavLink className={({ isActive, isPending })=>{return isActive?'active':'link'}} to='/business'>Business</NavLink></li>
                        <li>
                            <button>
                                <img src={sIcon} alt="Search" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    )
}
export default Heder;
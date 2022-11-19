import React from 'react'
import Icon from '../../assets/user.jpg'
import HomeIcon from '@mui/icons-material/Home';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import { EmailRounded, Notifications, Person, SearchOutlined } from '@mui/icons-material';
import './navbar.scss'
const Navbar = () => {
  return (
    <header>
        <nav>
          <div className="logo">
              <a href="#">SOCIAL MEDIA</a>
          </div>
            <Link to="/" className="nav-link"><HomeIcon /></Link>
            <Link to="/" className="nav-link"><ModeNightIcon /></Link>
            <Link to="/dashboard" className="nav-link"><DashboardIcon /></Link>
        </nav>
        <div className="search-box">
          <form>
            <SearchOutlined />
            <input type="search" placeholder="Search someone's name"/>
          </form>
        </div>
        <div className="user-nav">
            <Link to="/" className="nav-link"><Person  /></Link>
            <Link to="/" className="nav-link"><EmailRounded /></Link>
            <Link to="/dashboard" className="nav-link"><Notifications /></Link>
            <div className="user-profile-link">
            <Link to="/dashboard" className="nav-link">
              <img src={Icon} alt="username" />
              John Doe
            </Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar
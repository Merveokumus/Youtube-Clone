import { HiOutlineBell } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import logo from '../assets/youtube.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const handleSearch = () => {
        if (!query) return;
        navigate(`/search-result/${query}`);
    };
    return (
        <header className="navbar bg-dark text-light ">
            <Link to="/" className='text-decoration-none text-light' />

            <h1>
                <img
                    src={logo}
                    style={{ width: '100px' }} alt='logo' />
                Youtube
            </h1>
            <Link />

            <div className='d-flex '>
                <input type="text"
                    className="form-control"
                    onChange={(e) => setQuery(e.target.value)} />
                <button className='btn btn-secondary' onClick={handleSearch}>
                    <BsSearch />
                </button>
            </div>

            <span className='pe-4 fs-3'>
                <HiOutlineBell />
            </span>

        </header>
    );
};
export default Header;
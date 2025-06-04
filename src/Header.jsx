import { Link } from 'react-router-dom';
import './Question.css'
import './Header.css'
import Footer from './Footer';

export default function Header({ children }) {
    return (
        <>
            <div id='nav'>
                <img src='/quiz.svg' alt='logo' />
                <ul id='nav-items'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/quiz/:id'>Quiz</Link> </li>

                </ul>

            </div>
            <div id='content'>
                {children}
            </div>
            <Footer />

        </>
    );
}
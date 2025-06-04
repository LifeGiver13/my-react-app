import { Link } from 'react-router-dom';
import './Question.css'
import './Header.css'

export default function Header({ children }) {
    return (
        <>
            <div id='nav'>
                <ul id='nav-items'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/quiz/:id'>Quiz</Link> </li>

                </ul>

            </div>
            <div id='content'>
                {children}
            </div>


        </>
    );
}
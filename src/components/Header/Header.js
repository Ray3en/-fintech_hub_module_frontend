import './Header.css'

function Header(){
    return(
        <div className="header_wrapper">
            <div className="header_logo"></div>
            <div className="header_menu">
                <a href="/"> Home </a>
                <a href="/about"> About </a>
                <a href="/contacts"> Contacts </a>
            </div>
        </div>
    )
}


export default Header
function Menubar() {

    return (
        <>
        <nav>
            <ul>
                <li><a href='#' target='_blank' className='menu'>Home</a></li>
                <li><a href='#' className='menu'>About</a></li>
                <li><a href='#' className='menu'>Like</a></li>
                <li><a href='#' className='menu'>Escape</a></li>
                <li><a href='#' className='menu'>Guest</a></li>
                <li className='login'><a>Log In</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Menubar;
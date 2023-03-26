import reactLogo from './assets/react.svg'

function Nav(){
    return(
        <nav>
            <div className='logo-and-name'>
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h3>ReactFacts</h3>
            </div>
            <ul className='list'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav
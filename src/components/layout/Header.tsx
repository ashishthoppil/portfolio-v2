import logo from '../../assets/images/logo-light.png';

export const Header = () => {
    return (
        <header className='flex justify-between px-[5rem] shadow'>
            <img className='h-[6rem]' src={logo} />
            <nav className='flex items-center'>
                <ul className='flex gap-x-5'>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Projects</li>
                </ul>
            </nav>
        </header>
    )
}
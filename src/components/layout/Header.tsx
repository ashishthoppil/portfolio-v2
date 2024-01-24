import logo from '../../assets/images/logo-light.png';
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "@radix-ui/react-icons"

export const Header = () => {
    return (
        <header className='flex justify-between px-[5rem] shadow'>
            <img className='h-[6rem]' src={logo} />
            <nav className='flex items-center'>
                <ul className='flex gap-x-[4rem] items-center'>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>    
                        <Button>
                            <DownloadIcon className="mr-2 h-4 w-4" /> Resume
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
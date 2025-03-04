import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover: rounded-tr-md duration-300">
            <a href='https://www.linkedin.com/in/sayed-iqbal-sadat-76961428a/' className='flex justify-between items-center w-full'>
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover: duration-300">
            <a href='https://github.com/sayed-2004' className='flex justify-between items-center w-full'>
                <>
                    GitHub <FaGithub size={30}/>
                </>
            </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover: duration-300">
            <a href='mailto: sayediqbalsadat148@gmail.com' className='flex justify-between items-center w-full'>
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover: rounded-br-md duration-300">
            <a href='mailto: sayediqbalsadat148@gmail.com' className='flex justify-between items-center w-full'>
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks

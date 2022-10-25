import HeaderItem from './HeaderItem'
import { AiOutlineHome } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'
import { MdOutlineVerified } from 'react-icons/md'
import { HiOutlineCollection } from 'react-icons/hi'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdOutlinePersonOutline } from 'react-icons/md'
import Image from 'next/image'


export default function Header() {
    return (
        <div className="w-full flex  flex-col items-center sm:flex-row justify-between px-3 xs:px-4 sm:px-5">
            <div className='flex items-center py-3 space-x-2'>
                <HeaderItem Icon={AiOutlineHome} title='Home' />
                <HeaderItem Icon={BsLightningCharge} title='Trending' />
                <HeaderItem Icon={MdOutlineVerified} title='Verified' />
                <HeaderItem Icon={HiOutlineCollection} title='Collections' />
                <HeaderItem Icon={HiOutlineSearch} title='Search' />
                <HeaderItem Icon={MdOutlinePersonOutline} title='Account' />
            </div>
            <Image src='https://links.papareact.com/ua6'
                width={200}
                height={100}
                className='object-contain ' />
        </div>
    )
}

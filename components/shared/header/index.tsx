import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from "@/components/shared/header/menu"

const Header = () => {
  return (
    <header className='w-full p-2 border-b'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href='/' className='flex'>
            <Image
              priority={true}
              src='/Logo.png'
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            <span className='hidden lg:block font-bold text-2xl ml-3 py-2'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu /> 
        
      </div>
    </header>
  );
};

export default Header;
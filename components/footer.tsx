import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t'>
      <div className='p-5 flex justify-center'>
        {currentYear} {APP_NAME}. All Rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
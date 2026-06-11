import type { FC } from 'react';
import Image from 'next/image';
import NavigationBar from '../NavigationBar/NavigationBar';
import Link from 'next/link';

const Header: FC = () => (
  <header className="w-full h-20 md:h-25 flex items-center bg-blue-accent">
    <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
      <Link href="/home">
      <Image
        src='/logo_light.svg'
        alt='ITStep Logo'
        width={179}
        height={60}
        className="w-28 h-auto sm:w-36 md:w-44 lg:w-[179px]"
      />
      </Link>
      <NavigationBar />
    </div>
  </header>
);

export default Header;
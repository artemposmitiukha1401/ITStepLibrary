import type { FC } from 'react';
import Image from 'next/image';
import NavigationBar from '../NavigationBar/NavigationBar';
import Link from 'next/link';

const Header: FC = () => (
  <header className="h-20 md:h-25 bg-blue-accent flex w-full items-center">
    <div className="max-w-7xl px-4 mx-auto flex w-full items-center justify-between">
      <Link href="/home">
      <Image
        src='/logo_light.svg'
        alt='ITStep Logo'
        width={179}
        height={60}
        className="w-28 sm:w-36 md:w-44 lg:w-44.75 h-auto"
      />
      </Link>
      <NavigationBar />
    </div>
  </header>
);

export default Header;
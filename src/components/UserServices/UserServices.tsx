import Image from "next/image";
import Link from "next/link";

interface UserServicesProps {
  profile_image: string
}

const UserServices = ({ profile_image }: UserServicesProps) => (
  <div className="flex items-center justify-between w-34.5 h-10">
    <Link href='notifications'>
      <Image src='notification_icon.svg' alt='Notification Icon' width={18} height={20.6}></Image>
    </Link>
    <Link href='faq'>
      <Image src='faq_icon.svg' alt='FAQ Icon' width={20} height={20}></Image>
    </Link>

    <Link href='profile'>
      <Image className="rounded-md object-cover w-10 h-10" src={profile_image} alt='FAQ Icon' width={40} height={80}></Image>
    </Link>

  </div>
);

export default UserServices;

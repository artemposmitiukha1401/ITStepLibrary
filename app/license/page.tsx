import Image from "next/image";
export default function License(){
    return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 mx-auto w-full max-w-[1320px]">
        <h1 className="text-blue-accent font-title font-bold sm:text-[40px] lg:text-[48px] mb-8 text-[32px] uppercase">Ліцезнія</h1>
        <Image src="/license.png" width={1200} height={25} alt="License Image"></Image>
    </div>
    );
}   
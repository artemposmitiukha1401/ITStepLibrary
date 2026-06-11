import Image from "next/image";
export default function License(){
    return (
    <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-blue-accent font-title font-bold text-[32px] sm:text-[40px] lg:text-[48px] uppercase mb-8">Ліцезнія</h1>
        <Image src="/license.png" width={1200} height={25} alt="License Image"></Image>
    </div>
    );
}   
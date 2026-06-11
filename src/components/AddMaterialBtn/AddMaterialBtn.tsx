import Image from "next/image";
const AddMaterialBtn = () => (
  <button className="bg-white borderra rounded-[13px] w-78 h-13.75 items-center justify-center gap-4 flex px-5 ">
    <Image src="add_icon.svg" alt="Add Icon" width={18} height={18}></Image>
    <p className="text-blue-accent text-body font-title font-semibold ">
      Додати матеріали
    </p>
  </button>
);

export default AddMaterialBtn;

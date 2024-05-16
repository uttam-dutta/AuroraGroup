import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  // Define lighter colors that work well on black theme
  const lightVariant = variant === 'bg-blue-500' ? 'bg-blue-300' : 'bg-gray-300';
  const lightTextColor = 'text-black';

  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-full px-4 py-2 border ${lightVariant} ${lightTextColor} ${full && 'w-full'} transition duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-${lightVariant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="text-base font-bold">{title}</span>
    </button>
  )
}

export default Button;

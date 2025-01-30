import { LucideIcon, LucideProps } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  image: React.ComponentType<LucideProps>;
  href: string;
};

const ButtonLinks = ({ image: Icon, href }: Props) => {
  const router = useRouter();
  const openSite = () => {
    router.push(href);
  };
  return (
    <button
      className="flex items-center px-2 py-2 rounded-full"
      onClick={openSite}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

export default ButtonLinks;

import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative">
        {/* Logo */}
        <div className="w-24 h-24 flex items-center justify-center animate-pulse">
          <Image
            src="/images/logo.png"
            alt="The Glowgem"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>
        {/* Spinner ring */}
        <div className="absolute inset-[-8px] rounded-full border-2 border-transparent border-t-primary animate-spin" />
      </div>
    </div>
  );
}

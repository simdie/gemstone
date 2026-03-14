export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative">
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center animate-pulse">
          <span className="text-primary-foreground font-serif font-bold text-3xl">
            G
          </span>
        </div>
        {/* Spinner ring */}
        <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-transparent border-t-primary animate-spin" />
      </div>
    </div>
  );
}

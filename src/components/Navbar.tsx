import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="text-2xl font-bold tracking-tight">
        Book<span className="text-purple-600">Swap</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
        <a href="#">How it works</a>
        <a href="#">Features</a>
        <a href="#">Case Study</a>
      </div>

      <Button>
        Join Waitlist
      </Button>
    </nav>
  );
}
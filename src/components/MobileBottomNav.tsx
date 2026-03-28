import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Star, Phone } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/courses", icon: BookOpen, label: "Courses" },
  { to: "/testimonials", icon: Star, label: "Feedback" },
  { to: "/#contact", icon: Phone, label: "Contact" },
];

const MobileBottomNav = () => {
  const location = useLocation();

  const handleClick = (to: string) => {
    if (to === "/#contact") {
      if (location.pathname === "/") {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to === "/#contact") return false;
    return location.pathname.startsWith(to);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-card border-t border-border/50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-14">
        {navItems.map((item) => {
          const active = isActive(item.to);
          const linkTo = item.to.startsWith("/#") ? "/" : item.to;
          return (
            <Link
              key={item.label}
              to={linkTo}
              onClick={() => handleClick(item.to)}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${
                active ? "text-primary" : "text-foreground/50"
              }`}
            >
              <item.icon size={20} strokeWidth={active ? 2.5 : 1.5} />
              <span className="font-body text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;

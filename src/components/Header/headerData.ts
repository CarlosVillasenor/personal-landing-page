type navigationItem = {
  href: string;
  label: string;
};

type socialLink = {
  href: string;
  label: string;
  icon: string;
};

const navigationItems: navigationItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const socialLinks: socialLink[] = [
  {
    href: "https://github.com/CarlosVillasenor",
    label: "GitHub", icon: "GH"
  },
  {
    href: "https://www.linkedin.com/in/carlos-villase%C3%B1or-castillo-6245a0173/",
    label: "LinkedIn", icon: "in"
  },
  {
    href: "https://www.instagram.com/carlosvc.9/", label: "Instagram", icon: "IG"
  },
];

export { navigationItems, socialLinks };
export type Product = {
    id: string;                 // must match your checkout productId
    name: string;
    description: string;
    href: string;               // details page route
    status: "live" | "coming_soon";
    badge?: string;

    priceText?: string;         // "£39.99"
    highlights?: string[];      // pills
    image?: {
        src: string;              // "/products/focus-blueprint.png"
        alt: string;
    };
};

export const PRODUCTS: Product[] = [
    {
        id: "focus-blueprint",
        name: "Focus Blueprint™",
        badge: "Flagship",
        description:
            "A complete personal operating system for clarity and execution. Start in ~15 minutes and build momentum this week.",
        href: "/focus-blueprint",
        status: "live",
        priceText: "£39.99",
        highlights: ["Start Here (15 minutes)", "7-day onboarding", "6 printables", "AI Companion (optional)"],
        image: {
            src: "/products/focus-blueprint.png",
            alt: "Focus Blueprint cover",
        },
    },
    {
        id: "next-product",
        name: "Next product",
        badge: "Coming soon",
        description:
            "Placeholder for your next pack/toolkit. Add it here once and it appears across the site automatically.",
        href: "/products",
        status: "coming_soon",
        image: {
            src: "/products/coming-soon.png",
            alt: "Coming soon",
        },
    },
];

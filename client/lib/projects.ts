export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  impact: string;
  image: string;
  video?: string;
  logo?: string;
  client?: {
    name: string;
    role: string;
    avatar?: string;
  };
  details?: string;
};

export const projects: Project[] = [
  {
    id: "techflow-brand-identity",
    title: "TechFlow Brand Identity",
    description:
      "Complete brand identity redesign for a tech startup including logo, color system, typography guidelines, and branded collateral.",
    tags: ["Logo Design", "Branding", "Brand Guidelines"],
    impact: "45% increase in brand recognition",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&h=900&fit=crop",
    // sample client/logo metadata to support the new hero layout
    client: {
      name: "John Doe",
      role: "Founder and CEO at TechFlow",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    },
    logo: "https://www.svgrepo.com/show/354202/brand.svg",
    details:
      "Full case study: discovery, moodboards, logo iterations, typography, color system, and application across web and print. Delivery included source files and brand guidelines.",
  },
  {
    id: "product-demo-animation",
    title: "Product Demo Animation",
    description:
      "3-minute animated explainer video showcasing SaaS product features with smooth transitions and engaging visuals.",
    tags: ["Animation", "Video Production", "Motion Graphics"],
    impact: "2M+ views across platforms",
    image:
      "https://images.unsplash.com/photo-1598618667-e36a77f0c4a2?w=1600&h=900&fit=crop",
    video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    details:
      "Produced storyboard, voiceover coordination, animation in After Effects, and final color grading. Resulted in improved demo conversion rates.",
  },
  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    description:
      "Series of animated graphics and short video clips for social media marketing.",
    tags: ["Animation", "Social Media", "Graphic Design"],
    impact: "300K+ impressions, 8.5% engagement rate",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&h=900&fit=crop",
    details:
      "Created platform-specific cuts and assets optimized for Instagram, TikTok, and LinkedIn with AB-tested thumbnail variations.",
  },
  {
    id: "luxury-packaging",
    title: "Luxury Packaging Design",
    description:
      "Premium packaging design for high-end cosmetics brand featuring sophisticated graphics and sustainable materials.",
    tags: ["Package Design", "Graphic Design", "Print"],
    impact: "25% increase in sales",
    image:
      "https://images.unsplash.com/photo-1586717167055-bac0ad1e4a1b?w=1600&h=900&fit=crop",
    details:
      "Concepts focused on tactile finishes and sustainable substrates; included dielines and print-ready files.",
  },
  {
    id: "3d-product-visualization",
    title: "3D Product Visualization",
    description:
      "Photorealistic 3D animation and visualization of electronic products for e-commerce.",
    tags: ["3D Animation", "VFX", "Product Visualization"],
    impact: "Reduced product returns by 30%",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop",
    details:
      "Modeled, textured, and rendered photorealistic 3D assets; provided turntable renders and interactive 3D viewer exports.",
  },
  {
    id: "corporate-event-identity",
    title: "Corporate Event Identity",
    description:
      "Visual identity for annual corporate conference including dynamic motion graphics and branded promotional videos.",
    tags: ["Motion Graphics", "Video Production", "Branding"],
    impact: "Professional brand elevation",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=1600&h=900&fit=crop",
    details:
      "Delivered keynote openers, lower thirds, and animated titles compatible with live production workflows.",
  },
];

export default projects;

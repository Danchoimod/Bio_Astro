export interface BioConfig {
  name: string;
  signature: string;
  tags?: string[];
  bannerGradient?: string;
  avatar?: string;
  badge: string;
  status: {
    label: string;
    type: "dnd" | "online" | "idle" | "offline";
  };
  greeting: string;
  bio: string;
  activity: {
    prefix: string;
    text: string;
  };
  audio?: {
    title: string;
    artist: string;
  };
  buttons: {
    label: string;
    url: string;
    icon?: string;
    primary?: boolean;
  }[];
}

export const bioData: BioConfig = {
  name: "Mod2090",
  signature: "Mod2090.",
  badge: "OPERATOR BADGE",
  status: {
    label: "PEACEFUL MODE",
    type: "dnd",
  },
  greeting: "Hi, I'm Mod2090.",
  bio: "Welcome to my sweet little world! Don't look away, stay with me forever... 💕",
  activity: {
    prefix: "PLAYING",
    text: "MiSide v0.93L (Peaceful Mode)",
  },
  audio: {
    title: "Theme Song",
    artist: "MiSide OST",
  },
  buttons: [
    {
      label: "Blog",
      url: "https://example.com/blog",
      primary: true,
    },
    {
      label: "Cloudcode",
      url: "https://example.com/cloudcode",
    },
    {
      label: "GitHub",
      url: "https://github.com",
      icon: "github",
    },
    {
      label: "Discord",
      url: "https://discord.com",
      icon: "discord",
    },
  ],
};

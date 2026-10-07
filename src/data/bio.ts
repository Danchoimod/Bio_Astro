export interface BioButton {
  label: string;
  url: string;
  icon?: string;
  primary?: boolean;
}

export interface BioAudio {
  title: string;
  artist: string;
}

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
  audio?: BioAudio;
  buttons: BioButton[];
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
  bio: "Don’t mind the spooky UI, it’s just my favorite horror game vibe. The real work is behind the scenes.💕",
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
      label: "Explore",
      url: "https://example.com/blog",
      primary: true,
    },
    {
      label: "LF Launcher",
      url: "https://example.com/cloudcode",
    },
    {
      label: "GitHub",
      url: "https://github.com/Danchoimod",
      icon: "github",
    },
    {
      label: "Discord",
      url: "https://discord.com/users/608683762854658078",
      icon: "discord",
    },
  ],
};

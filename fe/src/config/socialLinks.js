import { Github, Twitter, Youtube, Twitch, MessageCircle } from 'lucide-react';

// Configure your social media links here
export const socialLinks = [
  {
    icon: Github,
    url: 'https://github.com/TrshCan',
    label: 'GitHub',
    enabled: true,
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/yourusername',
    label: 'Twitter',
    enabled: false,
  },
  {
    icon: Youtube,
    url: 'https://youtube.com/@stinkylemonofficial',
    label: 'YouTube',
    enabled: true,
  },
  {
    icon: Twitch,
    url: 'https://twitch.tv/yourusername',
    label: 'Twitch',
    enabled: false,
  },
  {
    icon: MessageCircle,
    url: 'https://discord.gg/yourinvite',
    label: 'Discord',
    enabled: false,
  },
];

// Buy Me a Coffee link
export const buyMeCoffeeUrl = 'https://www.buymeacoffee.com/yourusername';

// Game version
export const gameVersion = '1.0.0';

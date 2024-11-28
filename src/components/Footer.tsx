import { Mail, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 shadow-lg mt-8 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Mythic Mind Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://t.me/MythicMindLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <Send className="h-4 w-4" />
              <span>@MythicMindLabs</span>
            </a>
            <a
              href="mailto:mythicmindlabs@gmail.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>mythicmindlabs@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
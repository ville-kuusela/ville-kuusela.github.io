import avatarImg from "@/assets/avatar.png";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <img
        src={avatarImg}
        alt="Profile photo"
        width={160}
        height={160}
        className="rounded-full bg-muted w-40 h-40 object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold font-display text-foreground">
          John Doe
        </h1>
        <p className="text-muted-foreground mt-1 font-body text-sm tracking-wide uppercase">
          Full-Stack Developer
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
        <MapPin className="w-4 h-4" />
        <span>San Francisco, CA</span>
      </div>

      <div className="flex gap-3">
        <a
          href="mailto:john@example.com"
          className="p-2.5 rounded-full bg-card text-foreground hover:text-accent transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-card text-foreground hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-card text-foreground hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
        Passionate about building clean, scalable web applications and open-source tools.
      </p>
    </div>
  );
};

export default ProfileCard;

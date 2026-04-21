import myImage from "@/assets/img-bnw.webp";
import { Mail, Linkedin, MapPin, Github } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <img
        src={myImage}
        alt="Profile photo"
        width={160}
        height={160}
        className="rounded-full bg-muted size-44 object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold font-display text-off-black">
          Ville Kuusela
        </h1>
        <p className="text-off-black mt-1 font-body text-sm tracking-wide">
          Ohjelmistokehittäjä
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-off-black text-sm">
        <MapPin className="w-4 h-4" />
        <span>Jyväskylä, Suomi</span>
      </div>

      <div className="flex gap-2">
        <a
          href="mailto:villekuusela19@gmail.com"
          className="p-2.5 rounded-full bg-card text-off-black hover:text-accent transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/villekuusela19/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-card text-off-black hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/ville-kuusela"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-card text-off-black hover:text-accent transition-colors"
          aria-label="Github"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;

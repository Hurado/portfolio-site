import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const icon = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="border-t border-slate-300 p-4 text-slate-400">
      <div className="text-center">Designed and built by Arkadiusz</div>
      <Link href="https://github.com/Hurado">
        <div className="text-3xl text-slate-300 text-center">{icon}</div>
      </Link>
    </div>
  );
};

export default Footer;

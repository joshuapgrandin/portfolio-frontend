import ContactMe from "./ContactMe";
import GithubCommits from "./GithubCommits";

const Footer = () => {
  return (
    <div className="border-line mt-6 grid grid-cols-2 border">
      <GithubCommits />
      <ContactMe />
    </div>
  );
};

export default Footer;

import logo from "@/assets/logo.png";
import facebook from "@/assets/social/facebook.png";
import whatApp from "@/assets/social/whatsapp.png";
import youtube from "@/assets/social/youtube.png";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-5 container mx-auto py-10">
      <div>
        <div className="flex gap-4 items-center">
          <img className="w-[40px] h-[40px]" src={logo} alt="" />
          <h3 className="text-2xl font-bold text-green-400">
            About TurningPages
          </h3>
        </div>
        <p className="py-3">
          Your online corner for book lovers. We connect readers with their next
          favorite story — from timeless classics to modern masterpieces.
        </p>
      </div>
      <div>
        <h3 className="text-[1.2rem] font-semibold">Quick Links</h3>
        <ul className="pt-4 flex flex-col gap-2">
          <li className="font-medium">Home</li>
          <li className="font-medium">All-Books</li>
          <li className="font-medium">Add-Book</li>
          <li className="font-medium">Book-Summary</li>
        </ul>
      </div>
      <div>
        <h3 className="text-[1.2rem] font-semibold">Contact</h3>
        <ul className="pt-4 flex flex-col gap-2">
          <li className="font-medium">Email: support@turningpages.com</li>
          <li className="font-medium">Phone: +1 (555) 123-4567</li>
          <li className="font-medium">
            Address: 123 Story Lane, Booktown, USA
          </li>
        </ul>
        <div className="flex gap-4 pt-2">
          <img className="w-[30px] h-[30px]" src={facebook} alt="" />
          <img className="w-[30px] h-[30px]" src={whatApp} alt="" />
          <img className="w-[30px] h-[30px]" src={youtube} alt="" />
        </div>
      </div>
      <div>
        <h3 className="text-[1.2rem] font-semibold">Newsletter</h3>
        <p className="py-4">
          Subscribe to get book recommendations, reading tips, and exclusive
          deals right in your inbox.
        </p>
        <div className="flex items-center gap-2">
          <Input placeholder="Subscribe now" />{" "}
          <SendIcon className="text-green-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

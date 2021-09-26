import { AiTwotoneHome, AiFillSchedule, AiFillMessage } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa";

export const SidebarTabs = [
  {
    title: "Home",
    icon: <AiTwotoneHome size={25} />,
    link: "/",
  },
  {
    title: "Courses",
    icon: <IoSchoolSharp size={25} />,
    link: "/courses",
  },
  {
    title: "Schedule",
    icon: <AiFillSchedule size={25} />,
    link: "/schedule",
  },
  {
    title: "Messages",
    icon: <AiFillMessage size={25} />,
    link: "/messages",
  },
  {
    title: "Badges",
    icon: <FaAward size={25} />,
    link: "/badges",
  },
];

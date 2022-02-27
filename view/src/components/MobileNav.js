import { SidebarList } from "./Sidebar";
import { Animated } from "react-animated-css";

function MobileNav(props) {
  return (
    <Animated
      animationIn="zoomIn"
      animationOut="zoomOut"
      animationInDuration={700}
      animationOutDuration={700}
      isVisible={props.visible}
      style={props.visible ? null : { display: "none" }}
      className="fixed left-0 top-0"
    >
      <SidebarList
        className="bg-zinc-400 bg-opacity-70 fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center text-[4rem] p-8 gap-4"
        visible={props.visible}
      />
    </Animated>
  );
}

export default MobileNav;

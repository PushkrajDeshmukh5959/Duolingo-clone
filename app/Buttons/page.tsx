import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="Secondary">Secondary</Button>
      <Button variant="SecondaryOutline">Secondary Outline</Button>
      <Button variant="Danger">Danger</Button>
      <Button variant="DangerOutline">DangerOutline</Button>
      <Button variant="Super">Super</Button>
      <Button variant="SuperOutline">SuperOutline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="sidebar">Sidebar</Button>
      <Button variant="sidebarOutline">SidebarOutline</Button>
    </div>
  );
};

export default ButtonPage;

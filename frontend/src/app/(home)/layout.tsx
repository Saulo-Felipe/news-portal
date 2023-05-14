import { SideMenu } from "@/src/components/SideMenu";

export default function Layout({ children } : { children: React.ReactNode }) {

  return (
    <div className="flex">
      { children }
      <SideMenu />
    </div>
  );
}
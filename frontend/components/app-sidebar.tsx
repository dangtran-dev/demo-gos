import { GrScorecard } from "react-icons/gr";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar";
import { MdDashboard } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: MdDashboard,
    },
    {
        title: "Search Scores",
        url: "/",
        icon: GrScorecard,
    },
    {
        title: "Reports",
        url: "/reports",
        icon: BiSolidReport,
    },
    {
        title: "Settings",
        url: "#",
        icon: IoMdSettings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

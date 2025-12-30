import {Home, Trophy, PlusCircle, Search, ChartNoAxesCombined, ChevronDown, User2, Plus, Projector} from "lucide-react";
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup, SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator
} from "@/components/ui/sidebar";
import Link from "next/link";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";


const items = [
    {
        title: "Home",
        url : "/",
        icon : Home,
    },
    {
        title : "My Tournaments",
        url: "#",
        icon : Trophy,
    },
    {
        title : "Create Tournament",
        url: "#",
        icon : PlusCircle,
    },
    {
        title : "Search",
        url : "#",
        icon : Search,
    },
    {
        title : "Statistics",
        url : "#",
        icon : ChartNoAxesCombined,
    }
]



const AppSidebar = () => {
    return (
        <Sidebar collapsible={"icon"}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Trophy/>
                                <span>Pickled</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator/>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel> Application </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key = {item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url}>
                                                <item.icon/>
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel> Projects </SidebarGroupLabel>
                        <SidebarGroupAction>
                            <Plus /> <span className={"sr-only"}>Add Projects</span>
                        </SidebarGroupAction>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="#">
                                            <Projector /> See All Projects
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="#">
                                            <PlusCircle /> Add Project
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                   <SidebarMenuItem>
                       <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                               <SidebarMenuButton>
                                   <User2/>
                                   John Doe
                                   <ChevronDown className="ml-auto" />
                               </SidebarMenuButton>
                           </DropdownMenuTrigger>
                           <DropdownMenuContent align={"end"} side={"right"}  className="w-[--radix-popper-anchor-width]">
                               <DropdownMenuItem>
                                   <span>Account</span>
                               </DropdownMenuItem>
                               <DropdownMenuItem>
                                   <span>Setting</span>
                               </DropdownMenuItem>
                               <DropdownMenuItem>
                                   <span>Logout</span>
                               </DropdownMenuItem>
                           </DropdownMenuContent>
                       </DropdownMenu>
                   </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
}

export default AppSidebar;
"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, UserCog, Users, User, IdCard, Mail, KeyRound, RectangleEllipsis } from "lucide-react"
import { Transition } from "@headlessui/react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

interface MenuItem {
  title: string
  url?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  subItems?: MenuItem[]
}

interface GroupMenuItem {
  title: string
  url?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  items?: MenuItem[]
}

const guides: GroupMenuItem = {
  title: "Guides",
  url: "#",
  items: [
    {
      title: "Introduction",
      url: "#",
    },
    {
      title: "Quick Start",
      url: "#",
    },
    {
      title: "SDKs",
      url: "#",
      subItems: [
        {
          title: "Official SDKs",
          url: "#",
        },
      ],
    },
    {
      title: "Autentication",
      url: "#",
    },
    {
      title: "Pagination",
      url: "#",
    },
    {
      title: "Errors",
      url: "#",
    },
    {
      title: "Webhooks",
      url: "#",
    },
  ],
}

const resources: GroupMenuItem = {
  title: "Resources",
  url: "#",
  items: [
    {
      title: "Roles",
      url: "#",
      icon: UserCog,
    },
    {
      title: "Groups",
      url: "#",
      icon: Users,
    },
    {
      title: "Users",
      url: "#",
      icon: User,
    },
    {
      title: "Emails",
      url: "#",
      icon: Mail,
    },
    {
      title: "OAuths",
      url: "#",
      icon: IdCard,
    },
    {
      title: "Refresh Tokens",
      url: "#",
      icon: KeyRound,
    },
    {
      title: "Codes",
      url: "#",
      icon: RectangleEllipsis,
    },
  ],
}

const groups: GroupMenuItem[] = [guides, resources, guides, resources]

interface MenuItemsListProps {
  items: MenuItem[]
  level?: number
}

function MenuItemsList({ items, level = 0 }: MenuItemsListProps) {
  // Cada nivel permite expandir un único item a la vez.
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggleExpand = (title: string) => {
    setExpanded(prev => (prev === title ? null : title))
  }

  return (
    <SidebarMenu>
      {items.map(item => {
        const hasSubItems = item.subItems && item.subItems.length > 0
        const isExpanded = expanded === item.title
        const Icon = item.icon

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              {hasSubItems ? (
                <button
                  onClick={() => toggleExpand(item.title)}
                  className="flex items-center w-full"
                  style={{ paddingLeft: level * 16 }}
                >
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  <span>{item.title}</span>
                  {isExpanded ? (
                    <ChevronUp className="ml-auto h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-auto h-4 w-4" />
                  )}
                </button>
              ) : (
                <Link
                  href={item.url!}
                  className="flex items-center w-full"
                  style={{ paddingLeft: level * 16 }}
                >
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  <span>{item.title}</span>
                </Link>
              )}
            </SidebarMenuButton>

            {hasSubItems && (
              <Transition
                show={isExpanded}
                enter="transition-all duration-100"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-96"
                leave="transition-all duration-200"
                leaveFrom="opacity-100 max-h-96"
                leaveTo="opacity-0 max-h-0"
              >
                <div className="overflow-hidden">
                  <MenuItemsList items={item.subItems!} level={level + 1} />
                </div>
              </Transition>
            )}
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}


export default function AppSidebar() {
  return (
    <Sidebar>
      <a
        href="javascript:void(0)"
        className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <img
          src="brand.svg"
          alt="image"
          className="h-10 w-full dark:hidden"
        />
        <img
          src="brand-dark.svg"
          alt="image"
          className="hidden h-10 w-full dark:block"
        />
      </a>

      <SidebarContent>
        <ScrollArea className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-red-200 scrollbar-track-transparent">
          {groups.map(group => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>
                {group.icon ? (
                  <group.icon className="mr-2 h-4 w-4 inline-block" />
                ) : (
                  <span className="mr-2 h-4 w-4 inline-block" />
                )}
                <span className="mb-4">{group.title}</span>
              </SidebarGroupLabel>
              <SidebarGroupContent className="pl-10">
                {group.items && <MenuItemsList items={group.items} />}
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  )
}

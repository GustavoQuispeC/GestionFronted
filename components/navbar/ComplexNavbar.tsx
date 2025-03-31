"use client";
import * as React from "react";
import {
  IconButton,
  Typography,
  Collapse,
  Navbar,
  List,
  Avatar,
  Menu,
  Tooltip,
} from "@material-tailwind/react";
import {
  Archive,
  HeadsetHelp,
  LogOut,
  Menu as MenuIcon,
  MultiplePages,
  NavArrowDown,
  ProfileCircle,
  SelectFace3d,
  Settings,
  UserCircle,
  Xmark,
} from "iconoir-react";
import Image from "next/image";

const LINKS = [
  {
    icon: ProfileCircle,
    title: "Account",
    href: "#",
  },
  {
    icon: SelectFace3d,
    title: "Blocks",
    href: "#",
  },
  {
    icon: Archive,
    title: "Docs",
    href: "#",
  },
];

function NavList() {
  return (
    <>
      {LINKS.map(({ icon: Icon, title, href }) => (
        <List.Item key={title} as="a" href={href}>
          <List.ItemStart className="mr-1.5">
            <Icon className="h-4 w-4" />
          </List.ItemStart>
          <Typography type="small">{title}</Typography>
        </List.Item>
      ))}
    </>
  );
}

function ProfileMenu() {
  return (
    <Menu>
      <Menu.Trigger
        as={Avatar}
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
        alt="profile-picture"
        size="sm"
        className="border border-primary p-0.5 lg:ml-auto"
      />
      <Menu.Content>
        <Menu.Item>
          <UserCircle className="mr-2 h-[18px] w-[18px]" /> My Profile
        </Menu.Item>
        <Menu.Item>
          <Settings className="mr-2 h-[18px] w-[18px]" /> Edit Profile
        </Menu.Item>
        <Menu.Item>
          <HeadsetHelp className="mr-2 h-[18px] w-[18px]" /> Support
        </Menu.Item>
        <hr className="!my-1 -mx-1 border-surface" />
        <Menu.Item className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error">
          <LogOut className="mr-2 h-[18px] w-[18px]" />
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}

// eslint-disable-next-line react/display-name
const MenuItem = React.forwardRef<
  typeof Menu.Item,
  {
    title: string;
    description: string;
  }
>(({ title, description, ...rest }, ref) => {
  return (
    <Menu.Item
      ref={ref as React.Ref<HTMLDivElement>}
      {...rest}
      className="flex-col items-start"
    >
      <Typography color="default" className="font-semibold">
        {title}
      </Typography>
      <Typography type="small" className="text-foreground">
        {description}
      </Typography>
    </Menu.Item>
  );
});

export default function ComplexNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen-2xl">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
        <Typography
          as="a"
          href="#"
          type="small"
          className="mr-1 block pt-1 font-semibold text-orange-500"
        >
          Grupo
        </Typography>
        <Typography
          as="a"
          href="#"
          type="h6"
          className="mr-1 block font-semibold text-blue-700"
        >
          Famet
        </Typography>
        <Typography
          as="a"
          href="#"
          type="small"
          className="mr-2 block pt-1.5 font-semibold text-blue-700"
        >
          S.A.C.
        </Typography>

        <hr className="mx-1 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
        <div className="hidden lg:block">
          <List className="mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:items-center">
            <Tooltip placement="bottom" interactive>
              <Tooltip.Trigger>
                <List.Item>
                  <List.ItemStart className="me-1.5">
                    <MultiplePages className="h-4 w-4" />
                  </List.ItemStart>
                  <Typography type="small">Pages</Typography>
                  <List.ItemEnd className="ps-0.5">
                    <NavArrowDown className="h-3.5 w-3.5 group-data-[open=true]:rotate-180" />
                  </List.ItemEnd>
                </List.Item>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <MenuItem
                  title="@material-tailwind/html"
                  description="Learn how to use @material-tailwind/html."
                />
                <MenuItem
                  title="@material-tailwind/react"
                  description="Learn how to use @material-tailwind/react."
                />
                <MenuItem
                  title="Material Tailwind PRO"
                  description="A complete set of UI Elements."
                />
              </Tooltip.Content>
            </Tooltip>
            <NavList />
          </List>
        </div>
        <IconButton
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto mr-2 lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <MenuIcon className="h-4 w-4" />
          )}
        </IconButton>
        <ProfileMenu />
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

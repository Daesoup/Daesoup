import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
      <Link color="foreground" href="/">
        <p className="font-bold text-inherit">대소고 대숲</p>   
      </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/test">
            만든사람
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

import NavItem from "@/components/links/NavItem";
import React from "react";
import { v4 as uuid } from "uuid";

export default function NavMenu({ menu }) {
  return menu.map((item) => (
    <NavItem key={uuid()} href={item.link} label={item.name} />
  ));
}

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  HStack,
  Button,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import BasicLogo from "../logo/BasicLogo";

const LINKS = [
  { id: 1, text: "Home ", path: "/" },
  { id: 2, text: "Nearby", path: "/" },
  { id: 3, text: "Favorites", path: "/" },
];
export default function DesktopNav() {
  const history = useHistory();
  const [isActive, setIsActive] = useState("Start");
  const handleLinkChange = (e) => setIsActive(e.target.id);
  const handleSignOut = () => history.push("/login");

  return (
    <HStack
      w="100%"
      spacing="2rem"
      shadow="md"
      position="fixed"
      top="0"
      p="1rem"
      bg="white"
    >
      <BasicLogo withTitle={false} />
      {/* Nav Links */}
      <HStack>
        {LINKS.map((l) => (
          <Button
            key={l.id}
            variant={isActive === l.text ? "solid" : "ghost"}
            colorScheme="purple"
            color={isActive === l.text ? "white" : "black"}
            id={l.text}
            onClick={handleLinkChange}
          >
            {l.text}
          </Button>
        ))}
      </HStack>
      <Spacer />
      {/* Profile */}
      <Menu>
        <MenuButton>
          <Avatar size="sm" />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={handleSignOut} color="red.400" fontWeight="bold">
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

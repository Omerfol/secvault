import React from 'react';
import {Menu, MenuHandler, MenuList, MenuItem, Button,} from "@material-tailwind/react";
const Polubione = () => {
    return (
        <Menu>
            <MenuHandler>
                <Button variant="gradient">Open Menu</Button>
            </MenuHandler>
            <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default Polubione;
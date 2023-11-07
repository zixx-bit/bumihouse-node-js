import React from 'react'
import { ColorSwatch,
  Group,
  useMantineTheme,
  ActionIcon,
  Box,
  Text,
  Button,
  PasswordInput,
  Modal,
  Center,
  Checkbox,
  TextInput,
  Menu,
  Select,
  AppShell,
  Navbar,
  Header,
  Burger,
  Indicator,
  Avatar}  from '@mantine/core'

  import {
    IconSettings,
    IconMessageCircle,
    IconPhoto,
    IconSearch,
    IconArrowsLeftRight,
    IconTrash
  } from "@tabler/icons";



   function ProfileMenu() {
    // const theme = useMantineTheme();
  
    return (
      <Box className="App">
        {/* <Header height={{ base: 50, md: 70 }} p="md"> */}
          {/* <div style={{ display: "flex", alignItems: "center", height: "100%" }}> */}
            {/* <Burger size="sm" color={theme.colors.gray[6]} mr="xl" /> */}
  
            {/* <Text>Application header</Text> */}
            <Menu
              // shadow="md"
              // width={200}
              // position={"top-end"}
              // returnFocus
              // closeOnEscape
            >
              <Menu.Target>
                {/* <Indicator> */}
                  <Avatar
                    radius="xl"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                  />
                {/* </Indicator> */}
              </Menu.Target>
  
              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                <Menu.Item icon={<IconMessageCircle size={14} />}>
                  Messages
                </Menu.Item>
                <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                <Menu.Item
                  icon={<IconSearch size={14} />}
                  rightSection={
                    <Text size="xs" color="dimmed">
                      ⌘K
                    </Text>
                  }
                >
                  Search
                </Menu.Item>
  
                <Menu.Divider />
  
                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
                  Transfer my data
                </Menu.Item>
                <Menu.Item color="red" icon={<IconTrash size={14} />}>
                  Delete my account
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          {/* </div> */}
        {/* </Header> */}
         <Box mt={220}>Some block</Box>
       </Box>
    );
  }

  export default ProfileMenu
  

// const ProfileMenu = ({user, logout}) => {
//   return (
//      <Menu>
//       <Menu.Target>
//         <Avatar src={user?.picture} alt={user?.email}  radius={"xl"}/>
//         </Menu.Target>  
//         <Menu.Dropdown>
//           <Menu.Item>
//             Favourites 
//           </Menu.Item>
         
//           <Menu.Item>
//             Bookings
//           </Menu.Item>
         
//           <Menu.Item onClick={()=>{
//             localStorage.clear();
//             logout()
//           }}>Log out

//           </Menu.Item>
//         </Menu.Dropdown>     
//      </Menu>   
//   )
// }

// export default ProfileMenu
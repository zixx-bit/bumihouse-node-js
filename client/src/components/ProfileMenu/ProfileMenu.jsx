import React, {forwardRef} from 'react';
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
  UnstyledButton,
  Indicator,
  Avatar}  from '@mantine/core';

  import {
    IconSettings,
    IconMessageCircle,
    IconPhoto,
    IconCalendar,
    IconHeartFilled,
    IconSearch,
    IconBook,
    IconArrowsLeftRight,
    IconTrash,
    IconLogout,
    IconLogout2,
    IconCalendarCheck,
    IconChevronRight
  } from "@tabler/icons-react";
  // import "./ProfileMenu.css";
  import { useNavigate } from 'react-router-dom';




   const ProfileMenu = ({user, logout})=> {
    const navigate = useNavigate()

    return (
      <Box className="ProfileMenu">
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>  
            <Menu
              shadow="md"
              width={200}
              position={"top-end"}
              returnFocus
              closeOnEscape transitionProps={{ transition: 'rotate-left', duration: 150 }}
            >
              <Menu.Target className="flexStart"   style={{
        padding: 'var(--mantine-spacing-md)',
        color: 'var(--mantine-color-text)',
        borderRadius: 'var(--mantine-radius-sm)',
      }}>       
                <Group>
                {/* <Indicator></Indicator> */}
                  <Avatar src= {user?.picture} alt={user?.email}
                    radius="xl"
                   />
                   <div style={{ flex:1 }}>
                    <Text size="sm" fw={500}> { user?.name } </Text>
                    <Text c="dimmed" size="xs"> {user?.email} </Text>
                   </div>
                   {<IconChevronRight size="1rem" />}
              
                </Group>

              </Menu.Target>
  
              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item icon={<IconHeartFilled size={16}  />} onClick={()=> navigate ("./favourites", {replace: true})} >Favourites</Menu.Item>
                <Menu.Item icon={<IconCalendarCheck size={16} />} onClick={() => navigate("./bookings", {replace: true})}>
                  Bookings
                </Menu.Item>
                {/* <Menu.Item
                  icon={<IconSearch size={14} />}              
                >
                  Search
                </Menu.Item> */}
  
                <Menu.Divider />
  
                <Menu.Label>Account</Menu.Label>
                 <Menu.Item  color="red" icon={<IconLogout2 size={16}/>}
                  onClick={() => {
                  localStorage.clear();
                  logout()
                }} >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
       </Box>
    )
  }

  

// const ProfileMenu = ({user, logout}) => {
//   const navigate = useNavigate()
//   return (
//      <Menu>
//       <Menu.Target>
//         <Avatar src={user?.picture} alt={user?.email}  radius={"xl"}/>
//         </Menu.Target>  
//         <Menu.Dropdown>
//           <Menu.Item onClick={()=> navigate("./favourites", {replace:true})}>
//             Favourites 
//           </Menu.Item>
         
//           <Menu.Item onClick={() => navigate("./bookings", {replace: true})}>
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

export default ProfileMenu
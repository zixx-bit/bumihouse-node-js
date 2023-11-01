import React from 'react';
import{Avatar, Menu} from '@mantine/hooks';

const ProfileMenu = ({user, logout}) => {

  return (
    <div>
      profile
      <Menu>
      <Menu.Target>
        <Avatar src={user?.picture}  alt={user?.name} radius={"xl"}/>
        </Menu.Target>  

        <Menu.Dropdown>
          <Menu.Item>
            Favourites
          </Menu.Item>
        </Menu.Dropdown>
        
    </Menu>   
    </div>
    
  )

}

export default ProfileMenu
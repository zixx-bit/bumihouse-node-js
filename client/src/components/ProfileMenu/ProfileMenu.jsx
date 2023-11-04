import React from 'react'
import { forwardRef } from 'react'
import { IconChevronRight } from '@tabler/icons-react'
import { Menu, Avatar, Group,Text,UnstyledButton}  from '@mantine/core'

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'>{
  image: String;
  name: String;
  email: String;
  icon?: React.ReactNode;
}
const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ... others}:UserButtonProps, ref) =>(
    <UnstyledButton
    ref={ref}
    sx={(theme)=>({
      display: 'block',
      width: '100%',
      padding: theme.spacing.md,
      color: theme.colorScheme=== 'dark'? theme.color.dark[0] : theme.black,

      '&:hover':{
        backgroundColor:theme.colorScheme=='dark'? theme.colors.dark[8] : theme.colors.gray[0]

      },

    })}{...others}
    >
    <Group>
      <Avatar src={image} radius="xl"/>
      <div style={{flex:1}}>
      <Text size="sm" weight={500}>
       {name}
      </Text>
      <Text color="dimmed" size="xs">
      {email}        
      </Text>
      </div>

      {icon || <IconChevronRight size="1rem"/> }
    </Group>

    </UnstyledButton>
  )
);

function Demo(){
  
}

const ProfileMenu = ({user, logout}) => {

  return (
     <Menu>
      <Menu.Target>
        <Avatar src={user?.picture}  radius={"xl"}/>
        </Menu.Target>  
        <Menu.Dropdown>
          <Menu.Item>
            Favourites 
          </Menu.Item>
        </Menu.Dropdown>     
     </Menu>   
  )
}

export default ProfileMenu
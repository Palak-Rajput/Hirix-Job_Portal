import { Menu, Avatar } from '@mantine/core';
import React, { useState } from 'react';
import {
  IconMessageCircle,
  IconFileText,
  IconLogout2,
  IconUserCircle,
} from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../../Slices/UserSlice';

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const [opened, setOpened] = useState(false);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/'); // Redirect to home after logout
  };

  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <button className="flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer">
          <span>{user.name}</span>
          <Avatar src="avatar.png" alt="Profile Picture" className="pointer-events-none" />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle size={14} />}>
            Profile
          </Menu.Item>
        </Link>

    

        <Menu.Divider />

        <Menu.Item
          onClick={handleLogout}
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;

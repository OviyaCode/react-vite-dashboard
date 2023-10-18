import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import CategoryIcon from '@mui/icons-material/Category';
import profile from "../assets/profile.jpg"
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

const SideNav = () => {
  const { collapsed } = useProSidebar();
  const theme = useTheme();

  return (
    <Sidebar
      style={{ height: "100vh", top: 'auto' }}
      breakPoint="md"
      backgroundColor={theme.palette.secondary.primary}
    >

      <Box sx={{ marginTop: 10 }}>
        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                backgroundColor: active ? theme.palette.secondary.hover : undefined,
                '&:hover': {
                  backgroundColor: '#1f1f41',
                },
              };
            },

          }}
        >
          <MenuItem icon={<DashboardIcon sx={{ color: "#f2f2f2" }} />}>
            <Typography sx={{ color: "#f2f2f2" }} variant="body2">Dashboard</Typography>
          </MenuItem>
          <MenuItem icon={<CategoryIcon sx={{ color: "#f2f2f2" }} />}>
            <Typography sx={{ color: "#f2f2f2" }} variant="body2">Products</Typography>
          </MenuItem>
          <MenuItem icon={<PeopleOutlineOutlinedIcon sx={{ color: "#ffffff" }} />} >
            <Typography sx={{ color: "#f2f2f2" }} variant="body2">Customer</Typography>
          </MenuItem>
          <MenuItem icon={<InsightsOutlinedIcon sx={{ color: "#ffffff" }} />} >
            <Typography sx={{ color: "#f2f2f2" }} variant="body2">Promote</Typography>
          </MenuItem>
          <MenuItem icon={<HelpIcon sx={{ color: "#ffffff" }} />} >
            <Typography sx={{ color: "#f2f2f2" }} variant="body2">Help</Typography>
          </MenuItem>
        </Menu>
      </Box>

      {!collapsed &&
        <Box sx={styles.sidebarFooter}>
          <Avatar src={profile} alt="profile-dp" sx={styles.avatar} />
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <Typography variant="body2" sx={{ color: "#f2f2f2", pt: 2 }}>Evano</Typography>
            <Typography variant="subtitle2" sx={{ color: "#f2f2f2", pt: 2 }}>Project Manager</Typography>
          </Box>
        </Box>}
    </Sidebar>
  );
};

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
  sidebarFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    marginTop:36,
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: "50%",
    mr:3
  },
  sidebar: {
    marginTop: "50px"
  }
}

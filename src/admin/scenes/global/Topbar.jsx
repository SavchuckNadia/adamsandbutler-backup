import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { useUserAuth } from "../../../context/auth/UserAuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      return <Navigate to="/" />;
    } catch (error) {
      console.log(error.message);
    }
  };

  const toHomePage = () => {
    navigate("/");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS  */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>

        <IconButton onClick={toHomePage}>
          <HomeIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

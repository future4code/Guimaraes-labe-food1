import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BoxStyled } from "./NavigationStyle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useNavigate } from "react-router";
import { goToCarrinho, goToHome, goToPerfil } from "../../routes/Coordinator";

const Navigation = ({ screen }) => {
  const [value, setValue] = React.useState(screen);
  const navigate = useNavigate();

  return (
    <BoxStyled>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => goToHome(navigate)}
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          onClick={() => goToCarrinho(navigate)}
          icon={<ShoppingCartOutlinedIcon />}
        />
        <BottomNavigationAction
          onClick={() => goToPerfil(navigate)}
          icon={<PermIdentityOutlinedIcon />}
        />
      </BottomNavigation>
    </BoxStyled>
  );
};

export default Navigation;
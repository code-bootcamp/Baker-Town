import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, logout, useAuth } from "../../../../pages/_app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const AvatarPage = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handlesSignOut() {
    setLoading(true);
    try {
      await logout();
      alert("로그아웃 되셨습니다.");
    } catch {
      alert("error!!");
    }
    setLoading(false);
  }

  const onClickdashboard = () => {
    router.push(`/dashboard/main`);
  };

  const onClickMyClass = () => {
    router.push(`/myPage/class/beforePar`);
  };

  const onClickMyItem = () => {
    router.push(`/myPage/item/orderHistory`);
  };
  const [check, setCheck] = useState(0);
  const currentUser = useAuth();
  const [myUser, setMyUser] = useState({
    check: check,
    name: "로딩중입니다",
  });

  useEffect(async () => {
    if (myUser?.name === "로딩중입니다") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult = await getDoc(userQuery);
      setMyUser(userResult.data());
    }
  });

  return (
    <>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          {/* <Tooltip title="Account settings"> */}
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <AccountCircle sx={{ width: 37, height: 37 }}></AccountCircle>
          </IconButton>
          {/* </Tooltip> */}
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(255,255,255,0.9))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {myUser?.check ? (
            <>
              <MenuItem onClick={onClickdashboard}>
                <Avatar /> dashboard
              </MenuItem>
              <Divider />
            </>
          ) : (
            <>
              <MenuItem>
                <Avatar />
              </MenuItem>
              <Divider />
            </>
          )}
          <MenuItem onClick={onClickMyClass}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            내 클래스
          </MenuItem>
          <MenuItem onClick={onClickMyItem}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            내 아이템
          </MenuItem>
          <MenuItem onClick={handlesSignOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Signout
          </MenuItem>
        </Menu>
      </React.Fragment>
    </>
  );
};
export default AvatarPage;

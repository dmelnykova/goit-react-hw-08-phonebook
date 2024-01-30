import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { Button, UserInfo, UserName } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const handleLogOut = () => dispatch(logOut());
    return (
        <UserInfo>
            <UserName>{user.name}</UserName>
            <Button type="button" onClick={handleLogOut} >Logout</Button>
        </UserInfo>
    )
}
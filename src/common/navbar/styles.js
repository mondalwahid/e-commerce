import { styled } from '@mui/system';
import colorConstants from '../../constants/colorConstants';

export const NavContainer = styled('div')({
    width:"100%",
    borderBottom:`1px solid ${colorConstants?.darkGray}`,
  });

  export const NavSubcontainer = styled('div')({
    padding: ".7rem 1.2rem",
    display:"flex",
    alignItems:"center",
  })
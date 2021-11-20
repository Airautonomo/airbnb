import React from "react";
import useStyles from './styles'
import { useTheme } from '@mui/styles';
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import { IconButton } from "@mui/material";
import { ToggleButton } from "@mui/material";

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  // Override media queries injected by theme.mixins.toolbar
  [theme.breakpoints.down('sm')]: {
    minHeight: '164px',
    alignItems: 'center',
    justifyContent: 'center',
    flexdirection: 'column',

  },
  backgroundColor: [theme.palette.common.white,],
  color: [theme.palette.common.black,],
}));
export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '.9rem',
}));

export const CustomToggleButton = styled(ToggleButton)(({ theme }, ...props) => ({
  ...props,
  display: "block",
  fontSize: '.2rem',
  appearance: 'none !important',
  position: 'relative !important',
  backgroundColor: "#FFFFFF !important",
  border: '1px solid #DDDDDD !important',

  cursor: 'pointer !important',
  display: '-webkit-inline-box !important',
  display: '-moz-inline-box !important',
  display: '-ms-inline-flexbox !important',
  display: '-webkit-inline-flex !important',
  display: 'inline-flex !important',
  fontFamily: 'inherit !important',
  fontSize: 'inherit !important',
  fontWeight: 'inherit !important',
  lineHeight: 'inherit !important',
  margin: '0px !important',
  outline: 'none !important',
  overflow: 'visible !important',
  padding: '5px 5px 5px 12px !important',
  textAlign: 'inherit !important',
  textDecoration: 'none !important',
  height: '42px !important',
  color: [theme.palette.secondary.error, '!important'],
  justifyContent: 'center',
  boxSizing: "border-box",
  verticalAlign: 'middle !important',
  borderRadius: '20px !important',

}));
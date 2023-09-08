import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';



export default function BreadCrumbs({page}) {
  return (
   
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        <i class="fa-solid fa-house"></i> Home
        </Link>
   
        <Typography color="text.primary">{page}</Typography>
      </Breadcrumbs>    
   
  );
}
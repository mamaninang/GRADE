import * as React from 'react';
import { Typography, AppBar, Box, Button, Toolbar } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const Navbar = () => {
	return (
		<AppBar position="relative">
			<Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					<PhotoCamera sx={{ marginRight: "20px" }} />
					<Typography variant="h5">
						G.R.A.D.E
					</Typography>
				</Box>
				<Button variant="contained" color="secondary">
					Login
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar;

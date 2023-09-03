import React from 'react';
import { Container, Grid } from '@mui/material';
import ClassCard from '../components/ClassCard'

const cards = [1, 2, 3, 4, 5, 6, 7]

const Home = () => {
	return (
		<>
			<Container maxWidth="md" sx={{ padding: '60px 0' }}>
        <Grid container spacing={4}>
				{cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
						<ClassCard />
					</Grid>
				))}
				</Grid>
			</Container>
		</>
	);
};

export default Home;

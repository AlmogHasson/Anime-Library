import Card from "./Card"
import React from "react"
import Grid from '@mui/material/Grid';

const CardList = ({ animeArr }) => {

	return (
		
		<Grid container spacing={4} rowSpacing={3}>
			{	
				animeArr.map((anime, i) => {
					
					return (
						<Grid 
						 item xs={12} sm={6} md={4} lg={3}
						 key={i}
						 align="center"
						 >
							<Card
							key={i}
							title={anime.title}
							image={anime.images.jpg.large_image_url}
							url={anime.url}
							/>
						</Grid>
					);	
				})
			}
		</Grid>

	)
}

export default CardList
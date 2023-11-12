import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ title, image, url }) {

    function checkLen(title) {
        title.length > 20 ? title = title.substring(0, 20) + "..." : title = title
        return title
    }

    return (
            <Card sx={{ maxWidth: 285 , boxShadow: 10 , borderRadius:'10px'}} variant='outlined' >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400px"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" height='45px'>
                        {checkLen(title)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
                <Button  sx={{ borderRadius:'8px'}} size="large" variant="contained"  endIcon={<OpenInNewIcon/>} href={url}>
                    Watch  it on MyAnimeList
                </Button>
            </CardActions>
        </Card>
        
    );
}
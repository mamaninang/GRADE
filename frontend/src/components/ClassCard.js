import * as React from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';

const ClassCard = () => {
  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'secondary.light' }}
    >
      <CardActionArea>
        {/* <CardMedia sx={{ paddingTop: '56.25%' }}
                  image="https://source.unsplash.com/random"
                  title="Image title"
              /> */}
        <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1 }}>
          <Typography>
            Science of the Moids
          </Typography>
          <Typography>
            71%
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ClassCard;
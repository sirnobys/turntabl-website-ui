import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function Clients(name, image, location) {
  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{ width: 260 }}
    >
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src={image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography className='body-font' fontWeight="md" mb={0.5}>
          {name}
        </Typography>
        <Typography className='body-font' level="body2">{location}</Typography>
      </CardContent>

    </Card>
  );
}
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function ServicesCard({title,description, icon}) {
  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: {xs:350, sm:500},
        // to make the demo resizable
        paddingX:5,
        // overflow: 'auto',
        // resize: 'horizontal',
        '--icon-size': '80px',
      }}
    >
      <CardOverflow variant="solid" sx={{bgcolor:'#000000'}}>
        <AspectRatio
          variant="outlined"
        //   color="warning"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            {icon}
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" fontSize="xl" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
    {title}
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
       {description}
      </CardContent>
      
    </Card>
  );
}

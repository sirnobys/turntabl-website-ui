import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function CoreValues({ value, icon }) {
    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                width: {xs:"100%", sm:260},
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >
            <AspectRatio ratio="1" sx={{ width: {xs:30, sm:30}, }}>
                {icon}
            </AspectRatio>
            <CardContent>
                <Typography level="h6" fontSize="lg" id="card-description" mb={0}>
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
}

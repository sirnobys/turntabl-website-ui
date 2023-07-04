import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Team = ({ name, bio, role, image, twitter, linkedIn }) => {
    return (
        <Card
            sx={{
                width: 260,
                maxWidth: '100%',
                boxShadow: 'lg',
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                <Chip
                    size="sm"
                    variant="soft"
                    color="primary"
                    sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                >
                    {role}
                </Chip>
                <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 1, mb: 0.5 }}>
                    {name}
                </Typography>
                <Typography level="body2" sx={{ maxWidth: '24ch' }}>
                    {bio}
                </Typography>

            </CardContent>
            <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                <CardActions buttonFlex="1">
                    {/* <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button>Message</Button>
            <Button>Connect</Button>
          </ButtonGroup> */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            mt: 0,
                            alignItems:"center",
                            justifyContent:"center",
                            '& > button': { borderRadius: '2rem' },
                        }}
                    >
                        <IconButton size="sm" variant="plain" color="neutral">
                           <TwitterIcon/>
                        </IconButton>
                        <IconButton size="sm" variant="plain" color="neutral">
                            <LinkedInIcon/>
                        </IconButton>
                        {/* <IconButton size="sm" variant="plain" color="neutral">
                           <FacebookIcon/>
                        </IconButton> */}
                    </Box>
                </CardActions>
            </CardOverflow>
        </Card>
    );
}

export default Team

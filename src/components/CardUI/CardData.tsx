import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';

import React from 'react';

type CardContentType = {
    dest: number;
    cityOrigin: string;
    cityDest: string;
};
function CardData({ dest, cityOrigin, cityDest }: CardContentType) {
    return (
        <Card sx={{ display: 'flex' }} data-cy="card-data">
            <CardMedia
                data-cy="card-img"
                component="img"
                sx={{ width: 100 }}
                image="/images/hero-image.jpg"
                alt="Live from space album cover"
                style={{ background: 'white' }}
            />

            <CardContent sx={{ flex: '1 0 auto', textAlign: 'start' }}>
                <Typography component="div" variant="h5" data-cy="dest-route">
                    From {cityOrigin} to {cityDest}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    textAlign={'start'}
                    component="div"
                >
                    Driving Distance
                </Typography>
            </CardContent>

            <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Typography component="div" variant="h5" data-cy="dest-km">
                    <strong>
                        <Chip
                            label={`${dest} K.M `}
                            color="primary"
                            variant="outlined"
                            size="medium"
                            style={{ width: '100%', fontSize: '18px', fontWeight: '700' }}
                        />
                    </strong>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardData;

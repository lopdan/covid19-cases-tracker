import React from 'react';
import cx from 'classnames';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import styles from './Cards.module.css'

const Cards = (data) => {
    return(
        <div className={styles.container}>
            <Grid container spacing={4} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cases)}>
                    <CardContent>
                        <Typography colort="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            {data.data.confirmed}
                        </Typography>
                        <Typography colort="textSecondary" gutterBottom>
                            {data.data.lastUpdate}
                        </Typography>
                        <Typography variant="body2">
                            Number of COVID-19 cases.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography colort="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            {data.data.deaths}
                        </Typography>
                        <Typography colort="textSecondary" gutterBottom>
                            {data.data.lastUpdate}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths caused by COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.daily_cases)}>
                    <CardContent>
                        <Typography colort="textSecondary" gutterBottom>
                            Daily cases
                        </Typography>
                        <Typography variant="h5">
                            {data.data.newCases}
                        </Typography>
                        <Typography colort="textSecondary" gutterBottom>
                            {data.data.lastUpdate}
                        </Typography>
                        <Typography variant="body2">
                            Last day COVID-19 cases.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.daily_deaths)}>
                    <CardContent>
                        <Typography colort="textSecondary" gutterBottom>
                            Daily deaths
                        </Typography>
                        <Typography variant="h5">
                            {data.data.newDeaths}
                        </Typography>
                        <Typography colort="textSecondary" gutterBottom>
                            {data.data.lastUpdate}
                        </Typography>
                        <Typography variant="body2">
                            Last day COVID-19 deaths.
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
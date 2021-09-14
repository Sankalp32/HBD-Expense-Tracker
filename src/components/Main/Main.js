import React , {useContext} from 'react'
import { Card , CardHeader , CardContent , Typography , Grid , Divider } from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../Context/context';
import InfoCard from '../InfoCard';
import Logo from './logo.PNG'

const Main = () => {
    const classes= useStyles();
    const { balance } =useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <Typography style={{textAlign:'center', marginTop:'5%'}} variant="h5">
                <img src={Logo} style={{ width:'25%' , height:'25%'}}/>
            </Typography>
            <CardHeader title="HBD Money Tracker" style={{textAlign:'center' , marginTop:'-5%'}}/>
            <CardContent>
                <Typography align="center" variant="h5" style={{ marginTop:'-5%'}}>
                    Total Balance  <br/> Rs. <b>{balance} </b>
                </Typography>
                <Typography variant="subtitle1" style={{ lineHeight:'1.5rem', marginTop:'20px'}} >
                    {/* InfoComponent */}
                    <InfoCard/>
                </Typography>
                <Divider className={classes.divider}/>
                <Form/>
                

            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>


                </Grid>

            </CardContent>

        </Card>
    )
}

export default Main

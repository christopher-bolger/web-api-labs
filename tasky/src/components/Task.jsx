import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { shadows } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Chip } from '@mui/material';

const Task = (props) => {
    
    return (
        <Grid
        key={props.id}
        spacing={{xs: 1}}
        size={{ xs: 8, md: 5, lg: 4 }}
        >
            <Card
                sx={{
                backgroundColor: props.done ? 'lightgrey' : 'lightblue',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: 3
                }}
            >
            <Chip 
                sx={{
                    backgroundColor: props.priority === 'High' ? 'red' : props.priority === 'Medium' ? 'orange' : 'green',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    color: 'white',
                    fontWeight: 'bold'
                }}
                icon={<AccessTimeIcon sx={{ color: 'white' }} />} label={`Priority: ${props.priority}`} 
            />
            <CardHeader
            title={props.title}
            sx={{
                backgroundColor: 'white',
                border: '2px solid lightgrey',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center'
            }}
            />
            <CardContent>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                    padding: '20px'
                    }}
                >
                    <Typography
                    component="p"
                    variant="subtitle2"
                    color="text.primary"
                    >
                    Due: {props.deadline}
                    </Typography>
                </Box>

                <Typography
                    component="p"
                    variant="subtitle1"
                    align="center"
                    sx={{ fontStyle: 'italic' }}
                >
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'space-between',
                    padding: '20px'
                }}
                >
                <Button
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={props.markDone}
                    sx={{
                        backgroundColor: props.done ? 'darkgreen' : 'green',
                        '&:hover': {
                            backgroundColor: props.done ? 'green' : 'darkgreen'
                        }
                    }}
                >
                    <DoneIcon />
                    Done
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={props.deleteTask}
                >
                    <DeleteIcon />
                    Delete
                </Button>
            </CardActions>
            </Card>
        </Grid>)


}


export default Task;

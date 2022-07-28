import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import Paper from '@mui/material/Paper';


export default function Loading() {
    return (
        <Paper
        sx={{
          p: 2,
        margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
                
                    <LoadingButton className='Btnloading' loading loadingIndicator="Loading…" variant="outlined" loadingPosition="center" size="large" >
                        Fetch data
                    </LoadingButton>
                    
            

                    </Paper>

    );
}



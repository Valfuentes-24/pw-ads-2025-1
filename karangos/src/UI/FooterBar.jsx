import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

export default function FooterBar() {
  return (
    <Box 
        component="footer" 
        sx={{ 
            backgroundColor: 'action.disabledBackground',
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed', //posição fixa
            bottom: 0, //na parte debaixo da página
            width: '100%', //100% da largura do viewport
    }}
    >
    <Typography variant="caption" gutterBottom> 
      Desenvolvido com <LocalCafeIcon fontSize='small'/> por <a
      href="valvolfu@gmail.com"> Valquiria</a>
    </Typography>
    </Box>
  );
}
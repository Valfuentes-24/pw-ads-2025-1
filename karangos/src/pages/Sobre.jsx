import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Sobre() {
  const [state, setState] = React.useState({ info: '' });

  React.useEffect(() => {
    const url = `${import.meta.env.VITE_API_BASE}/sobre/1`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Erro na resposta da API');
        return response.text();
      })
      .then(data => {
        setState({ info: data });
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div>
      <Typography gutterBottom variant="h1" fontSize={30}>
        Sobre o projeto Karangos
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          {state.info}
        </Typography>
      </Box>
    </div>
  );
}


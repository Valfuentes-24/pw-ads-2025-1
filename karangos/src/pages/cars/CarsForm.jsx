import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useNavigate, useParams } from 'react-router-dom'
import { parseISO } from 'date-fns'
import { feedbackWait, feedbackNotify, feedbackConfirm } from '../../ui/Feedback'

export default function CarsForm() {
  const navigate = useNavigate()
  const params = useParams()

  const colors = [
    'Amarelo', 'Azul', 'Bege', 'Branco', 'Cinza',
    'Dourado', 'Laranja', 'Marrom', 'Prata', 'Preto', 'Rosa', 'Verde', 'Vermelho'
  ].sort()

  const currentYear = new Date().getFullYear()
  const years = []
  for (let year = currentYear; year >= 1951; year--) {
    years.push(year)
  }

  const formDefaults = {
    brand: '',
    model: '',
    color: '',
    year_manufacture: '',
    imported: false,
    plates: '',
    selling_price: ''
  }

  const [state, setState] = React.useState({
    car: { ...formDefaults },
    formModified: false
  })

  const { car, formModified } = state

  React.useEffect(() => {
    if (params.id) loadData()
  }, [])

  async function loadData() {
    feedbackWait(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/cars/${params.id}`)
      const result = await response.json()

      if (result.selling_date) result.selling_date = parseISO(result.selling_date)

      setState({ ...state, car: result })
    } catch (error) {
      console.error(error)
      feedbackNotify('ERRO: ' + error.message)
    } finally {
      feedbackWait(false)
    }
  }

  function handleFieldChange(event) {
    const { name, value, type, checked } = event.target
    const newValue = type === 'checkbox' ? checked : value

    // Validação do campo plates
    if (name === 'plates') {
      const regex = /^[A-Z]{0,3}-?[A-J0-9]{0,1}[0-9]{0,3}$/i
      if (!regex.test(value.toUpperCase())) return
    }

    const carCopy = { ...car }
    carCopy[name] = newValue.toUpperCase()
    setState({ ...state, car: carCopy, formModified: true })
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    feedbackWait(true)
    try {
      const reqOptions = {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
      }

      if (params.id) {
        await fetch(`${import.meta.env.VITE_API_BASE}/cars/${params.id}`, {
          ...reqOptions,
          method: 'PUT'
        })
      } else {
        await fetch(`${import.meta.env.VITE_API_BASE}/cars`, {
          ...reqOptions,
          method: 'POST'
        })
      }

      feedbackNotify('Item salvo com sucesso.', 'success', 2500, () => {
        navigate('..', { relative: 'path', replace: true })
      })
    } catch (error) {
      console.error(error)
      feedbackNotify('ERRO: ' + error.message, 'error')
    } finally {
      feedbackWait(false)
    }
  }

  async function handleBackButtonClick() {
    if (
      formModified &&
      !(await feedbackConfirm('Há informações não salvas. Deseja realmente sair?'))
    ) return

    navigate('..', { relative: 'path', replace: true })
  }

  return <>
    <Typography variant="h1" gutterBottom>
      Cadastro de veículo
    </Typography>

    <Box className="form-fields">
      <form onSubmit={handleFormSubmit}>

        <TextField
          variant="outlined"
          name="brand"
          label="Marca"
          fullWidth
          required
          autoFocus
          value={car.brand}
          onChange={handleFieldChange}
        />

        <TextField
          variant="outlined"
          name="model"
          label="Modelo"
          fullWidth
          required
          value={car.model}
          onChange={handleFieldChange}
        />

        <TextField
          variant="outlined"
          name="color"
          label="Cor"
          fullWidth
          required
          value={car.color}
          onChange={handleFieldChange}
          select
        >
          {colors.map(color => (
            <MenuItem key={color} value={color}>{color}</MenuItem>
          ))}
        </TextField>

        <TextField
          variant="outlined"
          name="year_manufacture"
          label="Ano de fabricação"
          fullWidth
          required
          value={car.year_manufacture}
          onChange={handleFieldChange}
          select
        >
          {years.map(year => (
            <MenuItem key={year} value={year}>{year}</MenuItem>
          ))}
        </TextField>

        <div className="MuiFormControl-root">
          <FormControlLabel
            control={
              <Checkbox
                name="imported"
                checked={car.imported}
                onChange={handleFieldChange}
              />
            }
            label="Importado"
          />
        </div>

        <TextField
          variant="outlined"
          name="plates"
          label="Placas (AAA-9A99)"
          fullWidth
          required
          value={car.plates}
          onChange={handleFieldChange}
          inputProps={{ maxLength: 8 }}
        />

        <TextField
          variant="outlined"
          name="selling_price"
          label="Preço de venda"
          fullWidth
          type="number"
          value={car.selling_price}
          onChange={handleFieldChange}
        />

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          mt: 2
        }}>
          <Button variant="contained" color="secondary" type="submit">
            Salvar
          </Button>
          <Button variant="outlined" onClick={handleBackButtonClick}>
            Voltar
          </Button>
        </Box>

        <Box sx={{ fontFamily: 'monospace', mt: 3 }}>
          {JSON.stringify(car, null, 2)}
        </Box>

      </form>
    </Box>
  </>
}



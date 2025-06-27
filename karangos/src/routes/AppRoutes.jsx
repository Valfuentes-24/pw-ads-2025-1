import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import CarsList from '../pages/cars/CarsList'
import CarsForm from '../pages/cars/CarsForm'

import CustomersList from '../pages/customers/CustomersList'
import CustomersForm from '../pages/customers/CustomersForm'
import Sobre from '../pages/Sobre'

export default function AppRoutes() {
  return <Routes>
    <Route path="/" element={ <Homepage /> } />

    <Route path="/cars" element={ <CarsList /> } />
    <Route path="/cars/new" element={ <CarsForm /> } />
    <Route path="/cars/:id" element={ <CarsForm /> } />

    <Route path="/customers" element={ <CustomersList /> } />
    <Route path="/customers/new" element={ <CustomersForm /> } />
    <Route path="/customers/:id" element={ <CustomersForm /> } />

     <Route path="/sobre" element={ <Sobre/> } />
    
  </Routes>
}

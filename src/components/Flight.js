import { Box, CardActions, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material'
import pic from '../images/john-mcarthur-PrdNTrIrG8w-unsplash (2).jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
// import { useQuery } from '@tanstack/react-query'

const searchSchema = yup.object().shape({
  From: yup.string(),
  To: yup.string().required('Enter a destination'),
  DepartureDate: yup.string().required('Enter a date'),
  Adults: yup.number(),
  Children: yup.number()
})

function Flight() {
  return (
    <Box>
      <Box sx={{ position: 'relative', width: '100%', marginBottom: 10}}>
        <CardMedia component="img" src={pic} sx={{height: '95vh' }} />
        <Box sx={{position: 'absolute', top: 0, left: 0, width: '100%',height: '95vh', backgroundColor: 'rgba(0, 0, 0, 0.6)',  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Typography variant="h4" color={'white'} sx={{fontWeight: {sm: 50}, fontSize: {sm: 70}, fontFamily:'open-sans'}} align='center'>
            Our Flight
            </Typography>
        </Box>
      </Box>

      {/* input section */}
      <Box className="bg-slate-500 p-14">
        <Container className='max-w-full'>
          <Formik 
          className="bg-yellow-500"
          initialValues={{From: 'United State', To: '', DepartureDate: '', Adults: 1, Children: 0}} 
          validationSchema={searchSchema} 
          onSubmit={(values) => {
            console.log(values)
          }}>
            <Form className='flex max-w-full'>
              <Box className="mr-5">
                <label htmlFor='From' className='block font-bold'>From:</label>
                <Field className='bg-white p-5' name="From" type="text" placeholder='From' id='From'/>
              </Box>
              <Box className="mr-5">
                <label htmlFor='To' className='block font-bold'>To:</label>
                <Field className='bg-white p-5' name="To" type="text" placeholder='Country, city or airPort' id="To"/>
                <ErrorMessage name="To" />
              </Box>
              <Box className="mr-5">
                <label htmlFor='DepartureDate' className='block font-bold'>Departure Date:</label>
                <Field className='bg-white p-5' name="DepartureDate" type="text" id="DepartureDate" placeholder='2024-12-25'/>
                <ErrorMessage name="DepartureDate" component='div' className='text-red-700 inline'/>
              </Box>
              <Box className="mr-5">
                <label htmlFor='Adults' className='block font-bold'>Adults:</label>
                <Field className='bg-white p-5' name="Adults" type="number" id="Adults"/>
              </Box>
              <Box className="mr-5">
                <label htmlFor='Children' className='block font-bold'>Children:</label>
                <Field className='bg-white p-5' name="Children" type="number" id="Children"/>
              </Box>
            <Button type="submit" variant='contained' className="p-5 mt-6 ">Search</Button>
            </Form>
          </Formik>
        </Container>
      </Box>
      {/* ... */}
      
      <Box className="px-4">
      <Typography variant='h3' className='font-sans'>Flights Deals from Nigeria</Typography>
      <Typography variant='subtitle1' className='mb-5'>Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months</Typography>

      {/* card section */}
        <Grid container spacing={12}>
          <Grid item>
          <Box sx={{maxWidth: 400}} className='bg-slate-200'>
            {/* <CardMedia
            component='img'
            src={pic}
            /> */}
            <CardContent className='w-80'>
              <Typography gutterBottom className='font-extrabold text-xl'>
                AirLine: <span className='font-light'>Air Peace</span>
              </Typography>
                  <Typography className='font-extrabold text-xl'>Arrival:</Typography>
                  <Typography>Date: 2024-08-09</Typography>
                  <Typography>Time: 06:40:00</Typography>
              <Box>
              </Box>
            </CardContent>
          <CardActions className='flex flex-row-reverse'>
            <Link>
              <Button size='small' variant='contained' color='primary'>
                From $123,000
              </Button>
            </Link>
          </CardActions>
        </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Flight

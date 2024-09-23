import React from 'react'
import { Box, Button, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { IataCodes } from '../Data/IataCodes'
import { searchSchema } from '../schema/searchSchema'

const clientId = process.env.REACT_APP_CLIENTID
const clientSecret = process.env.REACT_APP_CLIENTSECRET
let tokenData = new URLSearchParams()
tokenData.append('grant_type', 'client_credentials')
tokenData.append('client_id', clientId)
tokenData.append('client_secret', clientSecret)
let access_token

const getAccessToken = async () => {
  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', tokenData)
    access_token = response.data.access_token
    return access_token;
  } catch (error) {
    console.log(error.message)
  }
}

  const getSearchResults = async (values) => {
    const { From, To, DepartureDate, Adults, Children} = values
    try {
      if (!access_token) await getAccessToken();
      const { data } = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
        params: {
          originLocationCode: From,
          destinationLocationCode: To,
          departureDate: DepartureDate,
          adults: Adults,
          children: Children,
        },
        headers: {
          'Authorization': `Bearer ${access_token}`,
          "Content-Type": 'application/vnd.amadeus+json'
        }
      })
      return data
    } catch (error) {
      console.error(error.message)
    }
  }

function SearchForm() {
  const { mutate, isPending, data, isSuccess } = useMutation({
    mutationFn: getSearchResults
  });
  
  return (
    <Box>
      <Box className="bg-slate-500 p-14">
        <Container className='max-w-full'>
          <Formik 
          className="bg-yellow-500"
          initialValues={{From: 'CHI', To: 'NYC', DepartureDate: '', Adults: 1, Children: 0}} 
          validationSchema={searchSchema} 
          onSubmit={(values) => (mutate(values))}
          validateOnBlur={false}
          validateOnChange={false}
          >
            <Form className=' max-w-full grid lg:grid-cols-6 md:grid md:grid-cols-2 xs:flex-col'>
              <Box className="mr-5">
                <label htmlFor='From' className='block font-bold'>From:</label>
                <Field className='bg-white p-5 ' name="From" as="select" id='From'>
                  {IataCodes.map((code, i) => (
                    <option value={code.values} key={i}>{code.name}</option>
                  ))}
                </Field>
              </Box>
              <Box className="mr-5">
                <label htmlFor='To' className='block font-bold'>To:</label>
                <Field className='bg-white p-5' name="To" as="select" id='To'>
                  {IataCodes.map((code, i) => (
                    <option value={code.values} key={i}>{code.name}</option>
                  ))}
                </Field>
                <Box><ErrorMessage name="To" component={'div'} className='text-red-700'/></Box>
              </Box>
              <Box className="mr-5">
                <label htmlFor='DepartureDate' className='block font-bold'>Departure Date:</label>
                <Field className='bg-white p-5' name="DepartureDate" type="text" id="DepartureDate" placeholder='2024-12-25'/>
                <ErrorMessage name="DepartureDate" component='div' className='text-red-700 max-w-28'/>
              </Box>
              <Box className="mr-5">
                <label htmlFor='Adults' className='block font-bold'>Adults:</label>
                <Field className='bg-white p-5' name="Adults" type="number" id="Adults"/>
              </Box>
              <Box className="mr-5">
                <label htmlFor='Children' className='block font-bold'>Children:</label>
                <Field className='bg-white p-5' name="Children" type="number" id="Children"/>
              </Box>
             <Box><Button type="submit" variant='contained' disabled={isPending} className="p-5 mt-6">{isPending ? 'Searching...' : 'Search'}</Button></Box>
            </Form>
          </Formik>
        </Container>
      </Box>

      <Box className='p-4'>
          <Container sx={{maxWidth: 800}}>
            <Grid container spacing={12} className='flex lg:flex items-center justify-center md:grid md:grid-cols-2 '>
              {isSuccess && Array.isArray(data?.data) && data?.data.map((res, i) => {
                const arrival = res.itineraries[0].segments[0].arrival.at.split('T')
                return(
                <Grid item key={i} md={4}>
                <Box sx={{width: 300}} className='bg-slate-200'>
                  <CardContent className='w-80'>
                    <Typography gutterBottom className='font-extrabold text-xl'>
                      AirLine: <span className='font-light'>{res.validatingAirlineCodes[0]}</span>
                    </Typography>
                        <Typography className='font-extrabold text-xl'>Arrival:</Typography>
                        <Typography>Date: {arrival[0]}</Typography>
                        <Typography>Time: {arrival[1]}</Typography>
                    <Box>
                    </Box>
                  </CardContent>
                <CardActions className='flex flex-row-reverse'>
                  <Link>
                    <Button size='small' variant='contained' color='primary'>
                      From ${res.price.total}
                    </Button>
                  </Link>
                </CardActions>
              </Box>
                </Grid>
                )
              })}
              </Grid>
          </Container>
      </Box>
    </Box>
  )
}

export default SearchForm
import * as yup from 'yup'
export const searchSchema = yup.object().shape({
    From: yup.string().required("Enter a Location"),
    To: yup.string().required('Enter a destination'),
    DepartureDate: yup.string().required('Enter a date'),
    Adults: yup.number(),
    Children: yup.number()
  })
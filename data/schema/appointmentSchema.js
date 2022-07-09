import * as Yup from 'yup'

const phoneRegExp = /^[\+]?[(]?[\d]{3}[)]?[-\s\.]?[\d]{3}[-\s\.]?[\d]{4,6}$/im

const appointmentValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Your name is too short')
    .required('Your name is required'),
  email: Yup.string()
    .email('Email is not a valid email address')
    .required('Email address is required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
})

export default appointmentValidationSchema

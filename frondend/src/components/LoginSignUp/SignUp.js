import React from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Select,
    RadioGroup,
    HStack,
    Radio

} from '@chakra-ui/react'
import './LoginSignUp.css'

const SignUp = () => {
    return (
        <div className='loginSignUpFormContainer'>
            <div className='loginSignUpFormWrapper'>
                <h1 className='loginSignUHeader'>Sign up</h1>
                <div className='loginSignUpForm'>
                    <FormControl >
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                        <br/>
                        <br/>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
                        <br/>
                        <br/>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                        <br/>
                        <Select placeholder='Gender'>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>
                        <br/>
                        <FormLabel>Cell No:</FormLabel>
                        <Input type='number' placeholder='Phone number' />
                        <FormHelperText>We'll never share your number.</FormHelperText>
                        <br/>
                        <Select placeholder='Select country'>
                            <option>Algeria</option>
                            <option>Angola</option>
                            <option>Benin</option>
                            <option>Botswana</option>
                            <option>Burkina Faso</option>
                            <option>Burundi</option>
                            <option>Cabo Verde</option>
                            <option>Cameroon</option>
                            <option>Central African Republic</option>
                            <option>Chad</option>
                            <option>Comoros</option>
                            <option>Democratic Republic of the Congo</option>
                            <option>Djibouti</option>
                            <option>Egypt</option>
                            <option>Equatorial Guinea</option>
                            <option>Eritrea</option>
                            <option>Eswatini</option>
                            <option>Ethiopia</option>
                            <option>Gabon</option>
                            <option>Gambia</option>
                            <option>Ghana</option>
                            <option>Guinea</option>
                            <option>Guinea-Bissau</option>
                            <option>Ivory Coast</option>
                            <option>Kenya</option>
                            <option>Lesotho</option>
                            <option>Liberia</option>
                            <option>Libya</option>
                            <option>Madagascar</option>
                            <option>Malawi</option>
                            <option>Mali</option>
                            <option>Mauritania</option>
                            <option>Mauritius</option>
                            <option>Morocco</option>
                            <option>Mozambique</option>
                            <option>Namibia</option>
                            <option>Niger</option>
                            <option>Nigeria</option>
                            <option>Rwanda</option>
                            <option>Sao Tome and Principe</option>
                            <option>Senegal</option>
                            <option>Seychelles</option>
                            <option>Sierra Leone</option>
                            <option>Somalia</option>
                            <option>South Africa</option>
                            <option>South Sudan</option>
                            <option>Sudan</option>
                            <option>Tanzania</option>
                            <option>Togo</option>
                            <option>Tunisia</option>
                            <option>Uganda</option>
                            <option>Zambia</option>
                            <option>Zimbabwe</option>
                        </Select>
                        <br/>
                        <RadioGroup defaultValue='Itachi'>
                            <HStack spacing='24px'>
                                <Radio value='Sasuke'>RSA ID No:</Radio>
                                <Radio value='Nagato'>Passport</Radio>
                            </HStack>
                        </RadioGroup>
                        <br/>
                        <FormLabel></FormLabel>
                        <Input placeholder='ID Number' />
                    </FormControl>
                    <br />
                    <div className='loginSignUpButton'>
                        <button className='btn btn-outline-info'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
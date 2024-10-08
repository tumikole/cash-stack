import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import './LoginSignUp.css'

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <div className='loginSignUpFormContainer'>
            <div className='loginSignUpHomeButton'>
                <Link to='/'>
                    <box-icon name='home' color='#329795' ></box-icon>
                    <p>Home</p>
                </Link>
            </div>
            <div className='loginSignUpFormWrapper'>
                <h1 className='loginSignUHeader'>Login</h1>
                <div className='loginSignUpForm'>
                    <FormControl >
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />
                        <br />
                        <br />
                        <FormLabel>Password</FormLabel>

                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputRightElement width='4.5rem'>
                                <box-icon name='low-vision' onClick={handleClick} color="#329795" ></box-icon>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <br />
                    <div className='loginSignUpButton'>
                        <button className='btn btn-outline-info'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
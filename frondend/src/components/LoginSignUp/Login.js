import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button

} from '@chakra-ui/react'
import './LoginSignUp.css'

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <div className='loginSignUpFormContainer'>
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
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <box-icon name='low-vision' color="#FF0000" ></box-icon> : <box-icon name='low-vision' color='#00eeff' ></box-icon>}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
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

export default Login
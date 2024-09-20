import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  InputGroup,
  InputRightElement,
  Button,
  Stepper,
  Step,
  StepTitle,
  StepIndicator,
  StepStatus,
  useSteps,
  VStack,
  StepSeparator
} from '@chakra-ui/react';
import './LoginSignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const steps = ['Personal Details', 'Contact Information', 'Password Setup'];
  const { activeStep, setActiveStep } = useSteps({ index: 0, count: steps.length });

  const [showPass, setShowPass] = useState(false);
  const [showConf, setShowConf] = useState(false);

  const handlePass = () => setShowPass(!showPass);
  const handleConfirm = () => setShowConf(!showConf);

  const nextStep = () => setActiveStep(activeStep + 1);
  const prevStep = () => setActiveStep(activeStep - 1);

  return (
    <div className='loginSignUpFormContainer'>
        <div className='loginSignUpHomeButton'>
            <Link to='/'>
        <box-icon name='home' color='#329795' ></box-icon>
        <p>Home</p>
        </Link>
        </div>
      <div className='loginSignUpFormWrapper'>
        <h1 className='loginSignUHeader'>Sign Up</h1>        

        <div className='loginSignUpForm'>
        <Stepper index={activeStep} colorScheme='teal'>
          <Step>
            <StepIndicator>
              <StepStatus />
            </StepIndicator>
            <VStack spacing={4} width='full'>
              <StepTitle>{steps[activeStep]}</StepTitle>
              <StepSeparator />
            </VStack>
          </Step>
        </Stepper>
        <hr/>
          {activeStep === 0 && (
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder='First name' />
              <br /><br />
              <FormLabel>Last Name</FormLabel>
              <Input placeholder='Last name' />
              <br /><br />
              <FormLabel>Email Address</FormLabel>
              <Input type='email' />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <br />
              <Button onClick={nextStep}>Next</Button>
            </FormControl>
          )}

          {activeStep === 1 && (
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select placeholder='Select Gender'>
                <option>Male</option>
                <option>Female</option>
              </Select>
              <br />
              <FormLabel>Phone Number</FormLabel>
              <Input type='number' placeholder='Phone number' />
              <FormHelperText>We'll never share your number.</FormHelperText>
              <br />
              <FormLabel>Country</FormLabel>
              <Select placeholder='Select Country'>
              </Select>
              <br />
              <Button onClick={prevStep}>Back</Button>
              <Button onClick={nextStep} ml={4}>Next</Button>
            </FormControl>
          )}

          {activeStep === 2 && (
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={showPass ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <box-icon name='low-vision' color='#329795' onClick={handlePass}></box-icon>
                </InputRightElement>
              </InputGroup>
              <br />
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={showConf ? 'text' : 'password'}
                  placeholder='Confirm password'
                />
                <InputRightElement width='4.5rem'>
                  <box-icon name='low-vision' onClick={handleConfirm} color='#329795'></box-icon>
                </InputRightElement>
              </InputGroup>
              <br />
              <Button onClick={prevStep}>Back</Button>
              <Button colorScheme='teal' ml={4}>Sign Up</Button>
            </FormControl>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

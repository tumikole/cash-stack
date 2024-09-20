import React from 'react';
import './GetStarted.css';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

const levels = [
  {
    level: 'Gold',
    icon: 'bx bx-medal',
    fee: "R 150.00",
    description: 'At Level Gold, you start by paying a R150 joining fee. Your goal is to recruit at least 3 - 10 downliners under your name, each of whom also pays R150. Once they have joined, you earn 66.7% of the total recruitment fees from your downline, and you advance to Level 2 after their payments are confirmed.',
    bonus: 'One-time bonus of R100 for recruiting 5 or more people in this level',
    percentage: '66.7'
  },
  {
    level: 'Bronze',
    icon: 'bx bx-trophy',
    fee: "You pay 50% of the paid-out in Level 1",
    description: 'To enter Level Bronze, you pay 50% of the paid-out in Level 1. You then wait for the people you recruited in Level 1 to recruit their own downlines and complete the first level. Once they do, you earn 62% of their total recruitment fees and move to Level 3.',
    bonus: 'Receive R200 for retaining all your recruits from Level 1'
  },
  {
    level: 'Ruby',
    icon: 'bx bx-diamond',
    fee: "You pay 4% less than what you paid in Level 2",
    description: 'At Level Ruby, you pay 4% less than what you paid in Level 2. As your downline completes Level 2 and joins Level 3, you will earn 68% of their recruitment fees. Once all your recruits reach this stage, you progress to Level 4.',
    bonus: 'Bonus of R300 for helping at least 2 of your recruits advance to Level 3'
  },
  {
    level: 'Sapphire',
    icon: 'bx bx-star',
    fee: "You pay 8% less than the fee for Level 3",
    description: 'To move to Level Sapphire, you pay 8% less than the fee for Level 3. Your earnings at this stage increase to 72% of the recruitment fees generated by your downline. When your recruits complete this level, you are promoted to Level 5.',
    bonus: 'Earn an extra R400 for bringing at least 4 new recruits directly to this level'
  },
  {
    level: 'Emerald',
    icon: 'bx bx-crown',
    fee: "You pay 10% less than Level 4",
    description: 'At Level Emerald, you pay 10% less than Level 4. By this stage, you are earning 75% of the total recruitment fees collected from your growing network. Once your downline reaches this level, you progress to Level 6.',
    bonus: 'Receive R500 for maintaining at least 90% of your initial recruits'
  },
  {
    level: 'Diamond',
    icon: 'bx bx-gem',
    fee: "You pay approximately 15% less than Level 5",
    description: 'At Level Diamond, you pay approximately 15% less than Level 5. You earn 80% of the total fees collected by your recruits. Once all members of your downline reach this level, you move to Level 7.',
    bonus: 'Earn R600 for having at least 6 recruits active in this level'
  },
  {
    level: 'Platinum',
    icon: 'bx bx-award',
    fee: "You pay about 50% of your Level 6 fee",
    description: 'For Level Platinum, you pay about 50% of your Level 6 fee. At this stage, you receive 83% of the fees from your downline. When all of your recruits reach this stage, you progress to Level 8.',
    bonus: 'Bonus of R700 for reaching this level with 100% recruit retention'
  },
  {
    level: 'Black Diamond',
    icon: 'bx bx-briefcase',
    fee: "You pay 50% of your Level 7 fee",
    description: 'For Level Black Diamond, you pay 50% of your Level 7 fee. You will earn 87% of the total recruitment fees from your downline at this level. Once they advance, you proceed to Level 9.',
    bonus: 'Receive R800 for maintaining 80% of your downline to this level'
  },
  {
    level: 'Royal Black Diamond',
    icon: 'bx bx-star-half',
    fee: "You pay 15% less than Level 8",
    description: 'At Level Royal Black Diamond, you pay 15% less than Level 8. You will now earn 90% of the total fees generated by your recruits. This level marks a significant point in the program as you approach the final stage.',
    bonus: 'Earn R900 for getting 100% of your downline to complete this level'
  },
  {
    level: 'Ultimate Diamond',
    icon: 'bx bx-trophy',
    fee: "You pay 50% of your Level 9 fee",
    description: 'In the final stage, Level Ultimate Diamond, you pay 50% of your Level 9 fee. At this level, you earn 100% of the recruitment fees from your downline, plus an additional 10% for each new recruit under your name. This is the highest earning level in the program.',
    bonus: 'Earn R1000 for reaching Level Ultimate Diamond with full downline completion'
  }
];

const GetStarted = () => {
  return (
    <section id="get-started" className="get-started">
      <div className="getStartedContainer">
        <h2 className='get-startedHeader'>Get Started with Our Program</h2>
        <p className='get-startedSubHeader'>Cash Stack marketing program rewards you for building and growing your network. Here’s how it works:</p>

        <div className="level-description">
          <p>At each level, you pay a percentage of the previous level's fee and recruit at least 3 people. You earn increasing payouts as your recruits advance through the program. Below is a breakdown of the levels, fees, and payouts:</p>
        </div>

        <table className="levels-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Joining Fee (Rand)</th>
              <th>Description</th>
              <th>Bonus</th>
              <th>%</th>

            </tr>
          </thead>
          <tbody>
            {levels.map((level) => (
              <tr key={level.level}>
                <td className='levelWrapper'>
                  <i className={level.icon}></i> <p>{level.level}</p>
                </td>
                <td>{level.fee}</td>
                <td>{level.description}</td>
                <td>{level.bonus}</td>
                <td>{level.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='levels-table-mobile'>
          <Accordion allowToggle>
            {levels.map((level) => {
              return (
                <AccordionItem key={level.level}>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                        <i className={level.icon}></i> <p>{level.level}</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <small>
                      <b>Joining Fee (Rand):</b>
                      <br /> <br />{level.fee}</small>
                    <hr />
                    <small><b>Description:</b>
                      <br /> <br />{level.description}</small>
                    <hr />
                    <small>
                      <b>Bonus:</b>
                      <br /> <br />
                      {level.bonus}</small>
                    <br />
                    <hr />
                    <small>
                      <b>Bonus:</b>
                      <br /> <br />
                      {level.percentage}%</small>



                  </AccordionPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>

        <div className="get-started-cta-button">
          <Link to='/sign_up'><button className="get-started-cta-button">Sign Up Now</button></Link>
          <p>Already have an account? <Link to='/login'>Log In</Link></p>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

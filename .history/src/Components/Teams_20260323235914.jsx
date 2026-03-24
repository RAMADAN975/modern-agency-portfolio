import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
  return (
    <div className=''>
      <Title title='Meet the team' desc='A passionate team of digital exports dedicated to your brands success.' />

      <div className=''>
        {teamData.map((team, index) => (
          <div key={index} className=''>
            <img src={team.image} className='' alt="" />
            <div className=''>
              <h3 className=''>{team.name}</h3>
              <p className=''>{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams

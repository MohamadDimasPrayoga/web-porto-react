import React from 'react'
import './features.css'
import Card from './Card'
import data from './FeaturesApi'

const Features = () => {
  return (
    <>
    <section className='features top'>
      <div className="container">
        <div className="heading">
          <h4>Features</h4>
          <h1>Kegitan Sehari Hari</h1>
        </div>

        <div className="content grid">
          {data.map((val,index) => {
            return <Card key={index} image={val.image} title={val.title} desc={val.desc}/>
          })}
          
        </div>
      </div>
    </section>
    </>
  )
}

export default Features
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'
import {useEffect, useState} from 'react'

const VaccinationByAge = props => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const {data} = props
  useEffect(() => {
    const wrapperWidth = document.getElementById('vaccinationCoverage')
      .clientWidth
    const calculatedWidth = (90 * wrapperWidth) / 100
    const calculatedHeight = Number((calculatedWidth * (6 / 10)).toFixed(2))
    // console.log(calculatedWidth, calculatedHeight)
    setHeight(calculatedHeight)
    setWidth(calculatedWidth)
  }, [width])
  return (
    <>
      <h1 className="chart-heading-2">Vaccination by Age</h1>

      <PieChart width={width} height={height}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            padding: 0,
            fontFamily: 'Roboto',
            fontSize: width > 500 ? '17px' : '12px',
            fontWeight: '600',
          }}
        />
      </PieChart>
    </>
  )
}

export default VaccinationByAge

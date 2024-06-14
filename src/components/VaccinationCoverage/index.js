import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'
import {useEffect, useState} from 'react'

const VaccinationCoverage = props => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const {data} = props
  //   console.log(data)
  useEffect(() => {
    const wrapperWidth = document.getElementById('vaccinationCoverage')
      .clientWidth
    const calculatedWidth = (90 * wrapperWidth) / 100
    const calculatedHeight = Number((calculatedWidth * (6 / 10)).toFixed(2))
    // console.log(calculatedWidth, calculatedHeight)
    setHeight(calculatedHeight)
    setWidth(calculatedWidth)
  }, [width])
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <>
      <h1 className="chart-heading">Vaccination Coverage</h1>

      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
        width={width}
        height={height}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 20,
            fontFamily: 'roboto',
            fontSize: width > 500 ? '17px' : '12px',
            fontWeight: '600',
          }}
        />
        <Bar
          dataKey="dose_1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[5, 5, 0, 0]}
          barSize="30%"
        />
        <Bar
          dataKey="dose_2"
          name="Dose 2"
          radius={[5, 5, 0, 0]}
          fill="#f54394"
          barSize="30%"
        />
      </BarChart>
    </>
  )
}

export default VaccinationCoverage

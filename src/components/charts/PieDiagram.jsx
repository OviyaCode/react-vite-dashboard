
import { PieChart } from '@mui/x-charts/PieChart';


const PieDiagram = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Blackberry' },
            { id: 1, value: 15, label: 'Apple' },
            { id: 2, value: 20, label: 'Realme' },
            { id: 3, value: 45, label: 'Samsung' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  )
}

export default PieDiagram
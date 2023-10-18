import { BarChart } from '@mui/x-charts/BarChart';


const BarDiagram = () => {
    return (
        <BarChart
            xAxis={[
                {
                    id: 'barCategories',
                    data: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
                    scaleType: 'band',
                },
            ]}
            series={[
                {
                    data: [2, 5, 3, 6, 7, 2, 4, 6, 10, 7, 11, 15],
                },
            ]}
            width={500}
            height={300}
        />
    )
}

export default BarDiagram
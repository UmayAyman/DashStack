import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const data = [
    { name: '5k', value: 20 },
    { name: '10k', value: 45 },
    { name: '15k', value: 42 },
    { name: '20k', value: 64.36 },
    { name: '25k', value: 38 },
    { name: '30k', value: 47 },
    { name: '35k', value: 25 },
    { name: '40k', value: 44 },
    { name: '45k', value: 61 },
    { name: '50k', value: 48 },
    { name: '55k', value: 43 },
    { name: '60k', value: 49 },
];

const SalesChart = () => {
    return (
        <div style={{
            width: '78.5%',
            margin: '2rem auto',
            marginLeft: '205px',
            marginTop: '1.5rem',
            padding: '1.5rem',
            borderRadius: '10px',
            background: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '18px', marginLeft: '25px' }}>Sales Details</h2>
                <select style={{ padding: '5px 10px', borderRadius: '5px', color: 'grey', height: '30px', border: '0.25px solid #ccc', marginRight: '27px' }}>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorValue)"
                        dot={{ r: 3 }}
                        activeDot={{ r: 6 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesChart;

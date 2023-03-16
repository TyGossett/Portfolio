import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface SurveyData {
  question: string;
  lowFit: number;
  highFit: number;
}

interface ChartProps {
  data: SurveyData[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="question" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="lowFit" fill="#8884d8" />
          <Bar dataKey="highFit" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
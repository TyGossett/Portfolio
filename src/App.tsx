import React from 'react';
import { SkillBars } from '../portfolio';
import { Container, Row, Progress, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import GreetingLottie from '../components/DisplayLottie';
import './App.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface SurveyData {
  question: string;
  lowFit: number;
  highFit: number;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<SurveyData>({
    question: '',
    lowFit: 0,
    highFit: 0,
  });

  const [chartData, setChartData] = useState<SurveyData[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setChartData([...chartData, formData]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
          />
        </label>
        <label>
          Low Fit:
          <input
            type="number"
            name="lowFit"
            value={formData.lowFit}
            onChange={handleChange}
          />
        </label>
        <label>
          High Fit:
          <input
            type="number"
            name="highFit"
            value={formData.highFit}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="question" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="lowFit" fill="#8884d8" />
            <Bar dataKey="highFit" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Proficiency;

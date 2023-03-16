import React, { useState } from 'react';

interface SurveyData {
  question: string;
  lowFit: number;
  highFit: number;
}

interface SurveyFormProps {
  onSubmit: (data: SurveyData) => void;
}

export const SurveyForm: React.FC<SurveyFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SurveyData>({
    question: '',
    lowFit: 0,
    highFit: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
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
  );
};
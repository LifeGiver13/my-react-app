import React, { useEffect, useState } from 'react';
import Header from '../Header';

export default function QuestionnaireForm({ id }) {
    const [questionnaire, setQuestionnaire] = useState(null);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://test.almamaters.club:9090/questionnaire/${id}`);
            const json = await res.json();
            setQuestionnaire(json.data);
        }

        fetchData();
    }, [id]);

    const handleChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Here you can POST to your backend if needed
    };

    const renderInput = (response) => {
        const { type, label, input_key } = response;

        switch (type) {
            case 'SIMPLE_TEXT':
                return (
                    <input
                        type="text"
                        placeholder={label}
                        value={formData[input_key] || ''}
                        onChange={e => handleChange(input_key, e.target.value)}
                    />
                );
            case 'FREE_TEXT':
                return (
                    <textarea
                        placeholder={label}
                        value={formData[input_key] || ''}
                        onChange={e => handleChange(input_key, e.target.value)}
                    />
                );

            case 'DATE_TIME':
                return (
                    <input
                        type="date"
                        value={formData[input_key] || ''}
                        onChange={e => handleChange(input_key, e.target.value)}
                    />
                );
            default:
                // fallback to FREE_TEXT for unknown types
                return (
                    <input
                        type="text"
                        placeholder={label + ' (defaulted to text)'}
                        value={formData[input_key] || ''}
                        onChange={e => handleChange(input_key, e.target.value)}
                    />
                );
        }
    };

    if (!questionnaire) return <p>Loading...</p>;

    return (
        <>
            <Header>
                <div>
                    <h2>{questionnaire.name}</h2>
                    <p>{questionnaire.description}</p>

                    <form onSubmit={handleSubmit}>
                        {questionnaire.questions.map((question) => (
                            <div key={question.id} style={{ marginBottom: '1.5rem' }}>

                                <p><strong>{question.content.replace(/<\/?[^>]+(>|$)/g, '')}</strong></p>

                                {question.settings?.responses?.map((response, idx) => (

                                    <div key={idx} style={{ marginLeft: '1rem' }}>
                                        <label>{response.label}</label><br />
                                        {renderInput(response)}
                                    </div>

                                ))}
                            </div>
                        ))}

                        <button type="submit">Submit</button>
                    </form>
                    <p></p>

                </div>
            </Header>
        </>

    );
}

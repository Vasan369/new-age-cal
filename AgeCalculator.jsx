import React, { useState } from 'react';
import { Input } from '@material-tailwind/react';


const AgeCalculator = () => {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        if (!dob) return;

        const birthDate = new Date(dob);
        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({ years, months, days });
    };

    return (
        <div className="flex flex-col items-center gap-10 mt-8 h-full ">
            <h1 className="text-4xl mb-4">Age Calculator</h1>
            <Input
                label='Date'
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />
            <button
                onClick={calculateAge}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-xl"
            >
                Calculate Age
            </button>
            {age && (
                <div className="mt-4 text-lg">
                    <p>{`Years: ${age.years}`}</p>
                    <p>{`Months: ${age.months}`}</p>
                    <p>{`Days: ${age.days}`}</p>
                </div>
            )}
        </div>
    );
};

export default AgeCalculator;

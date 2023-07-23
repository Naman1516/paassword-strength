import React from 'react';

const PasswordStrength = ({ password }) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const isStrong = password.length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSymbol;

    const strength = isStrong ? 'Strong' : password.length >= 6 ? 'Moderate' : 'Weak';

    const missingCriteria = [];
    if (!hasUppercase) missingCriteria.push('an Uppercase character');
    if (!hasLowercase) missingCriteria.push('a Lowercase character');
    if (!hasNumber) missingCriteria.push('a Number');
    if (!hasSymbol) missingCriteria.push('a Symbol');

    const getBgColor = (passwordStrength) => {
        switch (passwordStrength) {
            case 'Strong':
                return 'bg-green-500';
            case 'Moderate':
                return 'bg-yellow-500';
            case 'Weak':
                return 'bg-red-500';
            default:
                return '';
        }
    };

    const getMissingCriteriaStyle = missingCriteria.length > 0 ? 'text-red-600 font-medium' : '';

    return (
        <div className="mt-2">
            <div className={`text-lg font-semibold mb-2 ${getBgColor(strength)} text-white rounded-md p-2 text-center`}>
                {strength}
            </div>
            {password.length > 0 && missingCriteria.length > 0 && (
                <div className={`text-sm ${getMissingCriteriaStyle}`}>
                    Missing: {missingCriteria.join(', ')}
                </div>
            )}
        </div>
    );
};

export default PasswordStrength;

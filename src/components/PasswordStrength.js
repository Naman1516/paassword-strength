import React from 'react';

const PasswordStrength = ({ password }) => {
    const checkPasswordStrength = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
        const isStrong = password.length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSymbol;

        if (isStrong) return 'Strong';
        if (password.length >= 6) return 'Moderate';
        return 'Weak';
    };

    const passwordStrength = checkPasswordStrength(password);

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

    return (
        <div className={`w-full flex justify-center items-center text-white text-lg font-semibold rounded-lg p-2 mt-4 ${getBgColor(passwordStrength)}`}>
            {passwordStrength}
        </div>
    );
};

export default PasswordStrength;

// components/Alert.tsx
import React from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'; // Importa los íconos

interface AlertProps {
    message: string;
    visible: boolean;
    onClose: () => void;
    type: 'confirmation' | 'prevention'; // Tipos de alerta
}

const Alert: React.FC<AlertProps> = ({ message, visible, onClose, type }) => {
    if (!visible) return null;

    const getAlertStyles = () => {
        switch (type) {
            case 'confirmation':
                return {
                    backgroundColor: '#d1e7dd',
                    borderColor: '#0f5132',
                    icon: <FaCheckCircle className="text-2xl mr-2" style={{ color: '#0f5132' }} />, // Ícono para confirmación
                };
            case 'prevention':
                return {
                    backgroundColor: '#f8d7da',
                    borderColor: '#842029',
                    icon: <FaExclamationTriangle className="text-2xl mr-2" style={{ color: '#842029' }} />, // Ícono para prevención
                };
            default:
                return {};
        }
    };

    const { backgroundColor, borderColor, icon } = getAlertStyles();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full"
                style={{ backgroundColor, borderColor, borderWidth: '2px', borderStyle: 'solid' }}
            >
                <div className="flex items-center mb-4">
                    {icon}
                    <h2 className="text-xl font-bold">{type === 'confirmation' ? 'Confirmación' : 'Prevención'}</h2>
                </div>
                <p className="text-gray-700 mb-4">{message}</p>
                <button 
                    onClick={onClose} 
                    className="w-full bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-500 transition"
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
};

export default Alert;

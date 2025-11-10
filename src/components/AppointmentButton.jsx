import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import AppointmentForm from './AppointmentForm';

const AppointmentButton = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${className}`}
      >
        <FaWhatsapp className="text-xl" />
        Book Appointment
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <AppointmentForm onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </>
  );
};

export default AppointmentButton;

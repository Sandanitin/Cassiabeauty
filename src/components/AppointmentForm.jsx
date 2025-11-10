import React, { useState } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaClock, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const services = [
  { id: 'threading', name: 'Threading', duration: '15 min' },
  { id: 'waxing', name: 'Waxing', duration: '30 min' },
  { id: 'facial', name: 'Facial', duration: '60 min' },
  { id: 'manicure', name: 'Manicure', duration: '45 min' },
  { id: 'pedicure', name: 'Pedicure', duration: '45 min' },
  { id: 'haircut', name: 'Haircut', duration: '30 min' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
];

const AppointmentForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceName = services.find(s => s.id === selectedService)?.name || selectedService;
    const message = `New Appointment Request:%0A%0A` +
                   `Name: ${name}%0A` +
                   `Phone: ${phone}%0A` +
                   `Service: ${serviceName}%0A` +
                   `Date: ${selectedDate}%0A` +
                   `Time: ${selectedTime}`;
    
    window.open(`https://wa.me/447587352958?text=${message}`, '_blank');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Select a Service</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    setSelectedService(service.id);
                    handleNext();
                  }}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="font-medium">{service.name}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Select Date & Time</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 border rounded-md text-sm ${
                        selectedTime === time
                          ? 'bg-red-500 text-white border-red-500'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <FaArrowLeft /> Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!selectedDate || !selectedTime}
                  className="px-4 py-2 bg-red-500 text-white rounded-md disabled:bg-gray-300 flex items-center gap-2"
                >
                  Next <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Your Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Appointment Summary</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Service:</span> {services.find(s => s.id === selectedService)?.name}</p>
                  <p><span className="font-medium">Date:</span> {selectedDate}</p>
                  <p><span className="font-medium">Time:</span> {selectedTime}</p>
                </div>
              </div>
              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <FaArrowLeft /> Back
                </button>
                <button
                  type="submit"
                  disabled={!name || !phone}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-300 flex items-center gap-2"
                >
                  <FaWhatsapp /> Send via WhatsApp
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Book Appointment</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      
      <div className="flex justify-between mb-6">
        {[1, 2, 3].map((stepNum) => (
          <div key={stepNum} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === stepNum
                  ? 'bg-red-500 text-white'
                  : step > stepNum
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {stepNum}
            </div>
            <span className="text-xs mt-1">
              {stepNum === 1 ? 'Service' : stepNum === 2 ? 'Time' : 'Details'}
            </span>
          </div>
        ))}
        <div className="absolute top-20 left-0 right-0 h-0.5 bg-gray-200 -z-10">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
};

export default AppointmentForm;

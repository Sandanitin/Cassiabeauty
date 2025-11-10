import React, { useState } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaTimes } from 'react-icons/fa';

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

const FloatingWhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    service: '',
    serviceName: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setSelectedService(service);
      setFormData(prev => ({
        ...prev,
        service: service.id,
        serviceName: service.name
      }));
      setStep(2);
    }
  };

  const handleDateSelect = (date) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (time) => {
    setFormData(prev => ({ ...prev, time, date: prev.date || new Date().toISOString().split('T')[0] }));
  };
  
  // Handle time button click
  const handleTimeButtonClick = (time) => {
    handleTimeSelect(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Debug log to check form data
    console.log('Form Data:', formData);
    console.log('Selected Service:', selectedService);
    
    // Get the service name from the selected service or fallback to form data
    const serviceName = selectedService?.name || formData.serviceName || 'Not specified';
    const serviceDuration = selectedService?.duration || 'N/A';
    
    // Format the message with all appointment details
    const message = `*NEW APPOINTMENT REQUEST*%0A%0A` +
                   `*Name:* ${formData.name || 'Not provided'}%0A` +
                   `*Phone:* ${formData.phone || 'Not provided'}%0A` +
                   `*Service:* ${serviceName}%0A` +
                   `*Date:* ${formData.date || 'Not selected'}%0A` +
                   `*Time:* ${formData.time || 'Not selected'}%0A` +
                   `*Duration:* ${serviceDuration}%0A%0A` +
                   `*Appointment Details:*%0A` +
                   `- Service: ${serviceName}%0A` +
                   `- Duration: ${serviceDuration}%0A` +
                   `- Date: ${formData.date || 'Not selected'} at ${formData.time || 'Not selected'}`;
    
    window.open(`https://wa.me/447587352958?text=${message}`, '_blank');
    setShowAppointmentForm(false);
    setIsExpanded(false);
    setStep(1);
    setFormData({
      service: '',
      serviceName: '',
      date: '',
      time: '',
      name: '',
      phone: ''
    });
    setSelectedService(null);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Select a Service</h3>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceSelect(service.id)}
                  className="p-2 border rounded-md text-sm hover:bg-gray-50 text-left"
                >
                  <div className="font-medium">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.duration}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back
              </button>
              <h3 className="font-semibold text-gray-800">Select Date & Time</h3>
              <div className="w-6"></div> {/* For alignment */}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-sm"
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
                    onClick={() => handleTimeButtonClick(time)}
                    className={`p-2 text-xs border rounded-md ${
                      formData.time === time
                        ? 'bg-green-500 text-white border-green-500'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <input
                type="hidden"
                name="time"
                value={formData.time || ''}
                onChange={handleInputChange}
              />
            </div>
            
            <button
              onClick={() => {
                if (!formData.date) {
                  setFormData(prev => ({ ...prev, date: new Date().toISOString().split('T')[0] }));
                }
                setStep(3);
              }}
              disabled={!formData.time}
              className="w-full mt-4 py-2 bg-green-500 text-white rounded-md disabled:bg-gray-300 text-sm"
            >
              {!formData.date ? 'Continue with today' : 'Continue'}
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back
              </button>
              <h3 className="font-semibold text-gray-800">Your Details</h3>
              <div className="w-6"></div> {/* For alignment */}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Your full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Your phone number"
                required
              />
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <h4 className="font-medium text-sm mb-1">Appointment Summary</h4>
              <div className="text-xs space-y-1 text-gray-600">
                <p><span className="font-medium">Service:</span> {formData.serviceName || 'Not selected'}</p>
                <p><span className="font-medium">Date:</span> {formData.date}</p>
                <p><span className="font-medium">Time:</span> {formData.time}</p>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!formData.name || !formData.phone}
              className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-300 text-sm flex items-center justify-center gap-2"
            >
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {isExpanded && (
        <div className="bg-white rounded-lg shadow-xl p-4 w-72 max-h-[80vh] overflow-y-auto">
          {showAppointmentForm ? (
            <form onSubmit={handleSubmit}>
              {renderStep()}
            </form>
          ) : (
            <>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800">How can we help you?</h3>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => setShowAppointmentForm(true)}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                >
                  <FaCalendarAlt /> Book Appointment
                </button>
                
                <a
                  href="https://wa.me/447587352958?text=Hello!%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm"
                >
                  <FaWhatsapp className="text-green-500" /> Chat with Us
                </a>
              </div>
            </>
          )}
        </div>
      )}
      
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
          if (isExpanded) {
            setShowAppointmentForm(false);
            setStep(1);
          }
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isExpanded ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
        aria-label="Contact options"
      >
        {isExpanded ? <FaTimes size={24} /> : <FaWhatsapp size={28} />}
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;

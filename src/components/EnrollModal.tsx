import React, { useState } from 'react';
import { X, CheckCircle2, User, Phone, Mail, Calendar, Award, ShieldCheck, ChevronRight, ArrowLeft } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, defaultProgram = 'FOUNDATION PROGRAM' }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    email: '',
    parentName: '',
    program: defaultProgram,
    role: 'Batsman',
    batchTime: 'Evening Batch (Mon to Fri, 5:00 PM - 7:00 PM)',
    experienceLevel: 'Beginner / First Time',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'VCA-' + Math.floor(100000 + Math.random() * 900000);
    setEnrollmentId(randomId);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn" onClick={resetAndClose}>
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8 max-h-[90vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#0B1B2D] px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Vertex Cricket Academy"
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <div>
              <h3 className="font-display text-xl tracking-wider uppercase font-extrabold">Academy Enrollment</h3>
              <p className="text-xs font-inter text-slate-400 font-normal">Vertex Cricket Academy • Admissions 2026</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-90 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6 flex-1 overflow-y-auto">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                Enrollment Request Received
              </span>
              <h2 className="text-2xl font-extrabold font-display tracking-tight text-[#0B1B2D]">WELCOME TO VERTEX ACADEMY!</h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you <span className="font-semibold text-slate-800">{formData.fullName}</span>! Your enrollment application has been logged under ID <span className="font-mono font-bold text-[#DC2626]">{enrollmentId}</span>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-200 text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Program Selected:</span>
                <span className="font-bold text-[#0B1B2D]">{formData.program}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Preferred Batch:</span>
                <span className="font-semibold text-slate-800">{formData.batchTime}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Primary Contact:</span>
                <span className="font-semibold text-slate-800">{formData.phone}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Free Assessment Slot:</span>
                <span className="font-semibold text-emerald-600">Tomorrow at 7:00 AM</span>
              </div>
            </div>

            <div className="p-4 bg-red-50 text-red-800 rounded-xl text-xs text-left border border-red-100">
              <p className="font-semibold mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#DC2626]" /> Next Steps:
              </p>
              Our head admissions coach will reach out to <strong>{formData.phone}</strong> within 2 hours to confirm your complimentary pitch assessment & trial uniform size.
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-3 bg-[#0B1B2D] text-white rounded-xl font-display font-bold hover:bg-slate-800 transition-all text-sm uppercase tracking-wider shadow-md"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-y-auto">
            {/* Step indicators */}
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#DC2626]' : 'text-slate-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-[#DC2626] text-white' : 'bg-slate-200 text-slate-500'}`}>1</span>
                <span>Personal Details</span>
              </div>
              <div className="w-8 h-[2px] bg-slate-300"></div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#DC2626]' : 'text-slate-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-[#DC2626] text-white' : 'bg-slate-200 text-slate-500'}`}>2</span>
                <span>Program & Schedule</span>
              </div>
              <div className="w-8 h-[2px] bg-slate-300"></div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#DC2626]' : 'text-slate-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-[#DC2626] text-white' : 'bg-slate-200 text-slate-500'}`}>3</span>
                <span>Confirmation</span>
              </div>
            </div>

            {/* Form body */}
            <div className="p-6 space-y-4 flex-1">
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-display font-bold text-lg text-[#0B1B2D] border-b pb-2 uppercase tracking-wide flex items-center gap-2">
                    <User className="w-5 h-5 text-[#DC2626]" /> Player & Contact Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name of Student *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Age of Player *</label>
                      <input
                        type="number"
                        required
                        min="5"
                        max="50"
                        placeholder="e.g. 14"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {Number(formData.age) > 0 && Number(formData.age) < 18 && (
                    <div className="animate-fadeIn bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Parent / Guardian Full Name"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>
                  )}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-display font-bold text-lg text-[#0B1B2D] border-b pb-2 uppercase tracking-wide flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#DC2626]" /> Program & Training Preferences
                  </h4>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Select Program *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { title: 'FOUNDATION PROGRAM', age: 'Ages 6-12', desc: 'Basics & Fun' },
                        { title: 'DEVELOPMENT PROGRAM', age: 'Ages 12-16', desc: 'Skill Enhancement' },
                        { title: 'HIGH PERFORMANCE PROGRAM', age: 'Ages 15+', desc: 'Pro Competition' },
                      ].map((item) => (
                        <div
                          key={item.title}
                          onClick={() => setFormData({ ...formData, program: item.title })}
                          className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.program === item.title
                            ? 'border-[#DC2626] bg-red-50/50 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300'
                            }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs text-[#0B1B2D]">{item.title}</span>
                            <span className="text-[10px] bg-slate-200 text-slate-700 font-semibold px-1.5 py-0.5 rounded">{item.age}</span>
                          </div>
                          <p className="text-[11px] text-slate-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Batch Timing *</label>
                    <select
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] bg-white"
                      value={formData.batchTime}
                      onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                    >
                      <option>Evening Batch (Mon to Fri, 5:00 PM - 7:00 PM)</option>
                      <option>Weekend Intensive (Sat & Sun 7:00 AM - 10:00 AM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Skill Specialty</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['Batsman', 'Fast Bowler', 'Spin Bowler', 'Wicket Keeper'].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setFormData({ ...formData, role })}
                          className={`py-2 px-1 text-xs font-semibold rounded-lg border text-center transition-all ${formData.role === role
                            ? 'bg-[#0B1B2D] text-white border-[#0B1B2D]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-display font-bold text-lg text-[#0B1B2D] border-b pb-2 uppercase tracking-wide flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#DC2626]" /> Summary & Additional Notes
                  </h4>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-slate-500 block">Applicant:</span>
                        <span className="font-semibold text-slate-900">{formData.fullName || 'Not provided'} ({formData.age} yrs)</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Phone:</span>
                        <span className="font-semibold text-slate-900">{formData.phone || 'Not provided'}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Selected Program:</span>
                        <span className="font-bold text-[#DC2626]">{formData.program}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Role Specialization:</span>
                        <span className="font-semibold text-slate-900">{formData.role}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-slate-500 block">Batch Timing:</span>
                        <span className="font-semibold text-slate-900">{formData.batchTime}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Special Requirements / Health Notes / Goals (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g., Left handed batsman, working on outswing bowling, previous school team experience..."
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-500">
                    <input type="checkbox" required id="terms" className="mt-0.5 rounded text-[#DC2626] focus:ring-[#DC2626]" />
                    <label htmlFor="terms">
                      I agree to the Academy rules & regulations, code of conduct, and safety guidelines.
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (step === 1 && (!formData.fullName || !formData.phone || !formData.email)) {
                      alert('Please fill in your name, phone number, and email.');
                      return;
                    }
                    setStep(step + 1);
                  }}
                  className="px-6 py-2.5 bg-[#DC2626] hover:bg-red-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#DC2626] hover:bg-red-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg hover:shadow-red-500/20 transition-all"
                >
                  Confirm & Submit Enrollment
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

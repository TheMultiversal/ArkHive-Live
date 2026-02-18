"use client";

import { useState } from "react";
import { Send, AlertTriangle, FileText, Lock, CheckCircle } from "lucide-react";

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    description: "",
    entities: "",
    sources: "",
    contact: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to a backend
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="border-2 border-blood-800/60 bg-black/60 p-12">
            <div className="w-16 h-16 border-2 border-blood-700 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-blood-600" />
            </div>
            <h1 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">Information Received</h1>
            <p className="text-zinc-400 mb-6">
              Your submission has been logged. It will be reviewed, researched, and if verified, 
              all connected entities will be documented and exposed.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 border-2 border-zinc-700 bg-transparent text-zinc-400 hover:border-blood-700 hover:text-blood-600 transition-colors uppercase tracking-wider font-bold"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Crystal Clear */}
        <div className="py-12">
          <div className="border-2 border-blood-800/60 bg-black/60 p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-blood-700 bg-blood-950/30 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-blood-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-4">
              SUBMIT INFORMATION
            </h1>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Help build the archive. Submit evidence of government crimes, corporate malfeasance, 
              or institutional cover-ups. Every leak matters.
            </p>
          </div>
        </div>

        {/* Security Notice - Sharp */}
        <div className="border-l-4 border-blood-700 bg-black/60 border border-zinc-800 p-6 mb-8">
          <div className="flex items-start gap-4">
            <Lock className="w-6 h-6 text-blood-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Submission Guidelines</h3>
              <ul className="text-zinc-500 text-sm space-y-2">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blood-700" /> All submissions are reviewed for research and verification</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blood-700" /> Provide as much detail as possible including dates, names, and sources</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blood-700" /> Contact information is optional but helps with follow-up questions</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blood-700" /> Each submission will be researched for all connected entities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form - Sharp */}
        <form onSubmit={handleSubmit} className="border border-zinc-800 bg-black/60 p-8">
          <div className="space-y-6">
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                Subject / Title *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Brief title for this information"
                className="w-full px-4 py-3 bg-black border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border-2 border-zinc-800 text-white focus:outline-none focus:border-blood-700 transition-colors"
              >
                <option value="">Select a category</option>
                <option value="public-health">Public Health Crimes</option>
                <option value="environment">Environmental Poisoning</option>
                <option value="surveillance">Surveillance State</option>
                <option value="corruption">Government Corruption</option>
                <option value="corporate">Corporate Murder</option>
                <option value="civil-liberties">Civil Liberty Violations</option>
                <option value="medical">Medical Experimentation</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                Detailed Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={8}
                placeholder="Provide as much detail as possible. Include dates, locations, specific events, and any other relevant information..."
                className="w-full px-4 py-3 bg-black border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors resize-none"
              />
            </div>

            {/* Entities */}
            <div>
              <label htmlFor="entities" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                Known Entities Involved
              </label>
              <textarea
                id="entities"
                name="entities"
                value={formData.entities}
                onChange={handleChange}
                rows={4}
                placeholder="List any agencies, companies, or individuals you know are involved (one per line)..."
                className="w-full px-4 py-3 bg-black border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors resize-none"
              />
              <p className="text-xs text-zinc-600 mt-2">We will research and identify additional connected entities</p>
            </div>

            {/* Sources */}
            <div>
              <label htmlFor="sources" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                Sources / Evidence
              </label>
              <textarea
                id="sources"
                name="sources"
                value={formData.sources}
                onChange={handleChange}
                rows={4}
                placeholder="Links to documents, news articles, or other sources that support this information..."
                className="w-full px-4 py-3 bg-black border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors resize-none"
              />
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                Contact Information (Optional)
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Email or other way to reach you for follow-up questions"
                className="w-full px-4 py-3 bg-black border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors"
              />
              <p className="text-xs text-zinc-600 mt-2">Only used for clarifying questions about your submission</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 border-2 border-blood-700 bg-blood-950/30 text-blood-600 font-bold uppercase tracking-wider hover:bg-blood-700 hover:text-white transition-all"
            >
              <Send className="w-5 h-5" />
              Submit Information
            </button>
          </div>
        </form>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="text-zinc-600 text-sm flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            All submissions are reviewed and researched for documentation
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import { Send, AlertTriangle, FileText, Lock, CheckCircle, Upload, X, Paperclip } from "lucide-react";
import ContributorGate from '@/components/auth/ContributorGate';

function SubmitPageContent() {
 const [formData, setFormData] = useState({
 subject:"",
 category:"",
 description:"",
 entities:"",
 sources:"",
 contact:"",
 });
 const [files, setFiles] = useState<File[]>([]);
 const [isSubmitted, setIsSubmitted] = useState(false);
 const fileInputRef = useRef<HTMLInputElement>(null);

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
 <div className="border-2 border-zinc-800/60 bg-[#080808] p-12">
 <div className="w-16 h-16 border-2 border-zinc-700 flex items-center justify-center mx-auto mb-6">
 <CheckCircle className="w-8 h-8 text-zinc-500"/>
 </div>
 <h1 className="text-2xl font-black glass-text mb-4 uppercase tracking-wider">Information Received</h1>
 <p className="text-zinc-400 mb-6">
 Your submission has been logged. It will be reviewed, researched, and if verified, 
 all connected entities will be documented and exposed.
 </p>
 <button
 onClick={() => setIsSubmitted(false)}
 className="px-6 py-3 border-2 border-[rgba(255,255,255,0.18)] bg-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-500 transition-colors uppercase tracking-wider font-bold"
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
 {/* Header, Crystal Clear */}
 <div className="py-12">
 <div className="border-2 border-zinc-800/60 bg-[#080808] p-8 text-center">
 <div className="w-16 h-16 mx-auto mb-6 border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center">
 <AlertTriangle className="w-8 h-8 text-zinc-500"/>
 </div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-4">
 SUBMIT INFORMATION
 </h1>
 <p className="text-zinc-400 max-w-xl mx-auto">
 Help build the archive. Submit evidence of government crimes, corporate malfeasance, 
 or institutional cover-ups. Every leak matters.
 </p>
 </div>
 </div>

 {/* Security Notice - Sharp */}
 <div className="border-l-4 border-zinc-700 bg-[#080808] border border-[rgba(255,255,255,0.15)] p-6 mb-8">
 <div className="flex items-start gap-4">
 <Lock className="w-6 h-6 text-zinc-500 flex-shrink-0 mt-1"/>
 <div>
 <h3 className="text-lg font-bold glass-text mb-2 uppercase tracking-wider">Submission Guidelines</h3>
 <ul className="text-zinc-500 text-sm space-y-2">
 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-700"/> All submissions are reviewed for research and verification</li>
 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-700"/> Provide as much detail as possible including dates, names, and sources</li>
 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-700"/> Contact information is optional but helps with follow-up questions</li>
 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-zinc-700"/> Each submission will be researched for all connected entities</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Form, Sharp */}
 <form onSubmit={handleSubmit} className="border border-[rgba(255,255,255,0.15)] bg-[#080808] p-8">
 <div className="space-y-6">
 {/* Subject */}
 <div>
 <label htmlFor="subject"className="block text-sm font-bold glass-text mb-2 uppercase tracking-wider">
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
 className="w-full px-4 py-3 bg-black border-2 border-[rgba(255,255,255,0.15)] text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
 />
 </div>

 {/* Category */}
 <div>
 <label htmlFor="category"className="block text-sm font-bold glass-text mb-2 uppercase tracking-wider">
 Category *
 </label>
 <select
 id="category"
 name="category"
 value={formData.category}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 bg-black border-2 border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-zinc-700 transition-colors"
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
 <label htmlFor="description"className="block text-sm font-bold glass-text mb-2 uppercase tracking-wider">
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
 className="w-full px-4 py-3 bg-black border-2 border-[rgba(255,255,255,0.15)] text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors resize-none"
 />
 </div>

 {/* Entities */}
 <div>
 <label htmlFor="entities"className="block text-sm font-bold glass-text mb-2 uppercase tracking-wider">
 Known Entities Involved
 </label>
 <textarea
 id="entities"
 name="entities"
 value={formData.entities}
 onChange={handleChange}
 rows={4}
 placeholder="List any agencies, companies, or individuals you know are involved (one per line)..."
 className="w-full px-4 py-3 bg-black border-2 border-[rgba(255,255,255,0.15)] text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors resize-none"
 />
 <p className="text-xs text-zinc-600 mt-2">We will research and identify additional connected entities</p>
 </div>

 {/* Sources */}
 <div>
 <label htmlFor="sources"className="block text-sm font-bold glass-text mb-2 uppercase tracking-wider">
 Sources / Evidence
 </label>
 <textarea
 id="sources"
 name="sources"
 value={formData.sources}
 onChange={handleChange}
 rows={4}
 placeholder="Links to documents, news articles, or other sources that support this information..."
 className="w-full px-4 py-3 bg-black border-2 border-[rgba(255,255,255,0.15)] text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors resize-none"
 />
 </div>

 {/* Contact */}
 <div>
 <label htmlFor="contact"className="block text-sm font-bold glass-text mb-2 uppercase tracking-wider">
 Contact Information (Optional)
 </label>
 <input
 type="text"
 id="contact"
 name="contact"
 value={formData.contact}
 onChange={handleChange}
 placeholder="Email or other way to reach you for follow-up questions"
 className="w-full px-4 py-3 bg-black border-2 border-[rgba(255,255,255,0.15)] text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
 />
 <p className="text-xs text-zinc-600 mt-2">Only used for clarifying questions about your submission</p>
 </div>

 {/* File Upload */}
 <div>
 <label className="block text-sm font-bold glass-text mb-2 uppercase tracking-wider">
 Upload Documents / Evidence
 </label>
 <div
 className="border-2 border-dashed border-[rgba(255,255,255,0.15)] bg-[#080808] p-8 text-center cursor-pointer hover:border-zinc-700 transition-colors"
 onClick={() => fileInputRef.current?.click()}
 onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-zinc-700'); }}
 onDragLeave={(e) => { e.currentTarget.classList.remove('border-zinc-700'); }}
 onDrop={(e) => {
 e.preventDefault();
 e.currentTarget.classList.remove('border-zinc-700');
 const droppedFiles = Array.from(e.dataTransfer.files);
 setFiles(prev => [...prev, ...droppedFiles]);
 }}
 >
 <Upload className="w-8 h-8 text-zinc-600 mx-auto mb-3"/>
 <p className="text-zinc-400 text-sm mb-1">Drop files here or click to browse</p>
 <p className="text-zinc-600 text-xs">PDF, DOC, DOCX, XLS, XLSX, TXT, JPG, PNG, ZIP - up to 50MB each</p>
 </div>
 <input
 ref={fileInputRef}
 type="file"
 multiple
 accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg,.gif,.zip,.mp3,.mp4,.wav"
 className="hidden"
 onChange={(e) => {
 const selected = Array.from(e.target.files || []);
 setFiles(prev => [...prev, ...selected]);
 e.target.value = '';
 }}
 />
 {files.length > 0 && (
 <div className="mt-3 space-y-2">
 {files.map((file, i) => (
 <div key={i} className="flex items-center justify-between p-3 border border-[rgba(255,255,255,0.15)] bg-black/40">
 <div className="flex items-center gap-3 min-w-0">
 <Paperclip className="w-4 h-4 text-zinc-500 flex-shrink-0"/>
 <div className="min-w-0">
 <p className="text-zinc-300 text-sm truncate">{file.name}</p>
 <p className="text-zinc-600 text-xs">{(file.size / 1024).toFixed(1)} KB</p>
 </div>
 </div>
 <button
 type="button"
 onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
 className="p-1 text-zinc-600 hover:text-zinc-500 transition-colors flex-shrink-0"
 >
 <X className="w-4 h-4"/>
 </button>
 </div>
 ))}
 </div>
 )}
 </div>

 {/* Submit Button */}
 <button
 type="submit"
 className="w-full flex items-center justify-center gap-2 px-8 py-4 border-2 border-zinc-700 bg-zinc-900 text-zinc-500 font-bold uppercase tracking-wider hover:bg-zinc-700 hover:text-white transition-all"
 >
 <Send className="w-5 h-5"/>
 Submit Information
 </button>
 </div>
 </form>

 {/* Info */}
 <div className="mt-8 text-center">
 <p className="text-zinc-600 text-sm flex items-center justify-center gap-2">
 <FileText className="w-4 h-4"/>
 All submissions are reviewed and researched for documentation
 </p>
 </div>
 </div>
 </div>
 );
}

export default function SubmitPage() {
 return (
 <ContributorGate action="submit intelligence">
 <SubmitPageContent />
 </ContributorGate>
 );
}

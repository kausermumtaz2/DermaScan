const { useState, useEffect } = React;
const Logo = () => (
    <div className="flex flex-col items-center">
        <img src="src/images/Logo.png" alt="DermaScan Logo" className="h-16 md:h-20 object-contain" />
    </div>
);

const Navbar = ({ currentPage, setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'contact', label: 'Contact Us' },
        { id: 'dictionary', label: 'Diseases Dictionary' }
    ];

    return (
        <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-brand-cream border-b border-brand-light relative z-50">
            <Logo />
            <div className="hidden md:flex space-x-8 text-sm font-medium text-brand-dark">
                {navLinks.map(link => (
                    <button
                        key={link.id}
                        onClick={() => setCurrentPage(link.id)}
                        className={`${currentPage === link.id ? 'border-b-2 border-brand-brown text-brand-brown pb-1' : 'hover:text-brand-brown transition-colors'}`}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-brand-brown focus:outline-none">
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-brand-cream border-b border-brand-light flex flex-col p-6 space-y-4 shadow-lg md:hidden">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => { setCurrentPage(link.id); setIsOpen(false); }}
                            className={`text-left font-medium ${currentPage === link.id ? 'text-brand-brown' : 'text-brand-dark hover:text-brand-brown'}`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

const HeroSection = () => (
    <section className="relative w-full h-[500px] hero-clip bg-brand-dark overflow-hidden">
        <img
            src="src/images/hero-image.jpg"
            alt="Woman touching face"
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A3424]/80 to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
                Know Your Skin Better with AI
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 font-light max-w-xl">
                DermaScan helps you identify skin conditions early. Upload a skin image and get instant insights, and dermatologist recommendations, all in one secure platform.
            </p>
            <div>
                <button className="bg-brand-light text-brand-brown px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors shadow-lg">
                    Learn More
                </button>
            </div>
        </div>
    </section>
);

const UploadSection = ({ onBrowseClick, isUploadEnabled }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            alert("File selected for analysis: " + e.target.files[0].name);
        }
    };

    return (
        <section className="py-20 px-8 md:px-20 flex flex-col items-center bg-brand-cream text-center">
            <h2 className="text-3xl text-brand-brown font-bold mb-2">Experience AI-Powered Skin Diseases Analysis</h2>
            <p className="text-brand-dark mb-10 max-w-2xl">
                Upload a sample effected area image to see how our AI detects abnormalities in real-time
            </p>

            <div className="w-full max-w-2xl p-10 bg-white rounded-lg dotted-border shadow-sm flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-md">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-1">Upload Skin Image</h3>
                <p className="text-sm text-gray-500 mb-6">Use a clear and bright photo</p>

                {!isUploadEnabled ? (
                    <button
                        onClick={onBrowseClick}
                        className="bg-brand-brown text-white px-10 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors shadow-md"
                    >
                        Browse Files
                    </button>
                ) : (
                    <div className="flex flex-col items-center">
                        <input
                            type="file"
                            id="skin-image-upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="skin-image-upload"
                            className="bg-brand-brown text-white px-10 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors shadow-md cursor-pointer inline-block"
                        >
                            Select Image to Upload
                        </label>
                        {selectedFile && (
                            <p className="mt-3 text-sm font-medium text-green-600">
                                {selectedFile.name} selected.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

const HowToUseSection = () => {
    const steps = [
        { icon: 'fa-user-plus', title: 'Step 1: Create an Account', desc: 'Sign up or log in securely to access DermaScan\'s skin analysis features.' },
        { icon: 'fa-mobile-screen-button', title: 'Step 2: Upload Skin Image', desc: 'Upload a clear image of the affected skin area for accurate analysis.' },
        { icon: 'fa-robot', title: 'Step 3: Get AI Analysis', desc: 'DermaScan analyzes the image using AI and shows the detected skin condition with details.' },
        { icon: 'fa-user-doctor', title: 'Step 4: Consult a Dermatologist', desc: 'View suggested dermatologists and book an appointment for professional diagnosis and treatment.' }
    ];

    return (
        <section className="py-20 px-8 md:px-20 bg-brand-light">
            <h2 className="text-3xl text-brand-brown font-bold mb-12">How to use DermaScan?</h2>

            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 space-y-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 bg-transparent border-2 border-brand-brown rounded-full flex items-center justify-center text-brand-brown text-xl">
                                <i className={`fa-solid ${step.icon}`}></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-brand-brown mb-1">{step.title}</h3>
                                <p className="text-sm text-brand-dark">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="src/images/how-to-use.png"
                        alt="Women talking"
                        className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                    />
                </div>
            </div>
        </section>
    );
};

const WhyUseSection = () => {
    const features = [
        { icon: 'fa-microchip', title: 'AI-Powered Detection', desc: 'Uses advanced deep learning to analyze skin images and identify possible skin conditions quickly and accurately.' },
        { icon: 'fa-user-doctor', title: 'Dermatologist Support', desc: 'Connects users with certified dermatologists and allows easy appointment booking for professional diagnosis and treatment.' },
        { icon: 'fa-clock', title: 'Early & Fast Diagnosis', desc: 'Helps detect skin issues at an early stage, reducing delays and improving chances of effective treatment.' },
        { icon: 'fa-lock', title: 'Secure & User-Friendly', desc: 'Ensures data privacy while offering a simple, easy-to-use interface accessible to everyone.' }
    ];

    return (
        <section className="py-20 px-8 md:px-20 bg-brand-cream text-center">
            <h2 className="text-3xl text-brand-brown font-bold mb-12">Why is DermaScan worth using?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feat, idx) => (
                    <div key={idx} className="bg-white border border-brand-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <i className={`fa-solid ${feat.icon} text-4xl text-brand-brown mb-4`}></i>
                        <h3 className="text-lg font-bold text-brand-dark mb-3">{feat.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const StatsSection = () => (
    <section className="relative py-24 px-8 md:px-20 stats-clip bg-brand-dark text-white overflow-hidden mt-8">
        <img
            src="src/images/stats-bg.jpg"
            alt="Skin texture background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-[#4A3424]/80"></div>

        <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Scan. Detect. Heal.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                <div>
                    <div className="text-5xl font-bold mb-2">90%</div>
                    <div className="text-sm text-white/80 uppercase tracking-wider">Accuracy Rate</div>
                </div>
                <div>
                    <div className="text-5xl font-bold mb-2">1min</div>
                    <div className="text-sm text-white/80 uppercase tracking-wider">Analysis Time</div>
                </div>
                <div>
                    <div className="text-5xl font-bold mb-2">20,000k</div>
                    <div className="text-sm text-white/80 uppercase tracking-wider">Images Trained</div>
                </div>
                <div>
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <div className="text-sm text-white/80 uppercase tracking-wider">Dermatologist</div>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-brand-light py-16 px-8 md:px-20 text-brand-dark">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="max-w-md">
                <Logo />
                <p className="mt-4 text-sm leading-relaxed mb-4">
                    Delivering expert care with AI precision and purpose. Your skin journey, guided with trust, tailored expertise, and long-lasting confidence.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="flex items-center gap-2"><i className="fa-solid fa-envelope text-brand-brown"></i> dermascan@gmail.com</span>
                    <span className="flex items-center gap-2"><i className="fa-solid fa-phone text-brand-brown"></i> 03332828369</span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex space-x-6 text-sm font-semibold">
                    <a href="#" className="hover:text-brand-brown transition-colors">Home</a>
                    <a href="#" className="hover:text-brand-brown transition-colors">About Us</a>
                    <a href="#" className="hover:text-brand-brown transition-colors">Contact Us</a>
                    <a href="#" className="hover:text-brand-brown transition-colors">Diseases Dictionary</a>
                </div>
                <div className="flex justify-end gap-4 text-brand-brown text-xl mt-4">
                    <a href="#" className="hover:text-brand-dark transition-colors"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="hover:text-brand-dark transition-colors"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="hover:text-brand-dark transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
            </div>
        </div>
    </footer>
);
const AuthModal = ({ isOpen, onClose, onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    // Blocked dummy/disposable email domains
    const blockedDomains = [
        'mailinator.com', 'guerrillamail.com', 'tempmail.com',
        'yopmail.com', 'throwaway.email', 'sharklasers.com',
        'trashmail.com', 'fakeinbox.com', 'maildrop.cc',
        'dispostable.com', 'spamgourmet.com', 'temp-mail.org'
    ];

    const validateEmail = (email) => {
        // Check format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address.';

        // Check blocked domains
        const domain = email.split('@')[1]?.toLowerCase();
        if (blockedDomains.includes(domain)) return 'Please use a real email address.';

        return null;
    };

    const validatePassword = (password) => {
        if (password.length < 8) return 'Password must be at least 8 characters.';
        if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.';
        if (!/[0-9]/.test(password)) return 'Password must contain at least one number.';
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validate email
        const emailError = validateEmail(email);
        if (emailError) { setError(emailError); return; }

        // Validate password
        const passwordError = validatePassword(password);
        if (passwordError) { setError(passwordError); return; }

        // Validate name on signup
        if (!isLogin && name.trim().length < 2) {
            setError('Please enter your full name.');
            return;
        }

        // All good
        onSuccess();
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 fade-in backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
                <div className="bg-brand-light p-6 text-center relative border-b border-brand-border">
                    <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-brand-brown text-xl">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <Logo />
                    <h2 className="text-2xl font-bold text-brand-brown mt-4">
                        {isLogin ? 'Welcome Back' : 'Create an Account'}
                    </h2>
                </div>
                <div className="p-8">
                    {error && (
                        <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
                            <i className="fa-solid fa-circle-exclamation mr-2"></i>{error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-brand-dark mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown"
                                    placeholder="Enter your Full Name"
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-brand-dark mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-brand-dark mb-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown"
                                placeholder="••••••••"
                            />
                            {!isLogin && (
                                <p className="text-xs text-gray-400 mt-1">Min 8 characters, 1 uppercase, 1 number</p>
                            )}
                        </div>
                        <button type="submit" className="w-full bg-brand-brown text-white py-3 rounded-md font-medium hover:bg-brand-dark transition-colors shadow-md">
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-600">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => { setIsLogin(!isLogin); setError(''); }}
                            className="text-brand-brown font-semibold hover:underline"
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ConsentModal = ({ isOpen, onClose, onAccept }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 fade-in backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                <div className="bg-brand-brown p-6 text-center relative">
                    <button onClick={onClose} className="absolute right-4 top-4 text-white/80 hover:text-white text-xl">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <h2 className="text-2xl font-bold text-white font-serif">Data Privacy & Consent</h2>
                </div>
                <div className="p-8 overflow-y-auto">
                    <div className="prose prose-sm text-brand-dark">
                        <p className="mb-4">
                            Before using DermaScan's AI analysis tool, please read and agree to our data handling practices. Your privacy is our top priority.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Image Processing:</strong> The image you upload will be analyzed by our AI model to detect potential skin conditions.</li>
                            <li><strong>Data Storage:</strong> Images are stored securely and encrypted. They may be used anonymously to further train and improve our AI accuracy.</li>
                            <li><strong>Medical Disclaimer:</strong> DermaScan provides informational insights, NOT a medical diagnosis. Always consult a certified dermatologist for medical advice.</li>
                            <li><strong>Privacy:</strong> We do not share your personal information or images with third-party advertisers.</li>
                        </ul>
                        <div className="bg-brand-light p-4 rounded-md border border-brand-border">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" required className="mt-1 w-4 h-4 text-brand-brown rounded focus:ring-brand-brown" id="consent-check" />
                                <span className="text-sm">I have read and understood the terms. I consent to the processing of my skin image for AI analysis.</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-8 flex gap-4">
                        <button onClick={onClose} className="flex-1 py-3 border border-brand-brown text-brand-brown rounded-md font-medium hover:bg-brand-light transition-colors">
                            Decline
                        </button>
                        <button
                            onClick={() => {
                                const isChecked = document.getElementById('consent-check').checked;
                                if (isChecked) onAccept();
                                else alert('Please check the box to provide consent.');
                            }}
                            className="flex-1 py-3 bg-brand-brown text-white rounded-md font-medium hover:bg-brand-dark transition-colors shadow-md"
                        >
                            Accept & Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- About Us Page Components ---
const AboutHeroSection = () => (
    <section className="relative w-full h-[400px] bg-brand-dark overflow-hidden flex items-center justify-center text-center">
        <img
            src="src/images/about-hero.jpg"
            alt="About DermaScan"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A3424]/90 to-transparent"></div>
        <div className="relative z-10 px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 font-serif">
                DermaScan, Your Personal Skin Analyzer
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light">
                Revolutionizing skin care with cutting-edge AI technology and personalized skin analysis.
            </p>
        </div>
    </section>
);

const MissionSection = () => (
    <section className="py-20 px-8 md:px-20 bg-white">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
                <div className="text-xs font-bold tracking-widest text-brand-brown mb-4 uppercase">[ Our Mission ]</div>
                <h2 className="text-3xl md:text-4xl text-brand-brown font-bold mb-6 font-serif leading-snug">Skin Disease Classification Through AI Assistance</h2>
                <div className="space-y-4 text-brand-dark leading-relaxed text-sm">
                    <p>We believe early detection saves lives. Our mission is to democratize access to world-class diagnostic AI, making it affordable and accessible to healthcare providers globally.</p>
                    <p>By combining cutting-edge machine learning with medical expertise, we're creating a future where every patient has access to accurate, timely diagnostics regardless of location or resources.</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="bg-[#F9F4EF] rounded-2xl p-8 w-full max-w-md">
                    <img src="src/images/mission-vision.jpg" alt="Mission illustration" className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    </section>
);

const VisionSection = () => (
    <section className="py-20 px-8 md:px-20 bg-white">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
                <div className="text-xs font-bold tracking-widest text-brand-brown mb-4 uppercase">[ Our Vision ]</div>
                <h2 className="text-3xl md:text-4xl text-brand-brown font-bold mb-6 font-serif leading-snug">Skin Disease Classification Through AI Assistance</h2>
                <div className="space-y-4 text-brand-dark leading-relaxed text-sm">
                    <p>We believe early detection saves lives. Our mission is to democratize access to world-class diagnostic AI, making it affordable and accessible to healthcare providers globally.</p>
                    <p>By combining cutting-edge machine learning with medical expertise, we're creating a future where every patient has access to accurate, timely diagnostics regardless of location or resources.</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="bg-[#F9F4EF] rounded-2xl p-8 w-full max-w-md transform -scale-x-100">
                    <img src="src/images/mission-vision.jpg" alt="Vision illustration" className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    </section>
);

const CoreValuesSection = () => {
    const values = [
        { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Continuously pushing boundaries to develop intelligent and original solutions that improve patient care.' },
        { icon: 'fa-handshake', title: 'Collaboration', desc: 'Working closely with healthcare professionals to ensure our tools are impactful and easy to use.' },
        { icon: 'fa-trophy', title: 'Excellence', desc: 'Committed to achieving the highest standards of accuracy, quality, and patient outcomes in everything we do.' },
        { icon: 'fa-pen-nib', title: 'Integrity', desc: 'Upholding strict ethical standards, data privacy, and transparency in our technology.' },
        { icon: 'fa-hand-holding-heart', title: 'Compassion', desc: 'Putting people first, designing solutions with empathy to improve lives globally.' },
        { icon: 'fa-rocket', title: 'Impact', desc: 'Making a difference by expanding access to critical diagnostics globally.' }
    ];

    return (
        <section className="py-24 px-8 md:px-20 bg-brand-light text-center">
            <div className="mb-16">
                <div className="inline-block border-b border-brand-brown px-8 pb-2 mb-4 text-xs font-bold tracking-widest text-brand-brown uppercase">OUR VALUES</div>
                <h2 className="text-3xl text-brand-brown font-bold mb-4 font-serif">Our Core Values</h2>
                <p className="text-brand-dark text-sm max-w-2xl mx-auto">The principles that guide everything we do and shape our commitment to advance healthcare.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {values.map((val, idx) => (
                    <div key={idx} className="bg-transparent border border-[#E6D4C3] p-8 rounded-xl flex flex-col items-center hover:bg-white hover:shadow-md transition-all">
                        <i className={`fa-solid ${val.icon} text-3xl text-brand-brown mb-4`}></i>
                        <h3 className="text-lg font-bold text-brand-brown mb-3">{val.title}</h3>
                        <p className="text-xs text-brand-dark leading-relaxed max-w-[250px]">{val.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
// --- Contact Us Page Components ---
const ContactHeroSection = () => (
    <section className="relative w-full h-[400px] bg-brand-dark overflow-hidden flex items-center justify-center text-center">
        <img
            src="src/images/stats-bg.jpg"
            alt="Contact DermaScan"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A3424]/90 to-transparent"></div>
        <div className="relative z-10 px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 font-serif">
                Let's Connect To Transform Healthcare
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light">
                Reach out to our team for partnership inquiries, technical support, or to learn how our AI diagnostics can benefit your healthcare institution.
            </p>
        </div>
    </section>
);

const ContactFormSection = () => (
    <section className="py-24 px-8 md:px-20 bg-brand-light">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-3/5">
                <h2 className="text-3xl text-brand-brown font-bold mb-8 font-serif">Get In Touch</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-bold text-brand-dark mb-2">Full Name</label>
                        <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-transparent border border-brand-brown/40 rounded-md focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown placeholder-brand-dark/50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-brand-dark mb-2">Email</label>
                        <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-transparent border border-brand-brown/40 rounded-md focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown placeholder-brand-dark/50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-brand-dark mb-2">Subject</label>
                        <input type="text" placeholder="Select a Subject" className="w-full px-4 py-3 bg-transparent border border-brand-brown/40 rounded-md focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown placeholder-brand-dark/50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-brand-dark mb-2">Message</label>
                        <textarea placeholder="Message" rows="5" className="w-full px-4 py-3 bg-transparent border border-brand-brown/40 rounded-md focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown resize-none placeholder-brand-dark/50"></textarea>
                    </div>
                    <button type="submit" className="bg-brand-brown text-white px-8 py-3 rounded-md font-bold hover:bg-brand-dark transition-colors shadow-md flex items-center gap-3">
                        Send Message <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
            </div>
            <div className="w-full md:w-2/5 flex flex-col gap-6 pt-2">
                <div className="bg-transparent border border-brand-brown/40 p-6 rounded-md flex items-center gap-6 hover:bg-white transition-colors">
                    <div className="text-3xl text-brand-brown"><i className="fa-regular fa-envelope-open"></i></div>
                    <div>
                        <h3 className="font-bold text-brand-brown mb-1">General Inquiries</h3>
                        <p className="text-sm text-brand-dark">dermascan91@gmail.com</p>
                    </div>
                </div>
                <div className="bg-transparent border border-brand-brown/40 p-6 rounded-md flex items-center gap-6 hover:bg-white transition-colors">
                    <div className="text-3xl text-brand-brown"><i className="fa-solid fa-headset"></i></div>
                    <div>
                        <h3 className="font-bold text-brand-brown mb-1">Technical Support</h3>
                        <p className="text-sm text-brand-dark">dermascan91@gmail.com</p>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-bold text-brand-brown mb-4 font-serif">Business Hours</h3>
                    <ul className="space-y-3 text-sm text-brand-dark">
                        <li>Monday - Friday 9:00 AM - 6:00 PM</li>
                        <li>Saturday 10:00 AM - 4:00 PM</li>
                        <li>Sunday Emergency Only</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const FAQItem = ({ question, answer, isOpenByDefault }) => {
    const [isOpen, setIsOpen] = useState(isOpenByDefault || false);
    return (
        <div className="border border-brand-brown/30 rounded-md overflow-hidden mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-brand-light/30 transition-colors text-left"
            >
                <span className="font-bold text-brand-dark text-sm">{question}</span>
                <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'} text-brand-brown text-sm transition-transform`}></i>
            </button>
            {isOpen && (
                <div className="px-6 pb-5 pt-2 bg-white border-t border-gray-100">
                    <p className="text-sm text-brand-dark leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        { q: "How quickly can I get a response?", a: "We typically respond within 2 hours during business hours (9 AM - 6 PM PST, Monday-Friday). For urgent medical institution support, we offer 24/7 emergency response.", open: true },
        { q: "Is your system HIPAA compliant?", a: "Yes, our system is fully HIPAA compliant and adheres to the strictest data security and privacy regulations for medical data." },
        { q: "How do I integrate your AI with my existing systems?", a: "We provide comprehensive API documentation and dedicated technical support to ensure seamless integration with your existing EMR/EHR systems." },
        { q: "What training and support do you provide?", a: "We offer complete onboarding, comprehensive documentation, and 24/7 technical support for our enterprise partners." },
        { q: "What makes your AI different from others?", a: "Our AI is trained on one of the largest and most diverse clinical datasets available, ensuring high accuracy across all skin types." }
    ];

    return (
        <section className="py-24 px-8 md:px-20 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="border border-brand-brown px-6 py-1 rounded-full mb-6 font-bold text-sm text-brand-brown">FAQ</div>
                <h2 className="text-3xl text-brand-brown font-bold mb-12 font-serif text-center">Frequently Asked Questions</h2>

                <div className="w-full">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.q} answer={faq.a} isOpenByDefault={faq.open} />
                    ))}
                </div>
            </div>
        </section>
    );
};
// --- Diseases Dictionary Page Components ---
const DictionaryHeroSection = () => (
    <section className="relative w-full h-[400px] bg-brand-dark overflow-hidden flex items-center justify-center text-center">
        <img
            src="src/images/about-hero.jpg"
            alt="Diseases Dictionary"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A3424]/90 to-transparent"></div>
        <div className="relative z-10 px-8 max-w-4xl">
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-6 font-serif leading-tight">
                Understand Common Skin Conditions, Their Causes, and How to Prevent Them
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light">
                Explore detailed information about common skin diseases detected by DermaScan, including their causes and prevention measures to help you take timely action.
            </p>
        </div>
    </section>
);

const DiseaseListSection = () => {
    const diseases = [
        {
            name: "Acne",
            causes: "Acne is caused by clogged hair follicles, overproduction of sebum, bacterial buildup, and dead skin cells. Stress, unhealthy diet, and improper skincare can worsen the condition.",
            precautions: "Maintain proper facial hygiene, avoid touching the face frequently, and use non-comedogenic products. A healthy and balanced diet, Consult a dermatologist for persistent cases.",
            img: "src/images/acne.png",
            reverse: false
        },
        {
            name: "Melanoma Skin Cancer",
            causes: "Melanoma develops due to an abnormal growth of pigment-producing cells, often triggered by intense UV exposure. Genetics and fair skin increase the risk.",
            precautions: "Avoid tanning beds, use sun protection daily, and monitor moles for changes in size, shape, or color. Early medical consultation is essential.",
            img: "src/images/mission-vision.jpg",
            reverse: true
        },
        {
            name: "Fungal Infection",
            causes: "Fungal infection occurs due to overgrowth of fungi caused by sweat, humidity, or poor hygiene.",
            precautions: "Maintain good hygiene, dry skin completely after a bath, wear breathable clothes, and manage stress. Seek medical advice for prolonged or recurrent infections.",
            img: "src/images/fungalinfection.png",
            reverse: false
        },
        {
            name: "Scabies",
            causes: "Scabies is caused by microscopic mites that burrow into the skin, leading to intense itching. It spreads through close physical contact.",
            precautions: "Avoid direct contact with infected individuals, wash clothes and bedding in hot water, and seek immediate medical treatment for symptoms.",
            img: "src/images/scabies.png",
            reverse: true
        },
        {
            name: "Eczema",
            causes: "Eczema is caused by a combination of genetics and environmental factors, including allergens, irritants, stress, and dry skin. It weakens the skin barrier.",
            precautions: "Keep skin moisturized, avoid harsh soaps, reduce exposure to allergens, and follow dermatologist-recommended skincare routines.",
            img: "src/images/eczema.png",
            reverse: false
        },
        {
            name: "Dermatofibroma",
            causes: "Dermatofibroma is a benign (non-cancerous) skin growth that can appear anywhere on the body, but usually on the lower legs, arms, or upper back. The exact cause is unknown, but it's thought to be a reaction to a minor injury, such as a bug bite, splinter, or shaving cut. It occurs more in adults, especially women.",
            precautions: "Dermatofibroma is a benign (non-cancerous) skin growth. The exact cause is unknown, but it's thought to be a reaction to a minor injury, such as a bug bite, splinter, or shaving cut. It occurs more in adults, especially women.",
            img: "src/images/dermatofibroma.png",
            reverse: true
        }
    ];

    return (
        <section className="py-24 px-8 md:px-20 bg-white">
            <div className="max-w-5xl mx-auto space-y-24">
                {diseases.map((disease, idx) => (
                    <div key={idx} className={`flex flex-col gap-12 items-center ${disease.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-brand-brown mb-6 font-serif">{disease.name}</h2>
                            <div className="mb-6">
                                <h3 className="font-bold text-brand-brown mb-2 text-lg">Causes:</h3>
                                <p className="text-brand-dark text-sm leading-relaxed">{disease.causes}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-brown mb-2 text-lg">Precautions:</h3>
                                <p className="text-brand-dark text-sm leading-relaxed">{disease.precautions}</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className={`bg-[#F9F4EF] rounded-3xl p-8 w-full max-w-sm ${disease.reverse ? 'transform -scale-x-100' : ''}`}>
                                <img src={disease.img} alt={disease.name} className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
// ------------------------------------

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);
    const [isUploadEnabled, setIsUploadEnabled] = useState(false);

    const handleBrowseClick = () => {
        setIsAuthModalOpen(true);
    };

    const handleAuthSuccess = () => {
        setIsAuthModalOpen(false);
        setTimeout(() => {
            setIsConsentModalOpen(true);
        }, 300); // slight delay for smooth transition
    };

    const handleConsentAccept = () => {
        setIsConsentModalOpen(false);
        setIsUploadEnabled(true);

        // Scroll to upload section smoothly
        if (currentPage === 'home') {
            window.scrollTo({
                top: document.getElementById('upload-section').offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {currentPage === 'home' && (
                <>
                    <HeroSection />
                    <div id="upload-section">
                        <UploadSection
                            onBrowseClick={handleBrowseClick}
                            isUploadEnabled={isUploadEnabled}
                        />
                    </div>
                    <HowToUseSection />
                    <WhyUseSection />
                </>
            )}

            {currentPage === 'about' && (
                <>
                    <AboutHeroSection />
                    <MissionSection />
                    <VisionSection />
                    <CoreValuesSection />
                </>
            )}

            {currentPage === 'contact' && (
                <>
                    <ContactHeroSection />
                    <WhyUseSection />
                    <ContactFormSection />
                    <FAQSection />
                </>
            )}

            {currentPage === 'dictionary' && (
                <>
                    <DictionaryHeroSection />
                    <DiseaseListSection />
                </>
            )}

            {currentPage !== 'contact' && <StatsSection />}
            <Footer />

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                onSuccess={handleAuthSuccess}
            />

            <ConsentModal
                isOpen={isConsentModalOpen}
                onClose={() => setIsConsentModalOpen(false)}
                onAccept={handleConsentAccept}
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

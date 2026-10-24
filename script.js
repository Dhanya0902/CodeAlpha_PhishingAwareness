/**
 * CyberShield Academy - Phishing Awareness Training
 * Interactive Logic, Quiz Engine & Certificate Generator
 * CodeAlpha Cyber Security Internship Task 2
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. Reading Progress Bar & Scroll Spy
    // ==========================================
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const sections = document.querySelectorAll('section.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');

    function updateScrollProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? Math.min(Math.round((scrollTop / scrollHeight) * 100), 100) : 0;

        if (progressBar) progressBar.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `${progress}%`;

        // Update active nav link based on scroll position
        let currentSectionId = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            const height = sec.offsetHeight;
            if (scrollTop >= top && scrollTop < top + height) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === currentSectionId || link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    // Mobile sidebar toggle
    if (sidebarClose && sidebar) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ==========================================
    // 2. Intersection Observer for Animations
    // ==========================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        animatedElements.forEach(el => el.classList.add('visible'));
    }

    // ==========================================
    // 3. Quiz Data (10 Realistic Questions)
    // ==========================================
    const quizData = [
        {
            id: 1,
            question: "You receive an urgent email from your CEO requesting an immediate wire transfer to a new vendor. What type of attack is this most likely to be?",
            options: [
                "Vishing (Voice Phishing)",
                "Whaling / Business Email Compromise (BEC)",
                "Smishing (SMS Phishing)",
                "Watering Hole Attack"
            ],
            correct: 1,
            explanation: "Whaling (or CEO Fraud / BEC) specifically targets high-profile roles or impersonates C-level executives to authorize fraudulent transfers or access sensitive records."
        },
        {
            id: 2,
            question: "Which of the following sender email addresses is an example of 'typosquatting'?",
            options: [
                "support@paypal.com",
                "billing@paypa1.com",
                "service@security.paypal.com",
                "no-reply@notifications.paypal.com"
            ],
            correct: 1,
            explanation: "'paypa1.com' replaces the letter 'l' with the number '1' to deceive users at a glance. This is a classic typosquatting domain tactic."
        },
        {
            id: 3,
            question: "Before clicking on a hyperlink inside a suspicious email, what is the best immediate verification step?",
            options: [
                "Forward the email to all coworkers to ask if it looks real",
                "Hover your cursor over the link to preview the actual destination URL",
                "Click the link on your mobile phone instead of your laptop",
                "Reply to the email asking the sender if they really sent it"
            ],
            correct: 1,
            explanation: "Hovering over the hyperlink (or long-pressing on touch devices) reveals the true destination URL in the status bar before any connection is made."
        },
        {
            id: 4,
            question: "What psychological social engineering trigger is exploited when an email says: 'Your account will be suspended in 24 hours unless you verify your password immediately'?",
            options: [
                "Reciprocity",
                "Social Proof",
                "Urgency and Fear",
                "Curiosity"
            ],
            correct: 2,
            explanation: "Attackers manufacture artificial urgency and consequences (account suspension) to induce panic, bypassing critical thinking."
        },
        {
            id: 5,
            question: "Which file attachment extension presents the highest immediate risk of executing malware if opened?",
            options: [
                ".txt",
                ".pdf",
                ".exe or .vbs",
                ".png"
            ],
            correct: 2,
            explanation: "Executable files (.exe, .scr, .vbs, .bat) run code directly on your operating system upon being opened, presenting direct execution risk."
        },
        {
            id: 6,
            question: "What is 'Smishing'?",
            options: [
                "Phishing conducted via fraudulent SMS/text messages",
                "Phishing conducted over VoIP voice calls",
                "Intercepting wireless signals at coffee shops",
                "Scanning open ports across a local network"
            ],
            correct: 0,
            explanation: "Smishing is the combination of 'SMS' and 'Phishing' — sending fraudulent text messages with malicious links or numbers to call."
        },
        {
            id: 7,
            question: "Why is Multi-Factor Authentication (MFA / 2FA) considered one of the best defenses against phishing?",
            options: [
                "It makes it impossible for attackers to send phishing emails to your inbox",
                "Even if attackers steal your password, they cannot log in without the second authentication factor",
                "It automatically encrypts your network router",
                "It changes your email address daily"
            ],
            correct: 1,
            explanation: "MFA requires an independent second verification factor (e.g. authenticator app code, FIDO key). Even if credentials are harvested, the account remains protected."
        },
        {
            id: 8,
            question: "In the 2013-2015 fake invoice scam that cost Google and Facebook over $100M, what technique was used?",
            options: [
                "Zero-day browser exploit",
                "Impersonating a real hardware manufacturer (Quanta Computer) using spoofed invoices and contracts",
                "Physical burglary of corporate server rooms",
                "DDoS attacks taking down corporate gateways"
            ],
            correct: 1,
            explanation: "Evaldas Rimasauskas spoofed real Asian electronics supplier Quanta Computer, sending forged invoices that corporate accounting teams paid without proper out-of-band verification."
        },
        {
            id: 9,
            question: "What is 'Spear Phishing' compared to standard mass phishing?",
            options: [
                "Automated emails sent blindly to millions of random addresses",
                "Highly tailored, research-backed attacks crafted specifically for a target individual or organization",
                "Phishing attacks directed exclusively at government satellite networks",
                "Physical phishing using rogue USB drives dropped in parking lots"
            ],
            correct: 1,
            explanation: "Spear phishing uses intelligence gathered from LinkedIn, social media, or company websites to craft customized, credible messages for specific targets."
        },
        {
            id: 10,
            question: "If you accidentally entered your corporate credentials into a phishing webpage, what should you do FIRST?",
            options: [
                "Delete your browser history and restart your computer",
                "Immediately change your password and notify your IT/Security operations team",
                "Wait 48 hours to see if any strange charges appear",
                "Turn off your monitor so the attacker cannot view your screen"
            ],
            correct: 1,
            explanation: "Time is vital in incident response. Immediately reset compromised credentials and alert the Security team so active sessions can be revoked and the host monitored."
        }
    ];

    let currentQuestionIndex = 0;
    const userAnswers = new Array(quizData.length).fill(null);

    const quizProgressFill = document.getElementById('quizProgressFill');
    const quizProgressText = document.getElementById('quizProgressText');
    const quizQuestionArea = document.getElementById('quizQuestionArea');
    const quizPrev = document.getElementById('quizPrev');
    const quizNext = document.getElementById('quizNext');
    const quizSubmit = document.getElementById('quizSubmit');
    const quizResults = document.getElementById('quizResults');
    const resultsHeader = document.getElementById('resultsHeader');
    const resultsScore = document.getElementById('resultsScore');
    const resultsBreakdown = document.getElementById('resultsBreakdown');
    const retakeBtn = document.getElementById('retakeBtn');
    const viewCertBtn = document.getElementById('viewCertBtn');

    // Certificate Elements
    const certLocked = document.getElementById('certLocked');
    const certUnlocked = document.getElementById('certUnlocked');
    const certName = document.getElementById('certName');
    const certScore = document.getElementById('certScore');
    const certDate = document.getElementById('certDate');
    const certId = document.getElementById('certId');
    const nameModal = document.getElementById('nameModal');
    const nameInput = document.getElementById('nameInput');
    const nameSubmitBtn = document.getElementById('nameSubmitBtn');
    const printCertBtn = document.getElementById('printCertBtn');

    let finalScorePercentage = 0;

    function renderQuestion(index) {
        if (!quizQuestionArea) return;
        const q = quizData[index];

        const html = `
            <div class="question-card">
                <div class="question-badge">Question ${index + 1} of ${quizData.length}</div>
                <h3 class="question-title">${q.question}</h3>
                <div class="options-list">
                    ${q.options.map((opt, optIndex) => `
                        <label class="option-item ${userAnswers[index] === optIndex ? 'selected' : ''}" data-opt="${optIndex}">
                            <input type="radio" name="q_${index}" value="${optIndex}" ${userAnswers[index] === optIndex ? 'checked' : ''} style="display:none;">
                            <span class="option-marker">${String.fromCharCode(65 + optIndex)}</span>
                            <span class="option-text">${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
        quizQuestionArea.innerHTML = html;

        // Wire option clicks
        const optionItems = quizQuestionArea.querySelectorAll('.option-item');
        optionItems.forEach(item => {
            item.addEventListener('click', () => {
                const optIndex = parseInt(item.getAttribute('data-opt'), 10);
                userAnswers[index] = optIndex;
                optionItems.forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
            });
        });

        // Update progress indicators
        const progressPct = ((index + 1) / quizData.length) * 100;
        if (quizProgressFill) quizProgressFill.style.width = `${progressPct}%`;
        if (quizProgressText) quizProgressText.textContent = `Question ${index + 1} of ${quizData.length}`;

        // Controls
        if (quizPrev) quizPrev.disabled = (index === 0);
        if (index === quizData.length - 1) {
            if (quizNext) quizNext.style.display = 'none';
            if (quizSubmit) quizSubmit.style.display = 'inline-block';
        } else {
            if (quizNext) quizNext.style.display = 'inline-block';
            if (quizSubmit) quizSubmit.style.display = 'none';
        }
    }

    if (quizPrev) {
        quizPrev.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                renderQuestion(currentQuestionIndex);
            }
        });
    }

    if (quizNext) {
        quizNext.addEventListener('click', () => {
            if (currentQuestionIndex < quizData.length - 1) {
                currentQuestionIndex++;
                renderQuestion(currentQuestionIndex);
            }
        });
    }

    function calculateScore() {
        let correctCount = 0;
        quizData.forEach((q, idx) => {
            if (userAnswers[idx] === q.correct) {
                correctCount++;
            }
        });
        return {
            correct: correctCount,
            total: quizData.length,
            percentage: Math.round((correctCount / quizData.length) * 100)
        };
    }

    if (quizSubmit) {
        quizSubmit.addEventListener('click', () => {
            // Check if any unanswered
            const unanswered = userAnswers.filter(a => a === null).length;
            if (unanswered > 0) {
                const proceed = confirm(`You have ${unanswered} unanswered question(s). Are you sure you want to submit?`);
                if (!proceed) return;
            }

            const result = calculateScore();
            finalScorePercentage = result.percentage;
            const passed = result.percentage >= 70;

            // Hide question area & controls
            if (quizQuestionArea) quizQuestionArea.style.display = 'none';
            const quizControls = document.querySelector('.quiz-controls');
            if (quizControls) quizControls.style.display = 'none';

            // Show results
            if (quizResults) {
                quizResults.style.display = 'block';

                if (resultsHeader) {
                    resultsHeader.innerHTML = passed
                        ? `<div class="result-badge pass">🎉 PASSED! Outstanding Job!</div>`
                        : `<div class="result-badge fail">⚠️ Assessment Incomplete. Review material and try again.</div>`;
                }

                if (resultsScore) {
                    resultsScore.innerHTML = `
                        <div class="score-circle ${passed ? 'pass-glow' : 'fail-glow'}">
                            <span class="score-value">${result.percentage}%</span>
                            <span class="score-label">${result.correct} / ${result.total} Correct</span>
                        </div>
                    `;
                }

                if (resultsBreakdown) {
                    let breakdownHtml = `<h4 class="breakdown-title">Detailed Review:</h4><div class="breakdown-list">`;
                    quizData.forEach((q, idx) => {
                        const isCorrect = userAnswers[idx] === q.correct;
                        const userChosenText = userAnswers[idx] !== null ? q.options[userAnswers[idx]] : 'No answer';
                        const correctAnswerText = q.options[q.correct];
                        breakdownHtml += `
                            <div class="breakdown-item ${isCorrect ? 'correct' : 'incorrect'}">
                                <div class="breakdown-q"><strong>Q${idx + 1}:</strong> ${q.question}</div>
                                <div class="breakdown-answer">
                                    <span class="status-tag ${isCorrect ? 'tag-correct' : 'tag-wrong'}">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                                    <span><strong>Your answer:</strong> ${userChosenText}</span>
                                </div>
                                ${!isCorrect ? `<div class="breakdown-expected"><strong>Correct answer:</strong> ${correctAnswerText}</div>` : ''}
                                <div class="breakdown-expl"><em>💡 ${q.explanation}</em></div>
                            </div>
                        `;
                    });
                    breakdownHtml += `</div>`;
                    resultsBreakdown.innerHTML = breakdownHtml;
                }

                if (viewCertBtn) {
                    if (passed) {
                        viewCertBtn.style.display = 'inline-block';
                    } else {
                        viewCertBtn.style.display = 'none';
                    }
                }
            }
        });
    }

    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            for (let i = 0; i < userAnswers.length; i++) userAnswers[i] = null;
            currentQuestionIndex = 0;
            if (quizResults) quizResults.style.display = 'none';
            if (quizQuestionArea) quizQuestionArea.style.display = 'block';
            const quizControls = document.querySelector('.quiz-controls');
            if (quizControls) quizControls.style.display = 'flex';
            renderQuestion(0);
        });
    }

    // ==========================================
    // 4. Certificate Generation
    // ==========================================
    if (viewCertBtn) {
        viewCertBtn.addEventListener('click', () => {
            const certSection = document.getElementById('certificate');
            if (certSection) {
                certSection.scrollIntoView({ behavior: 'smooth' });
            }
            if (nameModal) {
                nameModal.style.display = 'flex';
                if (nameInput) nameInput.focus();
            }
        });
    }

    function unlockCertificate(candidateName) {
        if (certLocked) certLocked.style.display = 'none';
        if (certUnlocked) certUnlocked.style.display = 'block';

        if (certName) certName.textContent = candidateName || 'Cybersecurity Professional';
        if (certScore) certScore.textContent = `${finalScorePercentage}%`;

        const today = new Date();
        const dateStr = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        if (certDate) certDate.textContent = dateStr;

        // Unique verification ID
        const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
        if (certId) certId.textContent = `CA-PHISH-${randomHex}`;

        if (nameModal) nameModal.style.display = 'none';
    }

    if (nameSubmitBtn) {
        nameSubmitBtn.addEventListener('click', () => {
            const name = nameInput ? nameInput.value.trim() : '';
            if (!name) {
                alert('Please enter your name for the certificate.');
                return;
            }
            unlockCertificate(name);
        });
    }

    if (nameInput) {
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const name = nameInput.value.trim();
                if (name) unlockCertificate(name);
            }
        });
    }

    if (printCertBtn) {
        printCertBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Initialize first quiz question
    renderQuestion(0);
});

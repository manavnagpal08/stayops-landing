const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src/lib/cms-data.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.useCases = {
  title: "Built for Every Industry",
  subtitle: "Whether you are in real estate, healthcare, or logistics, our AI workforce adapts to your specific operational needs.",
  items: [
    { title: "HR & Recruitment", description: "Automate sourcing, screening, and initial candidate interviews.", icon: "UserPlus" },
    { title: "Customer Support", description: "Resolve tier-1 and tier-2 tickets instantly without human intervention.", icon: "HeartHandshake" },
    { title: "Sales Automation", description: "Qualify leads and book meetings directly into your calendar.", icon: "Phone" },
    { title: "Real Estate", description: "Answer property queries and schedule viewings 24/7.", icon: "Building2" },
    { title: "Healthcare", description: "Manage patient appointments and basic triage inquiries.", icon: "Stethoscope" },
    { title: "Logistics", description: "Automate tracking updates and vendor communications.", icon: "Truck" },
    { title: "Education", description: "Student enrollment assistance and course query resolution.", icon: "GraduationCap" },
    { title: "Manufacturing", description: "Supply chain alerts and predictive maintenance scheduling.", icon: "Factory" }
  ]
};

data.faq = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about the product and billing.",
  items: [
    { question: "What is StayOps.ai?", answer: "StayOps.ai is an enterprise platform that allows you to deploy and manage a 24/7 AI workforce. Our AI agents can handle tasks ranging from customer support and HR automation to outbound sales calling." },
    { question: "How do AI agents work?", answer: "Our AI agents use state-of-the-art Large Language Models combined with workflow automation. They are trained on your specific business knowledge base and connected to your existing tools to perform tasks autonomously." },
    { question: "Can I integrate with my CRM?", answer: "Yes, StayOps.ai offers native integrations with Salesforce, HubSpot, Zoho, and other major CRMs. We also provide full API access for custom integrations." },
    { question: "Is there a free trial?", answer: "Yes, we offer a 14-day free trial on our Starter and Growth plans so you can test our AI agents in your environment before committing." },
    { question: "Is data secure?", answer: "Security is our top priority. We use SOC2 compliant infrastructure, end-to-end encryption, and role-based access control. Your proprietary data is never used to train public models." },
    { question: "Can businesses customize workflows?", answer: "Absolutely. Our platform features a drag-and-drop workflow builder that lets you customize exactly how the AI agents handle different scenarios and edge cases." },
    { question: "Do you provide onboarding support?", answer: "Yes, our Growth plan includes dedicated onboarding support, and our Enterprise plan includes a dedicated account manager and solutions architect." },
    { question: "Does it support voice AI calling?", answer: "Yes, our Growth and Enterprise plans include sophisticated voice AI capabilities that can handle both inbound customer service calls and outbound sales qualification." }
  ]
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  industry: string;
  description: string;
  overview: string;
  image?: string;
  icon?: string;
  color?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "stacket-lens",
    title: "Stacket Lens",
    slug: "stacket-lens-3pl-wms",
    subtitle: "Revolutionize Warehouse Management with Stacket Lens",
    industry: "Supply Chain",
    description: "Enhance visibility, efficiency, and control across multi-warehouse operations.",
    overview: `Stacket Lens is a cutting-edge 3PL Warehouse Management System designed to transform how warehouses operate. With real-time inventory tracking, seamless shipping carrier integrations, and advanced analytics, Stacket Lens empowers businesses to enhance visibility and control across multi-warehouse operations.

Customizable workflows and intuitive tools make Stacket Lens an ideal solution for 3PL providers, enabling them to optimize processes, reduce costs, and improve accuracy. Whether managing a single facility or scaling across multiple locations, Stacket Lens provides the efficiency and adaptability needed for modern warehouse management.`,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "stacket-lens-mobile",
    title: "Stacket Lens Mobile App",
    slug: "stacket-lens-mobile-app",
    subtitle: "Warehouse Management On-the-Go",
    industry: "Supply Chain",
    description: "Access warehouse operations and inventory from anywhere with mobile-first design.",
    overview: `Stacket Lens Mobile App extends warehouse management capabilities to field teams and mobile workers. With real-time access to inventory, order fulfillment, and shipment tracking on mobile devices, teams can manage operations efficiently from anywhere in the warehouse or on the go.

The app provides offline functionality, barcode scanning, and instant notifications to keep teams synchronized. With an intuitive mobile interface optimized for quick actions and minimal input, Stacket Lens Mobile App improves productivity and reduces operational bottlenecks.`,
    color: "from-blue-400 to-blue-500",
  },
  {
    id: "stacket-ims",
    title: "Stacket IMS",
    slug: "stacket-ims-omni-channel-inventory-management-system",
    subtitle: "Master Inventory Across Channels with Stacket IMS",
    industry: "Supply Chain",
    description: "Optimize stock levels and fulfillment for all your sales channels.",
    overview: `Stacket IMS provides centralized inventory tracking, ensuring your stock levels are optimized across all sales channels. Seamless integration with eCommerce platforms, POS systems, and automated workflows helps improve order accuracy, customer satisfaction, and inventory visibility.

With comprehensive analytics and real-time updates, Stacket IMS enables businesses to make data-driven decisions and maintain consistent inventory across multiple touchpoints. The system reduces overselling, minimizes stockouts, and streamlines fulfillment operations for enhanced customer experience.`,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "peacock",
    title: "Peacock",
    slug: "peacock",
    subtitle: "Efficient Claims Management Simplified",
    industry: "Insurance",
    description: "Revolutionize claims processing with smart tools.",
    overview: `Peacock, the Advanced Claims Management System, redefines how claims are processed, validated, and tracked. Designed to simplify every stage of the claims lifecycle, Peacock leverages automation and smart tools to ensure accuracy, efficiency, and compliance.

With features like automated claims submission, real-time tracking, and seamless system integration, Peacock eliminates tedious manual processes and reduces administrative errors. Its compliance monitoring and reporting tools help you stay aligned with regulations, while advanced analytics provide valuable insights to refine operations.`,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "gcc-claims",
    title: "Gulf Coast Claims (GCC)",
    slug: "claims-management-how-dream-beyond-transformed-the-gulf-coast-claims-gcc",
    subtitle: "Transforming Claims Management for Gulf Coast Region",
    industry: "Insurance",
    description: "Custom claims processing solution for regional insurance operations.",
    overview: `Dream Beyond transformed claims management for Gulf Coast Claims, implementing a specialized system that handles the unique requirements of regional insurance operations. The solution provides streamlined claims processing, regional compliance tracking, and integrated workflows specific to Gulf Coast operations.

With improved processing times and enhanced accuracy, GCC now manages claims more efficiently while maintaining compliance with regional regulations. The system supports real-time collaboration between teams and provides comprehensive reporting for operational insights.`,
    color: "from-emerald-400 to-emerald-500",
  },
  {
    id: "oosa",
    title: "OOSA",
    slug: "oosa",
    subtitle: "Centralize and Analyze Oil Well Data with OOSA",
    industry: "Oil & Gas",
    description: "Turn raw data into actionable insights for strategic decisions.",
    overview: `OOSA (Offshore Oil Scouting Association) is designed to centralize and analyze oil well data, empowering you to make smarter, data-driven decisions. By aggregating critical information from BOEM and Oil Well Scout data, OOSA streamlines the collection and reporting process, saving valuable time.

With advanced reporting, real-time updates, and secure data storage, OOSA provides the insights you need to optimize operations and maintain compliance. Its intuitive platform turns raw data into actionable insights, enabling strategic decision-making that drives success.`,
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "mls",
    title: "MLS",
    slug: "mls",
    subtitle: "Revolutionize Learning Management with MLS",
    industry: "Internal tools / ops",
    description: "Track, manage, and optimize employee learning with ease.",
    overview: `The Management Learning System (MLS) is designed to revolutionize how organizations manage and deliver employee training. With features like customizable learning paths, real-time progress tracking, and integration with HR systems, MLS simplifies training while enhancing workforce development.

From identifying skill gaps to delivering targeted learning solutions, MLS helps organizations optimize their training strategies, ensuring employees are equipped to meet evolving business needs. The platform supports multiple learning formats and provides comprehensive analytics to measure training effectiveness.`,
    color: "from-rose-500 to-rose-600",
  },
  {
    id: "lims",
    title: "LIMS",
    slug: "lims-laboratory-management-system",
    subtitle: "Transform Laboratory Operations with LIMS",
    industry: "Clinical Trials",
    description: "Manage samples, automate workflows, and ensure compliance effortlessly.",
    overview: `LIMS (Laboratory Information Management System) transforms how laboratories manage samples, workflows, and compliance requirements. With comprehensive sample tracking, automated workflow management, and robust compliance monitoring, LIMS ensures accuracy and efficiency in laboratory operations.

The system streamlines data collection, improves traceability, and enhances collaboration across teams. With real-time analytics and customizable reporting, LIMS empowers laboratories to optimize processes, maintain regulatory compliance, and deliver results with confidence.`,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "clinical-trial-management",
    title: "Clinical Trial Management System",
    slug: "clinical-trial-management",
    subtitle: "Streamline Clinical Trial Operations from Enrollment to Reporting",
    industry: "Clinical Trials",
    description: "Manage patient enrollment, data collection, and compliance workflows efficiently.",
    overview: `The Clinical Trial Management System is a comprehensive platform designed to streamline all aspects of clinical trial operations. From patient enrollment and consent management to data collection, quality assurance, and regulatory reporting, the system ensures compliance with clinical trial standards and regulatory requirements.

With integrated workflows, real-time monitoring, and automated compliance checks, the system reduces administrative burden and improves trial efficiency. The platform supports multi-site trials and provides comprehensive audit trails for regulatory authorities.`,
    color: "from-cyan-400 to-cyan-500",
  },
  {
    id: "ticket-management",
    title: "Ticket Management System",
    slug: "ticket-management-for-computer-system-monitoring",
    subtitle: "Streamlined IT Support and Issue Tracking",
    industry: "Internal tools / ops",
    description: "Organize and resolve IT tickets with real-time monitoring and automated routing.",
    overview: `The Ticket Management System provides IT teams with a centralized platform for tracking, prioritizing, and resolving support tickets. With automated routing, SLA management, and real-time monitoring, the system ensures that critical issues are addressed promptly and efficiently.

Features include ticket prioritization based on impact and urgency, integration with system monitoring tools, and comprehensive reporting for service level analysis. The system reduces resolution time and improves IT team productivity.`,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "workflow-labor-management",
    title: "Workflow & Labor Management System",
    slug: "workflow-and-labor-management-system",
    subtitle: "Boost Efficiency with Smarter Workflow Management",
    industry: "Internal tools / ops",
    description: "Organize and optimize your team's workflows with ease.",
    overview: `The Workflow & Labor Management System provides comprehensive tools for efficient task allocation, tracking, and performance analysis. With customizable workflows, real-time progress monitoring, and automated scheduling, teams can optimize resource allocation and improve productivity.

The system supports workforce scheduling, shift management, and labor cost analysis. With detailed analytics and performance metrics, managers can make data-driven decisions to enhance team efficiency and reduce operational costs.`,
    color: "from-indigo-400 to-indigo-500",
  },
  {
    id: "ai-tutor",
    title: "AI Tutor",
    slug: "ai-tutor",
    subtitle: "Intelligent, Personalized Learning Assistance",
    industry: "Internal tools / ops",
    description: "Deliver personalized educational support with AI-powered tutoring.",
    overview: `AI Tutor is an intelligent tutoring system that provides personalized learning assistance to students. Using advanced AI algorithms, the system adapts to individual learning styles, identifies knowledge gaps, and provides targeted instruction to improve learning outcomes.

The platform supports multiple subjects and learning levels, offering interactive exercises, explanations, and progress tracking. With data-driven insights, educators can monitor student progress and customize intervention strategies.`,
    color: "from-violet-500 to-violet-600",
  },
  {
    id: "ai-resume-sorter",
    title: "AI Resume Sorter",
    slug: "ai-resume-sorter",
    subtitle: "Intelligent Resume Screening and Candidate Ranking",
    industry: "Internal tools / ops",
    description: "Automate resume screening with AI-powered candidate evaluation.",
    overview: `The AI Resume Sorter is a powerful recruitment tool that automatically screens and ranks resumes based on job requirements. Using natural language processing and machine learning, the system identifies the most qualified candidates quickly and accurately.

The platform reduces time-to-hire, minimizes manual screening workload, and ensures consistent evaluation criteria. With customizable scoring algorithms, recruiters can prioritize candidates that best match their specific needs.`,
    color: "from-pink-500 to-pink-600",
  },
  {
    id: "ai-business-analyst",
    title: "AI Business Analyst",
    slug: "ai-business-analyst",
    subtitle: "Data-Driven Business Intelligence and Analysis",
    industry: "Internal tools / ops",
    description: "Extract actionable insights from business data with AI analysis.",
    overview: `The AI Business Analyst platform leverages machine learning to analyze business data, identify trends, and provide actionable recommendations. The system processes large datasets to uncover patterns, predict outcomes, and support strategic decision-making.

With automated report generation, customizable dashboards, and predictive analytics, business teams can quickly understand their data and identify opportunities. The platform integrates with existing business systems and data sources for seamless analysis.`,
    color: "from-red-500 to-red-600",
  },
  {
    id: "atom",
    title: "ATOM",
    slug: "atom-2",
    subtitle: "Advanced Task and Operations Management",
    industry: "Internal tools / ops",
    description: "Unified platform for task management and operational oversight.",
    overview: `ATOM is a comprehensive task and operations management platform designed to unify workflows across teams. With centralized task assignment, real-time progress tracking, and integrated communication tools, ATOM streamlines collaboration and improves operational efficiency.

The platform provides customizable views, automated workflows, and detailed analytics for performance monitoring. Teams can prioritize work effectively and maintain visibility across all operational processes.`,
    color: "from-teal-500 to-teal-600",
  },
  {
    id: "agility-health-reporter",
    title: "Agility Health Reporter",
    slug: "agility-health-reporter",
    subtitle: "Comprehensive Health and Wellness Metrics Reporting",
    industry: "Internal tools / ops",
    description: "Monitor organizational health and wellness with detailed reporting.",
    overview: `The Agility Health Reporter provides comprehensive insights into organizational health metrics, including workforce wellness, employee satisfaction, and operational performance indicators. With customizable dashboards and real-time data, leaders can monitor critical metrics and identify areas for improvement.

The platform aggregates data from multiple sources, provides trend analysis, and generates actionable recommendations. With detailed reporting capabilities, organizations can make data-driven decisions to improve employee wellness and organizational performance.`,
    color: "from-green-500 to-green-600",
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.slug === slug);
};

export const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
  return caseStudies.filter((study) => study.industry === industry);
};

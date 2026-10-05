interface IICard {
    title: string,
    date: string,
    filters: string[],
    description: string,
    completed: boolean
}

export const currentTasks: IICard[] = [
    {
        title: "Do homework",
        date: "19.09.2026",
        filters: ["important", "asap"],
        description: "do some homework math and other. test text idgaf",
        completed: false
    },
    {
        title: "Redesign Landing Page",
        date: "22.08.2026",
        filters: ["important", "high priority", "work", "design"],
        description: "Create a modern and responsive landing page for the new product.",
        completed: false
    },
    {
        title: "Finish React Components",
        date: "23.08.2026",
        filters: ["urgent", "development"],
        description: "Complete the remaining reusable components and make sure they work correctly.",
        completed: false
    },
    {
        title: "Update Portfolio",
        date: "02.09.2026",
        filters: ["personal"],
        description: "Add recent projects, improve the layout, and update personal information.",
        completed: false
    },
    {
        title: "Fix Authentication Bugs",
        date: "01.09.2026",
        filters: ["urgent", "development", "NOW", "critical"],
        description: "Investigate and fix login, registration, and authentication-related issues.",
        completed: false
    },
    {
        title: "Write Project Documentation",
        date: "27.09.2026",
        filters: ["work", "medium priority", "documentation"],
        description: "Prepare clear documentation explaining the project structure, setup, and usage.",
        completed: false
    },
    {
        title: "Presentation",
        date: "24.08.2026",
        filters: ["study", "hight priority"],
        description: "Create slides and prepare talking points for the upcoming project presentation.",
        completed: false
    },
    {
        title: "Review Database Structure",
        date: "28.08.2026",
        filters: ["later"],
        description: "do some homework math and other. test text idgaf",
        completed: false
    },
    {
        title: "Database",
        date: "19.09.2026",
        filters: ["important", "asap"],
        description: "Check the database schema and improve relationships, indexes, and data organization.",
        completed: false
    },
]

export const completedTasks: IICard[] = [
    {
        title: "Set Up Project Structure",
        date: "18.08.2026",
        filters: ["development", "important"],
        description: "Create the initial folder structure and configure the project for development.",
        completed: true
    },
    {
        title: "Design Login Page",
        date: "17.08.2026",
        filters: ["design"],
        description: "Designe a clean and responsive login page with form validation states.",
        completed: true
    },
    {
        title: "Create Navigation Header",
        date: "20.08.2026",
        filters: ["development", "important"],
        description: "Built the main navigation header with responsive behavior and interactive elements.",
        completed: true
    },
    {
        title: "Add Dark Mode",
        date: "20.08.2026",
        filters: ["UI", "design", "asap"],
        description: "Add dark mode support and adjusted colors for better readability.",
        completed: true
    },
    {
        title: "Connect API Endpoints",
        date: "14.08.2026",
        filters: ["development", "high priority"],
        description: "Connected the frontend to the required API endpoints and handled loading states.",
        completed: true
    },
    {
        title: "Optimize Images",
        date: "13.08.2026",
        filters: ["performance"],
        description: "Compress and optimiz project images to improve loading performance.",
        completed: true
    },
    {
        title: "Write README File",
        date: "19.08.2026",
        filters: ["documentation", "development", "work"],
        description: "Added project documentation with installation steps, features, and usage instructions.",
        completed: true
    },
    {
        title: "Fix Responsive Layout",
        date: "11.08.2026",
        filters: ["urgent", "development", "asap"],
        description: "Fixe layout issues on tablet and mobile screen sizes.",
        completed: true
    },
    {
        title: "Create Task Components",
        date: "01.08.2026",
        filters: ["UI", "development"],
        description: "Create reusable task cards, buttons, tags, and status components.",
        completed: true
    },
]
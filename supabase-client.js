// Supabase Configuration & Helper Functions
const SUPABASE_URL = "https://urkgjnvpqzqhdaytpfdv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_t57nv-lB1J7AX0NMCAL7Ow_rS4g_2pQ";

// Initialize Supabase Client
var supabaseClient = null;
if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Master Student Record (MOHD HASHIM)
const DEFAULT_STUDENT = {
    id: "GE-21545586",
    enroll_no: "GE-21545586",
    class_roll_no: "2154682",
    name: "MOHD HASHIM",
    father_name: "SAEED",
    mother_name: "SHAHANA",
    dob: "1999-10-12",
    email: "Babaansari07896@gmail.com",
    official_email: "Babaansari07896@gmail.com",
    phone: "8923456443",
    course: "B.COM Hons I",
    password: "student@123",
    photo: "candidate_photo_hd.png?v=20260824"
};

// Master All 6 Semesters Results for MOHD HASHIM
const ALL_DEFAULT_RESULTS = [
    // Semester 1
    {
        student_id: "GE-21545586",
        semester: "1",
        programme: "B.COM Hons I",
        exam_year: "2020-21",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- I SEMESTER EXAMINATION (2020-21)",
        result_status: "Pass",
        total_credits: 23,
        credits_earned: 23,
        sgpa: "7.88",
        cgpa: "",
        subjects: [
            { code: "BCH101", name: "Business Organisation", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH102", name: "Financial Accounting", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH103", name: "Micro Economics", credit: 3, grade: "B+", gradePoint: 7 },
            { code: "BCH104", name: "Business Communication", credit: 3, grade: "B", gradePoint: 7 },
            { code: "BCH105", name: "Fundamentals Of Computer", credit: 3, grade: "B+", gradePoint: 8 },
            { code: "BCH106", name: "Business Mathematics", credit: 4, grade: "A", gradePoint: 8 },
            { code: "BCH107", name: "Seminar", credit: 1, grade: "A", gradePoint: 8 },
            { code: "BCH108", name: "General Proficiency", credit: 1, grade: "A", gradePoint: 9 }
        ]
    },
    // Semester 2
    {
        student_id: "GE-21545586",
        semester: "2",
        programme: "B.COM Hons II",
        exam_year: "2020-21",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- II SEMESTER EXAMINATION (2020-21)",
        result_status: "Pass",
        total_credits: 24,
        credits_earned: 24,
        sgpa: "7.38",
        cgpa: "",
        subjects: [
            { code: "BCH201", name: "Business Law", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH202", name: "Business Statistics", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH203", name: "Macro Economics", credit: 3, grade: "A", gradePoint: 8 },
            { code: "BCH204", name: "Banking & Insurance", credit: 3, grade: "B+", gradePoint: 7 },
            { code: "BCH205", name: "Corporate Laws & Governance", credit: 4, grade: "A", gradePoint: 8 },
            { code: "BCH206", name: "Environmental Studies", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH207", name: "Career Skill-I", credit: 1, grade: "A", gradePoint: 8 },
            { code: "GP201", name: "General Proficiency", credit: 1, grade: "A", gradePoint: 9 }
        ]
    },
    // Semester 3
    {
        student_id: "GE-21545586",
        semester: "3",
        programme: "B.COM Hons III",
        exam_year: "2021-22",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- III SEMESTER EXAMINATION (2021-22)",
        result_status: "Pass",
        total_credits: 21,
        credits_earned: 21,
        sgpa: "7.38",
        cgpa: "",
        subjects: [
            { code: "BCH301", name: "Corporate Accounting", credit: 3, grade: "B", gradePoint: 7 },
            { code: "BCH302", name: "Human Resource Management", credit: 3, grade: "B", gradePoint: 7 },
            { code: "BCH303", name: "Industry Law", credit: 3, grade: "B", gradePoint: 7 },
            { code: "BCH304", name: "Indian Financial System", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH305", name: "Principles of Marketing", credit: 3, grade: "B+", gradePoint: 8 },
            { code: "BCH306", name: "Business Environment", credit: 3, grade: "B", gradePoint: 7 },
            { code: "BCH307", name: "Career Skill-II", credit: 1, grade: "B", gradePoint: 7 },
            { code: "GP301", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 7 }
        ]
    },
    // Semester 4
    {
        student_id: "GE-21545586",
        semester: "4",
        programme: "B.COM Hons IV",
        exam_year: "2021-22",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- IV SEMESTER EXAMINATION (2021-22)",
        result_status: "Pass",
        total_credits: 24,
        credits_earned: 24,
        sgpa: "8.50",
        cgpa: "",
        subjects: [
            { code: "BCH401", name: "Indian Economy", credit: 3, grade: "B+", gradePoint: 8 },
            { code: "BCH402", name: "Company Law", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH403", name: "Cost Accounting", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH404", name: "Research Methodology", credit: 4, grade: "B+", gradePoint: 8 },
            { code: "BCH405", name: "Management of Financial Services", credit: 3, grade: "B+", gradePoint: 7 },
            { code: "BCH406", name: "Digital Marketing", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH407", name: "Computerized Accounting", credit: 1, grade: "A+", gradePoint: 7 },
            { code: "GP408", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 7 }
        ]
    },
    // Semester 5
    {
        student_id: "GE-21545586",
        semester: "5",
        programme: "B.COM Hons V",
        exam_year: "2022-23",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- V SEMESTER EXAMINATION (2022-23)",
        result_status: "Pass",
        total_credits: 25,
        credits_earned: 25,
        sgpa: "8.75",
        cgpa: "",
        subjects: [
            { code: "BCH501", name: "Management Accounting", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH502", name: "Income Tax Law and Practice", credit: 4, grade: "B+", gradePoint: 8 },
            { code: "BCH503", name: "International Business", credit: 4, grade: "B+", gradePoint: 9 },
            { code: "BCH504", name: "Auditing", credit: 4, grade: "B", gradePoint: 9 },
            { code: "BCH505", name: "Entrepreneurship and Small Business", credit: 3, grade: "B+", gradePoint: 9 },
            { code: "BCH506", name: "F1 Financial Analysis and Reporting", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH507", name: "F2 Working Capital Management", credit: 1, grade: "A+", gradePoint: 9 },
            { code: "GP501", name: "General Proficiency", credit: 1, grade: "A", gradePoint: 8 }
        ]
    },
    // Semester 6 (Final Consolidated)
    {
        student_id: "GE-21545586",
        semester: "6",
        programme: "B.COM Hons VI",
        exam_year: "2020-23",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- VI SEMESTER EXAMINATION (2020-23)",
        result_status: "Pass",
        total_credits: 24,
        credits_earned: 24,
        sgpa: "8",
        cgpa: "7.82",
        has_summary_grid: true,
        subjects: [
            { code: "BCH601", name: "Indirect Tax Laws", credit: 4, grade: "A", gradePoint: 8 },
            { code: "BCH602", name: "Corporate Governance & Business Ethics", credit: 4, grade: "A", gradePoint: 8 },
            { code: "BCH603", name: "Project Management", credit: 4, grade: "A", gradePoint: 9 },
            { code: "BCH604(F3)", name: "Investment Management", credit: 3, grade: "B", gradePoint: 7 },
            { code: "BCH605(F4)", name: "Multinational Financial System", credit: 4, grade: "A", gradePoint: 8 },
            { code: "BCH606", name: "Major Project & Viva-Voce", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH607", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 7 }
        ]
    }
];

// Master Student Record (MOHD SOHIL)
const SOHIL_STUDENT = {
    id: "GE-21538540",
    enroll_no: "GE-21538540",
    class_roll_no: "2187530",
    name: "MOHD SOHIL",
    father_name: "AHSAN",
    mother_name: "JAMEELA",
    dob: "2005-02-01",
    email: "Mohdsohil0328@gmail.com",
    official_email: "Mohdsohil0328@gmail.com",
    phone: "8630003510",
    course: "B.COM (Hons)",
    password: "student@123",
    photo: "sohil_photo.png",
    degree_conferred: true,
    degree_name: "BACHELOR OF COMMERCE (HONOURS)",
    degree_serial: "GEHU/DEG/2024/084920",
    convocation_year: "2024",
    final_cgpa: "8.41",
    final_division: "First Division with Distinction",
    degree_date: "29/06/2024"
};

// Master All 6 Semesters Results for MOHD SOHIL (Batch 2021-24)
const ALL_SOHIL_RESULTS = [
    // Semester 1
    {
        student_id: "GE-21538540",
        semester: "1",
        programme: "BACHELOR OF COMMERCE(HONOURS)",
        serial_no: "213172",
        issue_date: "25/01/2022",
        exam_year: "2021-22",
        exam_title: "BACHELOR OF COMMERCE(HONOURS) - I SEMESTER EXAMINATION (2021-22)",
        result_status: "PASS",
        total_credits: 25,
        credits_earned: 25,
        sgpa: "8.25",
        cgpa: "",
        subjects: [
            { code: "BCH101", name: "Business Organisation", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH102", name: "Financial Accounting", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH103", name: "Micro Economics", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH104", name: "Business Communication", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH105", name: "Fundamentals Of Computer", credit: 3, grade: "B+", gradePoint: 7 },
            { code: "BCH106", name: "Business Mathematics", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH107", name: "Seminar", credit: 1, grade: "O", gradePoint: 10 },
            { code: "BCH108", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 2
    {
        student_id: "GE-21538540",
        semester: "2",
        programme: "BACHELOR OF COMMERCE(HONOURS)",
        serial_no: "316915",
        issue_date: "24/07/2022",
        exam_year: "2021-22",
        exam_title: "BACHELOR OF COMMERCE(HONOURS) - SECOND SEMESTER EXAMINATION (2021-22)",
        result_status: "PASS",
        total_credits: 25,
        credits_earned: 25,
        sgpa: "8.25",
        cgpa: "",
        subjects: [
            { code: "BCH201", name: "Macro Economics", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH202", name: "Business Law", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH203", name: "Business Finance", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH204", name: "Principles of Management", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH205", name: "Business Statistics", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH206", name: "Environmental Science", credit: 2, grade: "A+", gradePoint: 9 },
            { code: "BCH207", name: "Career Skill-I", credit: 2, grade: "B", gradePoint: 8 },
            { code: "BCH208", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 3
    {
        student_id: "GE-21538540",
        semester: "3",
        programme: "BACHELOR OF COMMERCE(HONOURS)",
        serial_no: "339593",
        issue_date: "02/02/2023",
        exam_year: "2022-23",
        exam_title: "BACHELOR OF COMMERCE(HONOURS) - III SEMESTER EXAMINATION (2022-23)",
        result_status: "PASS",
        total_credits: 26,
        credits_earned: 26,
        sgpa: "8.75",
        cgpa: "",
        subjects: [
            { code: "BCH301", name: "Corporate Accounting", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH302", name: "Human Resource Management", credit: 4, grade: "O", gradePoint: 10 },
            { code: "BCH303", name: "Industry Law", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH304", name: "Indian Financial System", credit: 4, grade: "O", gradePoint: 10 },
            { code: "BCH305", name: "Principles of Marketing", credit: 3, grade: "A+", gradePoint: 9 },
            { code: "BCH306", name: "Business Environment", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH307", name: "Career Skill-II", credit: 2, grade: "B", gradePoint: 8 },
            { code: "GP301", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 4
    {
        student_id: "GE-21538540",
        semester: "4",
        programme: "BACHELOR OF COMMERCE(Hons)",
        serial_no: "506367",
        issue_date: "25/07/2023",
        exam_year: "2022-23",
        exam_title: "BACHELOR OF COMMERCE(Hons) - IV SEM EXAMINATION (2022-23)",
        result_status: "PASS",
        total_credits: 23,
        credits_earned: 23,
        sgpa: "8.50",
        cgpa: "",
        subjects: [
            { code: "BCH401", name: "Indian Economy", credit: 3, grade: "A+", gradePoint: 9 },
            { code: "BCH402", name: "Company Law", credit: 4, grade: "O", gradePoint: 10 },
            { code: "BCH403", name: "Cost Accounting", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH404", name: "Research Methodology", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH405", name: "Management of Financial Services", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH406", name: "Digital Marketing", credit: 3, grade: "A+", gradePoint: 9 },
            { code: "BCH407", name: "Computerized Accounting", credit: 1, grade: "B", gradePoint: 8 },
            { code: "GP408", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 5
    {
        student_id: "GE-21538540",
        semester: "5",
        programme: "BACHELOR OF COMMERCE(HONS)",
        serial_no: "533505",
        issue_date: "15/02/2024",
        exam_year: "2023-24",
        exam_title: "BACHELOR OF COMMERCE(HONS) - V SEM EXAMINATION (2023-24)",
        result_status: "PASS",
        total_credits: 25,
        credits_earned: 25,
        sgpa: "8.50",
        cgpa: "",
        subjects: [
            { code: "BCH501", name: "Management Accounting", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH502", name: "Income Tax Law and Practice", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH503", name: "International Business", credit: 3, grade: "A+", gradePoint: 9 },
            { code: "BCH504", name: "Auditing", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH505", name: "Entrepreneurship and Small Business", credit: 3, grade: "A+", gradePoint: 9 },
            { code: "BCH506 F1", name: "Financial Analysis and Reporting", credit: 3, grade: "A+", gradePoint: 9 },
            { code: "BCH507 F2", name: "Working Capital Management", credit: 3, grade: "B", gradePoint: 8 },
            { code: "GP501", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 6
    {
        student_id: "GE-21538540",
        semester: "6",
        programme: "BACHELOR OF COMMERCE(Hons)",
        serial_no: "562653",
        issue_date: "29/06/2024",
        exam_year: "2021-24",
        exam_title: "BACHELOR OF COMMERCE(Hons) - FINAL YEAR (BATCH 2021-24)",
        result_status: "PASS",
        total_credits: 25,
        credits_earned: 25,
        sgpa: "8.25",
        cgpa: "8.41",
        has_summary_grid: true,
        summary_grid: [
            { sem: "I Sem", sgpa: "8.25" },
            { sem: "II Sem", sgpa: "8.25" },
            { sem: "III Sem", sgpa: "8.75" },
            { sem: "IV Sem", sgpa: "8.50" },
            { sem: "V Sem", sgpa: "8.50" },
            { sem: "VI Sem", sgpa: "8.25" }
        ],
        total_programme_credits: 149,
        total_programme_earned: 149,
        final_result: "PASS",
        subjects: [
            { code: "BCH601", name: "Indirect Tax Laws", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH602", name: "Corporate Governance & Business Ethics", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH603", name: "Project Management", credit: 4, grade: "A", gradePoint: 8 },
            { code: "BCH604(F3)", name: "Investment Management", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH605(F4)", name: "Multinational Financial System", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH606", name: "Major Project & Viva-Voce", credit: 4, grade: "A+", gradePoint: 9 },
            { code: "BCH607", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 8 }
        ]
    }
];

// Master Student Record (SALIB KHAN - Primary Active Student)
const SALIB_STUDENT = {
    id: "PV-22360135",
    enroll_no: "PV-22360135",
    class_roll_no: "22360135",
    name: "SALIB KHAN",
    father_name: "AARIF KHAN",
    mother_name: "TALAT BEGAM",
    dob: "2007-07-20",
    email: "salibkhan34971@gmail.com",
    official_email: "salibkhan34971@gmail.com",
    phone: "8923456443",
    course: "B.COM (Hons)",
    password: "student@123",
    photo: "salib_photo.png",
    degree_conferred: false,
    final_cgpa: "7.72",
    final_division: "First Division",
    address: "VILLAGE DARAU POST DARAU, KICHHA, UDHAM SINGH NAGAR, UTTARAKHAND - 263148"
};

// Master All 6 Semesters Results for SALIB KHAN (Batch 2023-26)
const ALL_SALIB_RESULTS = [
    // Semester 1
    {
        student_id: "PV-22360135",
        semester: "1",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 1562",
        issue_date: "25/01/2024",
        exam_year: "2023-24",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- I SEMESTER EXAMINATION (2023-24)",
        result_status: "PASS",
        total_credits: 23,
        credits_earned: 23,
        sgpa: "7.50",
        cgpa: "",
        pdf_file: "salib_sem1.pdf",
        subjects: [
            { code: "BCH101", name: "Business Organisation", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH102", name: "Financial Accounting", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH103", name: "Micro Economics", credit: 4, grade: "C", gradePoint: 7 },
            { code: "BCH104", name: "Business Communication", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH105", name: "Fundamentals Of Computer", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH106", name: "Business Mathematics", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH107", name: "Seminar", credit: 1, grade: "B", gradePoint: 8 },
            { code: "BCH108", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 2
    {
        student_id: "PV-22360135",
        semester: "2",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 1685",
        issue_date: "20/11/2024",
        exam_year: "2023-24",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- II SEMESTER EXAMINATION (2023-24)",
        result_status: "PASS",
        total_credits: 22,
        credits_earned: 22,
        sgpa: "7.88",
        cgpa: "",
        pdf_file: "salib_sem2.pdf",
        subjects: [
            { code: "BCH201", name: "Macro Economics", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH202", name: "Business Law", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH203", name: "Business Finance", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH204", name: "Principles of Management", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH205", name: "Business Statistics", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH206", name: "Environmental Science", credit: 3, grade: "A", gradePoint: 9 },
            { code: "BCH207", name: "Career Skill-I", credit: 1, grade: "C", gradePoint: 7 },
            { code: "BCH208", name: "General Proficiency", credit: 1, grade: "C", gradePoint: 7 }
        ]
    },
    // Semester 3
    {
        student_id: "PV-22360135",
        semester: "3",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 1739",
        issue_date: "08/05/2025",
        exam_year: "2024-25",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- III SEMESTER EXAMINATION (2024-25)",
        result_status: "PASS",
        total_credits: 20,
        credits_earned: 20,
        sgpa: "7.63",
        cgpa: "",
        pdf_file: "salib_sem3.pdf",
        subjects: [
            { code: "BCH301", name: "Corporate Accounting", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH302", name: "Human Resource Management", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH303", name: "Industry Law", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH304", name: "Indian Financial System", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH305", name: "Principles of Marketing", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH306", name: "Business Environment", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH307", name: "Career Skill-II", credit: 1, grade: "C", gradePoint: 7 },
            { code: "GP301", name: "General Proficiency", credit: 1, grade: "C", gradePoint: 7 }
        ]
    },
    // Semester 4
    {
        student_id: "PV-22360135",
        semester: "4",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 1800",
        issue_date: "16/09/2025",
        exam_year: "2024-25",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- IV SEMESTER EXAMINATION (2024-25)",
        result_status: "PASS",
        total_credits: 21,
        credits_earned: 21,
        sgpa: "7.38",
        cgpa: "",
        pdf_file: "salib_sem4.pdf",
        subjects: [
            { code: "BCH401", name: "Indian Economy", credit: 4, grade: "C", gradePoint: 7 },
            { code: "BCH402", name: "Company Law", credit: 4, grade: "C", gradePoint: 7 },
            { code: "BCH403", name: "Cost Accounting", credit: 4, grade: "C", gradePoint: 7 },
            { code: "BCH404", name: "Research Methodology", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH405", name: "Management of Financial Services", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH406", name: "Digital Marketing", credit: 1, grade: "B", gradePoint: 8 },
            { code: "BCH407", name: "Computerized Accounting", credit: 1, grade: "B", gradePoint: 8 },
            { code: "GP408", name: "General Proficiency", credit: 1, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 5
    {
        student_id: "PV-22360135",
        semester: "5",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 1899",
        issue_date: "16/02/2026",
        exam_year: "2025-26",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- V SEMESTER EXAMINATION (2025-26)",
        result_status: "PASS",
        total_credits: 22,
        credits_earned: 22,
        sgpa: "7.75",
        cgpa: "",
        pdf_file: "salib_sem5.pdf",
        subjects: [
            { code: "BCH501", name: "Management Accounting", credit: 3, grade: "A", gradePoint: 9 },
            { code: "BCH502", name: "Income Tax Law and Practice", credit: 3, grade: "A", gradePoint: 9 },
            { code: "BCH503", name: "International Business", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH504", name: "Auditing", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH505", name: "Entrepreneurship and Small Business", credit: 3, grade: "C", gradePoint: 7 },
            { code: "BCH506", name: "F1 Financial Analysis and Reporting", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH507", name: "F2 Working Capital Management", credit: 3, grade: "A", gradePoint: 9 },
            { code: "GP501", name: "General Proficiency", credit: 1, grade: "D", gradePoint: 6 }
        ]
    },
    // Semester 6
    {
        student_id: "PV-22360135",
        semester: "6",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 2010",
        issue_date: "29/06/2026",
        exam_year: "2025-26",
        exam_title: "BACHELOR OF COMMERCE (HONOURS)- FINAL YEAR (BATCH 2023-26)",
        result_status: "PASS",
        total_credits: 22,
        credits_earned: 22,
        sgpa: "8.15",
        cgpa: "7.72",
        pdf_file: "salib_sem6.pdf",
        has_summary_grid: true,
        summary_sgpas: ["7.50", "7.88", "7.63", "7.38", "7.75", "8.15"],
        total_programme_credits: 130,
        total_programme_earned: 130,
        final_result: "PASS",
        subjects: [
            { code: "BCH601", name: "Indirect Tax Laws", credit: 4, grade: "A", gradePoint: 9 },
            { code: "BCH602", name: "Corporate Governance & Business Ethics", credit: 4, grade: "A", gradePoint: 9 },
            { code: "BCH603", name: "Project Management", credit: 3, grade: "A", gradePoint: 9 },
            { code: "BCH604(F3)", name: "Investment Management", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH605(F4)", name: "Multinational Financial System", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH606", name: "Major Project & Viva-Voce", credit: 4, grade: "C", gradePoint: 7 },
            { code: "BCH607", name: "General Proficiency", credit: 1, grade: "C", gradePoint: 7 }
        ]
    }
];


// Master Student Record for ZEESHAN KHAN (Batch 2020-23)
const ZEESHAN_STUDENT = {
    id: "GE-20873981",
    enroll_no: "GE-20873981",
    class_roll_no: "2065568",
    name: "ZEESHAN KHAN",
    father_name: "LIYAKAT KHAN",
    mother_name: "AFSAR JAHAN",
    dob: "1998-12-04",
    email: "Zeeshankhann7889@gmail.com",
    official_email: "Zeeshankhann7889@gmail.com",
    phone: "95400789201",
    course: "B.COM (Hons)",
    password: "ZEESHAN1122",
    photo: "zeeshan_photo.png",
    degree_conferred: true,
    degree_name: "BACHELOR OF COMMERCE (HONOURS)",
    degree_serial: "00452849",
    convocation_year: "2023",
    degree_date: "15/10/2024",
    final_cgpa: "7.66",
    final_division: "First Division",
    batch: "2020-2023",
    address: "H NO. 57, CANAL COLONY, CHOTI MASJID, POST AND TEHSIL KICHHA, UDHAM SINGH NAGAR, PIN: 263148, UTTARAKHAND, INDIA"
};

// Master All 6 Semesters Results for ZEESHAN KHAN (Batch 2020-23)
const ALL_ZEESHAN_RESULTS = [
    // Semester 1
    {
        student_id: "GE-20873981",
        semester: "1",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 233171",
        issue_date: "25/01/2021",
        exam_year: "2020-21",
        exam_title: "BACHELOR OF COMMERCE(HONOURS) - I SEMESTER EXAMINATION (2020-21)",
        result_status: "PASS",
        total_credits: 28,
        credits_earned: 28,
        sgpa: "7.62",
        cgpa: "",
        pdf_file: "zeeshan_sem1.pdf",
        subjects: [
            { code: "BCH101", name: "Business Organisation", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH102", name: "Financial Accounting", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH103", name: "Micro Economics", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH104", name: "Business Communication", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH105", name: "Fundamentals Of Computer", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH106", name: "Business Mathematics", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH107", name: "Seminar", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH108", name: "General Proficiency", credit: 3, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 2
    {
        student_id: "GE-20873981",
        semester: "2",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 316616",
        issue_date: "24/07/2021",
        exam_year: "2020-21",
        exam_title: "BACHELOR OF COMMERCE(HONOURS) - SECOND SEMESTER EXAMINATION (2020-21)",
        result_status: "PASS",
        total_credits: 29,
        credits_earned: 29,
        sgpa: "8.00",
        cgpa: "",
        pdf_file: "zeeshan_sem2.pdf",
        subjects: [
            { code: "BCH201", name: "Macro Economics", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH202", name: "Business Law", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH203", name: "Business Finance", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH204", name: "Principles of Management", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH205", name: "Business Statistics", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH206", name: "Environmental Science", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH207", name: "Career Skill-I", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH208", name: "General Proficiency", credit: 3, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 3
    {
        student_id: "GE-20873981",
        semester: "3",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 339593",
        issue_date: "02/02/2022",
        exam_year: "2021-22",
        exam_title: "BACHELOR OF COMMERCE(HONOURS) - III SEMESTER EXAMINATION (2021-22)",
        result_status: "PASS",
        total_credits: 30,
        credits_earned: 30,
        sgpa: "7.50",
        cgpa: "",
        pdf_file: "zeeshan_sem3.pdf",
        subjects: [
            { code: "BCH301", name: "Corporate Accounting", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH302", name: "Human Resource Management", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH303", name: "Industry Law", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH304", name: "Indian Financial System", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH305", name: "Principles of Marketing", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH306", name: "Business Environment", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH307", name: "Career Skill-II", credit: 3, grade: "B", gradePoint: 8 },
            { code: "GP301", name: "General Proficiency", credit: 3, grade: "A+", gradePoint: 9 }
        ]
    },
    // Semester 4
    {
        student_id: "GE-20873981",
        semester: "4",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 357379",
        issue_date: "25/07/2022",
        exam_year: "2021-22",
        exam_title: "BACHELOR OF COMMERCE(Hons) - IV SEM EXAMINATION (2021-22)",
        result_status: "PASS",
        total_credits: 27,
        credits_earned: 27,
        sgpa: "7.75",
        cgpa: "",
        pdf_file: "zeeshan_sem4.pdf",
        subjects: [
            { code: "BCH401", name: "Indian Economy", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH402", name: "Company Law", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH403", name: "Cost Accounting", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH404", name: "Research Methodology", credit: 3, grade: "B+", gradePoint: 7 },
            { code: "BCH405", name: "Management of Financial Services", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH406", name: "Digital Marketing", credit: 3, grade: "B", gradePoint: 8 },
            { code: "BCH407", name: "Computerized Accounting", credit: 3, grade: "A+", gradePoint: 9 },
            { code: "GP408", name: "General Proficiency", credit: 3, grade: "A+", gradePoint: 9 }
        ]
    },
    // Semester 5
    {
        student_id: "GE-20873981",
        semester: "5",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 533535",
        issue_date: "15/02/2023",
        exam_year: "2022-23",
        exam_title: "BACHELOR OF COMMERCE(Hons) - V SEM EXAMINATION (2022-23)",
        result_status: "PASS",
        total_credits: 24,
        credits_earned: 24,
        sgpa: "7.25",
        cgpa: "",
        pdf_file: "zeeshan_sem5.pdf",
        subjects: [
            { code: "BCH501", name: "Management Accounting", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH502", name: "Income Tax Law and Practice", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH503", name: "International Business", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH504", name: "Auditing", credit: 4, grade: "B+", gradePoint: 7 },
            { code: "BCH505", name: "Entrepreneurship and Small Business", credit: 2, grade: "B+", gradePoint: 7 },
            { code: "BCH506", name: "F1 Financial Analysis and Reporting", credit: 2, grade: "B+", gradePoint: 7 },
            { code: "BCH507", name: "F2 Working Capital Management", credit: 2, grade: "B+", gradePoint: 7 },
            { code: "GP501", name: "General Proficiency", credit: 2, grade: "B", gradePoint: 8 }
        ]
    },
    // Semester 6
    {
        student_id: "GE-20873981",
        semester: "6",
        programme: "BACHELOR OF COMMERCE (HONOURS)",
        serial_no: "GEHU 552632",
        issue_date: "29/06/2023",
        exam_year: "2022-23",
        exam_title: "BACHELOR OF COMMERCE(Hons) - FINAL YEAR (BATCH 2020-23)",
        result_status: "PASS",
        total_credits: 27,
        credits_earned: 27,
        sgpa: "7.85",
        cgpa: "7.66",
        pdf_file: "zeeshan_sem6.pdf",
        has_summary_grid: true,
        summary_sgpas: ["7.62", "8.00", "7.50", "7.75", "7.25", "7.85"],
        total_programme_credits: 165,
        total_programme_earned: 165,
        final_result: "PASS",
        subjects: [
            { code: "BCH601", name: "Indirect Tax Laws", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH602", name: "Corporate Governance & Business Ethics", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH603", name: "Project Management", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH604(F3)", name: "Investment Management", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH605(F4)", name: "Multinational Financial System", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH606", name: "Major Project & Viva-Voce", credit: 4, grade: "B", gradePoint: 8 },
            { code: "BCH607", name: "General Proficiency", credit: 3, grade: "B+", gradePoint: 7 }
        ]
    }
];

// Master Student Resolution Helper
function resolvePortalStudent(checkId) {
    var c = (checkId || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (c.includes('salib') || c.includes('22360135') || c.includes('pv22360135')) {
        return { student: SALIB_STUDENT, results: ALL_SALIB_RESULTS };
    }
    if (c.includes('zeeshan') || c.includes('2065568') || c.includes('ge20873981')) {
        return { student: ZEESHAN_STUDENT, results: ALL_ZEESHAN_RESULTS };
    }
    if (c.includes('sohil') || c.includes('2187530') || c.includes('ge21538540')) {
        return { student: SOHIL_STUDENT, results: ALL_SOHIL_RESULTS };
    }
    if (c.includes('hashim') || c.includes('21545586') || c.includes('2154682')) {
        return { student: DEFAULT_STUDENT, results: ALL_DEFAULT_RESULTS };
    }
    // Default Active Student: ZEESHAN KHAN
    return { student: ZEESHAN_STUDENT, results: ALL_ZEESHAN_RESULTS };
}

const DEFAULT_RESULT = ALL_DEFAULT_RESULTS[0];

// Clean & Reset Database to Default Records
async function dbResetDatabaseToHashimOnly() {
    if (supabaseClient) {
        try {
            await supabaseClient.from('students').upsert([DEFAULT_STUDENT, SOHIL_STUDENT, SALIB_STUDENT, ZEESHAN_STUDENT]);
            await supabaseClient.from('results').upsert([...ALL_DEFAULT_RESULTS, ...ALL_SOHIL_RESULTS, ...ALL_SALIB_RESULTS, ...ALL_ZEESHAN_RESULTS]);
            console.log("Database reset to master records successfully!");
        } catch(e) {
            console.error("Reset error:", e);
        }
    }
    localStorage.clear();
    localStorage.setItem('ge_students', JSON.stringify([ZEESHAN_STUDENT, SALIB_STUDENT, SOHIL_STUDENT, DEFAULT_STUDENT]));
    localStorage.setItem('ge_results_PV-22360135', JSON.stringify(ALL_SALIB_RESULTS));
    localStorage.setItem('ge_results_GE-21538540', JSON.stringify(ALL_SOHIL_RESULTS));
    localStorage.setItem('ge_results_GE-21545586', JSON.stringify(ALL_DEFAULT_RESULTS));
    return true;
}

// Ensure master students exist in Supabase
async function initDefaultData() {
    if (!supabaseClient) return;
    try {
        await supabaseClient.from('students').upsert([SALIB_STUDENT, SOHIL_STUDENT, DEFAULT_STUDENT]);
        await supabaseClient.from('results').upsert([...ALL_SALIB_RESULTS, ...ALL_SOHIL_RESULTS, ...ALL_DEFAULT_RESULTS]);
    } catch (e) {
        console.error("Init seed error:", e);
    }
}

// Fetch all students
async function dbGetStudents() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('students').select('*').order('created_at', { ascending: false });
            if (!error && data && data.length > 0) {
                let list = [...data];
                if (!list.some(x => x.enroll_no === SALIB_STUDENT.enroll_no)) list.unshift(SALIB_STUDENT);
                if (!list.some(x => x.enroll_no === SOHIL_STUDENT.enroll_no)) list.push(SOHIL_STUDENT);
                if (!list.some(x => x.enroll_no === DEFAULT_STUDENT.enroll_no)) list.push(DEFAULT_STUDENT);
                return list;
            }
        } catch (e) {
            console.error("Supabase get students error:", e);
        }
    }
    // Local fallback
    var local = localStorage.getItem('ge_students');
    return local ? JSON.parse(local) : [SALIB_STUDENT, SOHIL_STUDENT, DEFAULT_STUDENT];
}

// Add or Update a student
async function dbAddStudent(student) {
    if (!student.enroll_no || !student.class_roll_no) {
        const allStudents = await dbGetStudents();
        let maxEnroll = 21545586;
        let maxRoll = 2154682;
        allStudents.forEach(s => {
            let numEnroll = parseInt((s.enroll_no || '').replace(/\D/g, ''));
            let numRoll = parseInt((s.class_roll_no || '').replace(/\D/g, ''));
            if (!isNaN(numEnroll) && numEnroll > maxEnroll) maxEnroll = numEnroll;
            if (!isNaN(numRoll) && numRoll > maxRoll) maxRoll = numRoll;
        });

        if (!student.enroll_no) student.enroll_no = "GE-" + (maxEnroll + 1);
        if (!student.class_roll_no) student.class_roll_no = "" + (maxRoll + 1);
    }

    student.id = student.enroll_no;
    if (!student.password) student.password = "student@123";
    if (!student.official_email) student.official_email = student.email || (student.enroll_no.toLowerCase() + "@geu.ac.in");

    if (supabaseClient) {
        try {
            await supabaseClient.from('students').upsert([student]);
        } catch (e) {
            console.error("Supabase upsert error:", e);
        }
    }

    let all = await dbGetStudents();
    all = all.filter(s => s.enroll_no !== student.enroll_no);
    all.unshift(student);
    localStorage.setItem('ge_students', JSON.stringify(all));
    return student;
}

// Delete student
async function dbDeleteStudent(enrollNo) {
    if (supabaseClient) {
        try {
            await supabaseClient.from('students').delete().eq('enroll_no', enrollNo);
            await supabaseClient.from('results').delete().eq('student_id', enrollNo);
        } catch (e) {
            console.error("Supabase delete error:", e);
        }
    }
    let all = await dbGetStudents();
    all = all.filter(s => s.enroll_no !== enrollNo);
    localStorage.setItem('ge_students', JSON.stringify(all));
}

// Get results for a student
async function dbGetResults(studentEnrollNo) {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('results').select('*').eq('student_id', studentEnrollNo).order('semester', { ascending: true });
            if (!error && data && data.length > 0) return data;
        } catch (e) {
            console.error("Supabase get results error:", e);
        }
    }

    // Local fallback
    var localRes = localStorage.getItem('ge_results_' + studentEnrollNo);
    if (localRes) return JSON.parse(localRes);
    if (studentEnrollNo === SOHIL_STUDENT.enroll_no) return ALL_SOHIL_RESULTS;
    if (studentEnrollNo === DEFAULT_STUDENT.enroll_no) return ALL_DEFAULT_RESULTS;
    return [];
}

// Add/Publish a semester result
async function dbAddResult(resultData) {
    if (supabaseClient) {
        try {
            await supabaseClient.from('results').delete().eq('student_id', resultData.student_id).eq('semester', resultData.semester);
            await supabaseClient.from('results').insert([resultData]);
        } catch (e) {
            console.error("Supabase insert result error:", e);
        }
    }

    // Local fallback
    let list = await dbGetResults(resultData.student_id);
    list = list.filter(r => ("" + r.semester) !== ("" + resultData.semester));
    list.push(resultData);
    list.sort((a, b) => parseInt(a.semester) - parseInt(b.semester));
    localStorage.setItem('ge_results_' + resultData.student_id, JSON.stringify(list));
    return resultData;
}

// Grade & SGPA calculation utility
function calculateGradesAndSGPA(subjects) {
    let totalCredits = 0;
    let totalWeightedPoints = 0;
    let creditsEarned = 0;
    let isPass = true;

    subjects.forEach(sub => {
        let marks = parseFloat(sub.marks) || 0;
        let credit = parseFloat(sub.credit) || 0;
        let grade = "F";
        let point = 0;

        if (marks >= 85) { grade = "A+"; point = 9; }
        else if (marks >= 75) { grade = "A"; point = 8; }
        else if (marks >= 70) { grade = "B+"; point = 7; }
        else if (marks >= 60) { grade = "B"; point = 7; }
        else if (marks >= 50) { grade = "C"; point = 6; }
        else if (marks >= 40) { grade = "P"; point = 4; }
        else { grade = "F"; point = 0; isPass = false; }

        sub.grade = grade;
        sub.gradePoint = point;

        totalCredits += credit;
        totalWeightedPoints += (credit * point);
        if (point > 0) creditsEarned += credit;
    });

    let sgpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : "0.00";
    return {
        subjects: subjects,
        totalCredits: totalCredits,
        creditsEarned: creditsEarned,
        sgpa: sgpa,
        resultStatus: isPass ? "Pass" : "Fail"
    };
}

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        initDefaultData();
    });
}

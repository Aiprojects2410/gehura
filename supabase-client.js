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

const DEFAULT_RESULT = ALL_DEFAULT_RESULTS[0];

// Clean & Reset Database to MOHD HASHIM Only
async function dbResetDatabaseToHashimOnly() {
    if (supabaseClient) {
        try {
            await supabaseClient.from('students').delete().neq('enroll_no', 'GE-21545586');
            await supabaseClient.from('results').delete().neq('student_id', 'GE-21545586');
            
            await supabaseClient.from('students').upsert([DEFAULT_STUDENT]);
            await supabaseClient.from('results').upsert(ALL_DEFAULT_RESULTS);
            console.log("Database reset to MOHD HASHIM 6 semester records successfully!");
        } catch(e) {
            console.error("Reset error:", e);
        }
    }
    localStorage.clear();
    localStorage.setItem('ge_students', JSON.stringify([DEFAULT_STUDENT]));
    localStorage.setItem('ge_results_GE-21545586', JSON.stringify(ALL_DEFAULT_RESULTS));
    return true;
}

// Ensure default student exists in Supabase
async function initDefaultData() {
    if (!supabaseClient) return;
    try {
        const { data: students, error } = await supabaseClient.from('students').select('*').eq('enroll_no', 'GE-21545586');
        if (!error && (!students || students.length === 0)) {
            await supabaseClient.from('students').upsert([DEFAULT_STUDENT]);
            await supabaseClient.from('results').upsert(ALL_DEFAULT_RESULTS);
        }
    } catch (e) {
        console.error("Init seed error:", e);
    }
}

// Fetch all students
async function dbGetStudents() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('students').select('*').order('created_at', { ascending: false });
            if (!error && data && data.length > 0) return data;
        } catch (e) {
            console.error("Supabase get students error:", e);
        }
    }
    // Local fallback
    var local = localStorage.getItem('ge_students');
    return local ? JSON.parse(local) : [DEFAULT_STUDENT];
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

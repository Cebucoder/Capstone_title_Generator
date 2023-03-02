const computerChoices = [
  'Online E-Learning System',
  'Online Examination System',
  'OJT Timesheet Monitoring System',
  'Home Surveillance and Automation',
  'iPhone SMS Notification Systems',
  'Using GSM Technologies for Detecting Theft',
  'POS Apps and Their Use',
  'Business Use Cases for Accounting Apps',
  'Time Tracking Solutions for Office Productivity',
  'SMS Doorbell Notification Tools',
  'Wireless Technologies for Surveillance',
  'Online Learning Systems and Their Relevance',
  'Online Apps For Business Management',
  'Improving Nursing Education With a Healthcare System',
  '"Project Management Tracking Systems',
  'Biometric Security Systems',
  'Most Important Tools For Managing Data Security',
  'How The Internet Works: The Basics',
  'Introduction to Data Mining',
  'Emergency Vehicle Notification Systems',
  'Benefits of Data Mining',
  'Student Tracking Performance',
  'Library Information System',
  'Student Information System',
  'Student Handbook Application',
  'Thesis and Capstone Archiving System',
  'School Portal Application',
  'School Events Attendance System',
  'Grading System',
  'Student Profile and Guidance Services with Decision Support',
  'Faculty Evaluation System',
  'Online School Documents Processing with Payment System',
  'Class Scheduling System',
  'Student Council Voting System',
  'Android Based E-learning',
  'OJT Records Monitoring System',
  'Sales and Inventory System',
  'Point of Sale Application',
  'Boarding House Management System',
  'COOP Management System',
  'Insurance Management System',
  'Beauty Parlor Management System',
  'Daily Time Record and Payroll System with Barcode/Biometric',
  'Budget Management System',
  'Queuing System',
  'Financial Management with SMS Notification',
  'Procurement Management System',
  'Financial Documents Archiving Management System',
  'Teller’s Queuing System Using Barcode Technolog',
  'Service Marketplace System',
  '"Tailor Booking Management System',
  'Expense Tracking and Monitoring System',
  'Loan Transaction and Reservation with SMS',
  'Accounting Information Management System',
  'Food Order and Catering Services System',
  'Online and SMS Based Salary Notification',
  'Pharmacy Stocks Management',
  'Laundry Booking System',
  'Hotel Reservation Application',
  'Tourism Management Database System',
  'Management Information Systems for Tourism and Hospitality',
  'Hotel And Restaurant Management And Monitoring System with SMS',
  'Mobile Based Tourist Destination Information',
  'Hotel Best Prices Mobile Application',
  'Hospitality Information System',
  'Cloud-Based Property and Hospitality Management',
  'Hotel Booking App For Smart Travel',
  'Point of Sale (PoS) System used in the Hotel Industry',
  'BrowseHotel: Hotel Hopping using Mobile Devices',
  'Transaction Processing System in Hotel and Restaurant',
  'Travel Destination and Events Portal Capstone Project',
  'Property Management Information System',
  'Hotels and Vacation Rentals',
  'Maternal Records Management'
];  

function Generator() {
  let canvas = document.getElementById("canvas");
  let sampleTitle = Math.floor(Math.random()* computerChoices.length);
  let computer = computerChoices[sampleTitle];

  document.getElementById('gen').innerHTML = `${computer}`;

    
    canvas.classList.toggle("canvas-anim");
    setTimeout(function() {
    canvas.classList.remove("canvas-anim");
  }, 300);


}


window.onload = function() {
  
  Generator();

}

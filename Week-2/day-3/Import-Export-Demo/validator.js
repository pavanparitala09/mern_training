function validateTitle(title) {
    // Checks for null, undefined, or empty strings
    if (!title || title.length < 3)
        return false;
    else 
        return true;
}


function validatePriority(priority) {
    // Check for priority level
    if(priority!= "low" || priority!="medium"|| priority!="high")
        return false
    else
        return true

 }

 function validateDueDate(date) {
    const due = new Date(date)
    const now = new Date()
    if (due <= now || !date || due<=now) {
    return { valid: false, message: "Due date must be a future date." };
  }
  return { valid: true, message: "Due date is valid." };

 
 }

export { validateTitle, validatePriority, validateDueDate };